package com.test.steps;

import org.json.JSONException;
import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.Random;

public class test {
    public static void main(String[] args) {
        ArrayList<JSONObject> arrayList = new ArrayList<JSONObject>();
        JSONObject postedJSON = new JSONObject();
        JSONObject postedJSON1 = new JSONObject();
        JSONObject mainJson = new JSONObject();
        try {
            postedJSON.put("key", "value");
            postedJSON.put("key1", "value2");
            postedJSON.put("key2", "value3");
            // add key value for json formati
        } catch (JSONException e) {
            e.printStackTrace();
        }
        try {
            postedJSON1.put("key", "value111");
            postedJSON1.put("key1", "value211");
            postedJSON1.put("key2", "value311");
            // add key value for json formati
        } catch (JSONException e) {
            e.printStackTrace();
        }
        arrayList.add(postedJSON);
        arrayList.add(postedJSON1);
        String variable = arrayList.toString();
        System.out.println(variable);
        mainJson.put("Id", "1234");
        mainJson.put("uid", "hjki");
        mainJson.put("account", arrayList);
        System.out.println(mainJson.toString());

        Random random=new Random();
        int num=random.nextInt(10000);
        String s="9999"+num;
        System.out.println(s);
    }
}
