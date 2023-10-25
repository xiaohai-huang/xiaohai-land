using System.Threading.Tasks;
using UnityEngine;

namespace DiffTool
{
    class YZQBSDiff : IDiffTool
    {
        public Task<bool> ApplyPatch(string oldFilePath, string patchFilePath, string outputFilePath)
        {
            var tcs = new TaskCompletionSource<bool>();

            var callback = new AndroidJavaRunnable(() =>
           {
               using AndroidJavaObject diffTool = new AndroidJavaObject("com.example.myappupdatemanager.DiffTool");
               bool success = diffTool.Call<bool>("PatchSync", oldFilePath, patchFilePath, outputFilePath);
               tcs.SetResult(success);
           });

            using var thread = new AndroidJavaObject("java.lang.Thread", callback);
            thread.Call("start");

            return tcs.Task;
        }
    }
}