using System;
using System.IO;
using System.Threading.Tasks;
using BsDiff;

namespace DiffTool
{
    class DotNetBSDiff : IDiffTool
    {
        public async Task<bool> ApplyPatch(string oldFilePath, string patchFilePath, string outputFilePath)
        {
            return await Task.Run(() =>
            {
                try
                {
                    using var oldFile = File.OpenRead(oldFilePath);
                    using var newFile = File.Create(outputFilePath);
                    BinaryPatch.Apply(oldFile, () => File.OpenRead(patchFilePath), newFile);
                    return true;
                }
                catch (Exception e)
                {
                    UnityEngine.Debug.LogException(e);
                    return false;
                }
            });
        }
    }
}