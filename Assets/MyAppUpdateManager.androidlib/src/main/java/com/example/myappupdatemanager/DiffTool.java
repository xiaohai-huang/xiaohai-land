package com.example.myappupdatemanager;

import com.yzq.bsdiff.BsDiffTool;

public class DiffTool {
    public void Patch(String oldFilePath, String patchFilePath, String outputFilePath, OnFinishListener callback) {
        System.out.println("Before run patch");

        Runnable patchRunnable = new Runnable() {
            @Override
            public void run() {
                int success = BsDiffTool.INSTANCE.patch(oldFilePath, patchFilePath, outputFilePath);
                System.out.println("After run patch");
                callback.OnFinish(success == 0);
            }
        };

        Thread thread = new Thread(patchRunnable);
        thread.start();
    }

    public boolean PatchSync(String oldFilePath, String patchFilePath, String outputFilePath) {
        System.out.println("[PatchSync] Before run patch");
        int success = BsDiffTool.INSTANCE.patch(oldFilePath, patchFilePath, outputFilePath);
        System.out.println("[PatchSync] After run patch");
        return success == 0;
    }
}