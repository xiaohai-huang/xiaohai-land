using System.Threading.Tasks;

namespace DiffTool
{
    public interface IDiffTool
    {
        public Task<bool> ApplyPatch(string oldFilePath, string patchFilePath, string outputFilePath);
    }
}