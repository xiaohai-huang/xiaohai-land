package com.example.myappupdatemanager;

import com.yzq.bsdiff.BsDiffTool;

public class DiffTool {
    public int Patch(String oldFilePath, String patchFilePath, String outputFilePath){
        System.out.println(BsDiffTool.INSTANCE.getClass().getName());
        System.out.println("Before run patch");
        int success = BsDiffTool.INSTANCE.patch(oldFilePath, patchFilePath,outputFilePath);
        System.out.println("After run patch");

        return  success;
    }
}