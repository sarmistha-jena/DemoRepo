package runner;


import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.File;

@RunWith(Cucumber.class)



/*@RunWith(ExtendedCucumber.class)

@ExtendedCucumberOptions(
        jsonReport = "target/cucumber.json",
        jsonUsageReport = "target/cucumber-usage.json",
        usageReport = true,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        overviewChartsReport = true,
        pdfPageSize = "A4 Landscape",
        toPDF = true,
        outputFolder = "target/reports",
        retryCount = 0)*/

/*@CucumberOptions(
        features = {"src/test/resources/features"},
        glue = {"eu.nets.nws.steps" },
        tags = {"~@skip","~@pending"},
        plugin = {"pretty:STDOUT","html:target/cucumber-pretty",
                "pretty:target/reports/cucumber-pretty.txt",
                "usage:target/cucumber-usage.json",
                "junit:target/reports/cucumber-results.xml",
                "json:target/cucumber.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"
        })*/


@CucumberOptions(features = {"src/test/resources/features"},
        glue = {"eu.nets.nws.steps"}, monochrome = true, tags = {"~@skip", "~@pending"},
        plugin = {"pretty", "html:target/site/cucumber-pretty", "json:target/cucumber/cucumber.json",
                //"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"
                "com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"})

public class Runner {
    @AfterClass
    public static void setup() {
        Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
        Reporter.setSystemInfo("User Name", "SJ");
        Reporter.setSystemInfo("Application Name", "NWS");
        Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name"));
        Reporter.setSystemInfo("Environment", "Test");
        Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
    }
}
