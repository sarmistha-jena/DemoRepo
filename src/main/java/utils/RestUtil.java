package utils;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONObject;

import java.util.Map;
import java.util.Random;

import static io.restassured.RestAssured.*;

public class RestUtil {

    //Global Setup Variables
    public static String path; //Rest request path

    /*
    ***Sets Base URI***
    Before starting the test, we should set the RestAssured.baseURI
    */
    public static void setBaseURI(String baseURI) {
        RestAssured.baseURI = baseURI;
    }

    /*
    ***Sets base path***
    Before starting the test, we should set the RestAssured.basePath
    */
    public static void setBasePath(String basePathTerm) {
        RestAssured.basePath = basePathTerm;
    }

    /*
    ***Reset Base URI (after test)***
    After the test, we should reset the RestAssured.baseURI
    */
    public static void resetBaseURI() {
        RestAssured.baseURI = null;
    }

    /*
    ***Reset base path (after test)***
    After the test, we should reset the RestAssured.basePath
    */
    public static void resetBasePath() {
        RestAssured.basePath = null;
    }

    /*
    ***Sets ContentType***
    We should set content type as JSON or XML before starting the test
    */
    public static void setContentType(ContentType Type) {
        given().contentType(Type);
    }

    /*
    ***Returns response***
    We send "path" as a parameter to the Rest Assured'a "get" method
    and "get" method returns response of API
    */
    public static Response getResponse() {
        return get(path);
    }

    /*
     ***Returns JsonPath object***
     * First convert the API's response to String type with "asString()" method.
     * Then, send this String formatted json response to the JsonPath class and return the JsonPath
     */
    public static JsonPath getJsonPath(Response res) {
        String json = res.asString();
        return new JsonPath(json);
    }


    public static Response postResponse(Map<String, String> params) {
        return post(path, params);
    }

    public static int getResponseCode(Response res) {
        return res.getStatusCode();
    }

    public static String generateExternalId(String extId){
        Random random=new Random();
        int num=random.nextInt(10000);
        String s=extId+num;
        Log.info("*******External Id********"+s);
        return s;
    }

    public static String getToken() {

        RequestSpecification request = RestAssured.given();
        JSONObject requestParams = new JSONObject();

        requestParams.put("username", ReadConfigFile.getConfigProperty("username"));
        requestParams.put("password", ReadConfigFile.getConfigProperty("password"));
        RestUtil.setContentType(ContentType.JSON);

        // Adding the Json to the body of the request
        request.body(requestParams.toJSONString());
        Response response = request.post("/auth");

        return response.getHeader("Authorization");

    }
}
