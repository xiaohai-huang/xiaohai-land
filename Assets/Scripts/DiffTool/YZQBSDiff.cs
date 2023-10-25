using System;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.Scripting;

namespace DiffTool
{
    class YZQBSDiff : IDiffTool
    {
        public Task<bool> ApplyPatch(string oldFilePath, string patchFilePath, string outputFilePath)
        {
            var tcs = new TaskCompletionSource<bool>();

            using AndroidJavaObject diffTool = new AndroidJavaObject("com.example.myappupdatemanager.DiffTool");
            // Debug.Log("Before call Patch");
            diffTool.Call("Patch", oldFilePath, patchFilePath, outputFilePath,
            new OnFinishCallback((success) =>
            {
                tcs.SetResult(success);
            }));
            // Debug.Log("After call Patch");
            return tcs.Task;
        }
    }

    class OnFinishCallback : AndroidJavaProxy
    {
        private readonly Action<bool> _cb;
        public OnFinishCallback(Action<bool> cb) : base("com.example.myappupdatemanager.OnFinishListener") { _cb = cb; }
        [Preserve]
        void OnFinish(bool success)
        {
            _cb?.Invoke(success);
        }
    }
}