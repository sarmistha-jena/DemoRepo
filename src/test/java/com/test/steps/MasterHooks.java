package com.test.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.Log;
import utils.ReadConfigFile;
import utils.RestUtil;

import org.apache.log4j.xml.DOMConfigurator;

public class MasterHooks {

    ReadConfigFile readConfigFile = new ReadConfigFile();

    @Before
    public void setUp() {
        DOMConfigurator.configure("log4j.xml");
        Log.startTestCase("Test case...");
        RestUtil.setBaseURI(readConfigFile.getUrl());
    }

    @After
    public void tearDown() {
        // RestUtil.resetBasePath();

    }

}
