using System;
using System.Diagnostics;
using System.Threading.Tasks;
using ReactUnity;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Networking;

public class UpdateScriptSource : MonoBehaviour
{
    public string ScriptSourceConfigUrl;
    private ReactRendererBase _rendererBase;

    public UnityEvent OnStartDownloadScript;
    public UnityEvent OnFinishDownloadScript;

    void Awake()
    {
        // Important: The renderer should disable AutoRender
        _rendererBase = GetComponent<ReactRendererBase>();
    }

    async void OnEnable()
    {
        if (_rendererBase.Source.ShouldUseDevServer)
        {
            _rendererBase.Source.SourcePath = "Dev Server | " + _rendererBase.Source.DevServer;
            _rendererBase.Render();
        }
        else
        {
            // Populate the SourcePath using the config file
            OnStartDownloadScript?.Invoke();
            string sourcePath = await GetScriptUrl();
            OnFinishDownloadScript?.Invoke();
            _rendererBase.Source = new ScriptSource() { Type = ScriptSourceType.Url, SourcePath = sourcePath, UseDevServer = ScriptSource.DevServerType.Never };
            _rendererBase.Render();
        }
    }

    async Task<string> GetScriptUrl()
    {
        using UnityWebRequest webRequest = UnityWebRequest.Get(ScriptSourceConfigUrl);

        Stopwatch stopwatch = new Stopwatch();
        stopwatch.Start();

        await webRequest.SendWebRequest();
        stopwatch.Stop();
        TimeSpan timeSpent = stopwatch.Elapsed;

        UnityEngine.Debug.Log("Time spent on download index.js: " + timeSpent.TotalSeconds + " seconds");

        if (webRequest.result == UnityWebRequest.Result.ConnectionError)
        {
            throw new Exception("Connection Error: " + webRequest.error);
        }
        else
        {
            var data = JsonUtility.FromJson<Data>(webRequest.downloadHandler.text);
            return data.url;
        }
    }
    struct Data
    {
        public string url;
    }
}
