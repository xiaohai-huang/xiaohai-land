using System.Threading.Tasks;
using UnityEngine;

namespace DiffTool
{
    class YZQBSDiff : IDiffTool
    {
        public async Task<bool> ApplyPatch(string oldFilePath, string patchFilePath, string outputFilePath)
        {
            using AndroidJavaObject diffTool = new AndroidJavaObject("com.example.myappupdatemanager.DiffTool");
            // Debug.Log("Before call Patch");
            int result = await Task.Run(() => diffTool.Call<int>("Patch", oldFilePath, patchFilePath, outputFilePath));
            Debug.Log("[YZQBSDiff] result: " + result);

            // Debug.Log("After call Patch");
            return result == 0;
        }
    }
}