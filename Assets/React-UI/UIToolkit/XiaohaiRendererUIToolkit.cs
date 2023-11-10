using ReactUnity;
using ReactUnity.Scheduling;
using ReactUnity.UIToolkit;

namespace XiaohaiLand.UI.UIToolkit
{
    public class XiaohaiRendererUIToolkit : ReactRendererUIToolkit
    {
        protected override ReactContext CreateContext(ScriptSource script)
        {
            AdvancedOptions.BeforeStart.AddListener(() =>
            {
                Context.Script.Engine.SetGlobal("StyleHelper", StyleHelper.Instance);
            });

            XiaohaiUIToolkitContext context = new XiaohaiUIToolkitContext(new UIToolkitContext.Options
            {
                HostElement = Root,
                Globals = Globals,
                Source = script,
                Timer = (base.Timer ?? UnscaledTimer.Instance),
                MediaProvider = base.MediaProvider,
                OnRestart = () => Render(),
                OnAudioPlayback = PlayAudio,
                EngineType = EngineType,
                Debug = (AdvancedOptions.DebugMode != DebugMode.None),
                AwaitDebugger = (AdvancedOptions.DebugMode == DebugMode.DebugAndAwait),
                BeforeStart = AdvancedOptions.BeforeStart.Invoke,
                AfterStart = AdvancedOptions.AfterStart.Invoke,
                Pooling = AdvancedOptions.Pooling,
                UnknownPropertyHandling = AdvancedOptions.UnknownPropertyHandling
            });
            context.Initialize();
            return context;
        }

        public void SetUseDevServer(int value)
        {
            Source.UseDevServer = (ScriptSource.DevServerType)value;
        }
    }
}
