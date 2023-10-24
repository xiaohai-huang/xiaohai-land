namespace DiffTool
{
    public static class DiffToolFactory
    {
        public static IDiffTool Create(Tool tool)
        {
            switch (tool)
            {
                case Tool.YZQBSDiff: return new YZQBSDiff();
                case Tool.DotNetBSDiff: return new DotNetBSDiff();
                default:
                    return new YZQBSDiff();
            }
        }
    }
    public enum Tool
    {
        DotNetBSDiff = 0,
        YZQBSDiff
    }
}