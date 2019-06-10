package com.test.services;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Header;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Assert;
import utils.DatabaseVerification;
import utils.Log;
import utils.RestUtil;

import java.sql.SQLException;
import java.util.ArrayList;

public class UserAccountPage {

    private static final String EXTERNAL_ID = "externalId";
    private static final String FULL_NAME = "fullName";
    private static final String PHONE_NUMBER = "phoneNumber";
    private static final String ADDRESS_LINE1 = "addressLine1";
    private static final String ADDRESS_LINE2 = "addressLine2";
    private static final String ZIP_CODE = "zipCode";
    private static final String NAME = "name";
    private static final String ACCOUNT_TYPE_CODE = "accountTypeCode";
    private static final String PARENT_EXTERNAL_ID = "parentExternalId";
    private static final String EMAIL = "email";
    private static final String CITY = "city";
    private static final String COUNTRY = "country";
    private static final String ACCOUNT_DETAILS = "accountsDetails";
    private static final String AUTHORIZATION ="Authorization";
    public static String accessToken;
    public static String generateExternalId;
    private DatabaseVerification dbVerification = new DatabaseVerification();

    public static void getToken( ) {


        accessToken = RestUtil.getToken();

    }

    /**
     * @param extId-External Id
     * @param name-Name
     * @param accTypeCode-Account type code
     * @param parExtId- parent external id
     * @param fullName-Full name
     * @param phone-Phone
     * @param email-Email
     * @param addr1-Address1
     * @param addr2-Address2
     * @param zip-Zip
     * @param city-City
     */
    public Response createAccount(String extId, String name, String accTypeCode, String parExtId, String fullName, String phone, String email,
                                  String addr1, String addr2, String zip, String city) {

        Log.info(RestAssured.baseURI);
        RequestSpecification request = RestAssured.given().header(new Header(AUTHORIZATION, accessToken));
        JSONObject requestParams = new JSONObject();

        ArrayList<JSONObject> accDetails = new ArrayList<JSONObject>();
        JSONObject postedJSON = new JSONObject();

        generateExternalId=RestUtil.generateExternalId(extId);
        Log.info(generateExternalId);

        postedJSON.put(EXTERNAL_ID,generateExternalId);
        postedJSON.put(NAME, name);
        postedJSON.put(ACCOUNT_TYPE_CODE, accTypeCode);
        postedJSON.put(PARENT_EXTERNAL_ID, parExtId);

        accDetails.add(postedJSON);

        requestParams.put(FULL_NAME, fullName);
        requestParams.put(PHONE_NUMBER, phone);
        requestParams.put(EMAIL, email);
        requestParams.put(ADDRESS_LINE1, addr1);
        requestParams.put(ADDRESS_LINE2, addr2);
        requestParams.put(ZIP_CODE, zip);
        requestParams.put(CITY, city);
        requestParams.put(COUNTRY, "country");
        requestParams.put(ACCOUNT_DETAILS, accDetails);
        request.contentType(ContentType.JSON);

        Log.info(requestParams.toJSONString());

        // Adding the Json to the body of the request
        request.body(requestParams.toJSONString());
        // Post the request and check the response
        return request.post("/user-account/v1/accounts/");

    }

    /**
     * @param response
     * @param code
     */


    public void verifyResponseCode(Response response, int code) {
        Assert.assertEquals(code, RestUtil.getResponseCode(response));
    }

    /**
     * @param fullName
     * @param phone
     * @param email
     * @param addr1
     * @param addr2
     * @param zip
     * @param city
     * @return
     */
    public Response updateAccount(String fullName, String phone, String email,
                                  String addr1, String addr2, String zip, String city) {

        //RestUtil.setBasePath("v1/accounts/");
        RequestSpecification request;
        request = RestAssured.given().pathParam(EXTERNAL_ID, generateExternalId).header(new Header(AUTHORIZATION, accessToken));
        JSONObject requestParams = new JSONObject();

        requestParams.put(FULL_NAME, fullName);
        requestParams.put(PHONE_NUMBER, phone);
        requestParams.put(EMAIL, email);
        requestParams.put(ADDRESS_LINE1, addr1);
        requestParams.put(ADDRESS_LINE2, addr2);
        requestParams.put(ZIP_CODE, zip);
        requestParams.put(CITY, city);

        request.contentType(ContentType.JSON);

        // Adding the Json to the body of the request
        request.body(requestParams.toJSONString());

        // Post the request and check the response
        Response res = request.put("/user-account/v1/accounts/{externalId}/contactDetails");
        System.out.println(res.asString());
        return res;

    }

    /**
     * @return
     */
    public Response deleteAccount() {
        RequestSpecification request = RestAssured.given().header(new Header(AUTHORIZATION, accessToken)).pathParam(EXTERNAL_ID, generateExternalId);
        return request.when().put("user-account/v1/accounts/{externalId}");
    }

    /**
     * @return
     */
    public Response getAccountDetails() {
        RequestSpecification request = RestAssured.given().header(new Header(AUTHORIZATION, accessToken)).pathParam(EXTERNAL_ID, generateExternalId);
        return request.when().get("user-account/v1/accounts/{externalId}");
    }

    public Response getAccountDetailsWithInvalidExtId(String extId) {
        RequestSpecification request = RestAssured.given().header(new Header(AUTHORIZATION, accessToken)).pathParam(EXTERNAL_ID, extId);
        return request.when().get("user-account/v1/accounts/{externalId}");
    }

    /**
     * @param extId
     * @param name
     * @param accTypeCode
     * @param parExtId
     * @param fullName
     * @param phone
     * @param email
     * @param addr1
     * @param addr2
     * @param zip
     * @param city
     * @return
     */
    public boolean verifyUserDetailsInDb(String extId, String name, String accTypeCode, String parExtId,
                                         String fullName, String phone, String email,
                                         String addr1, String addr2, String zip, String city) {
        try {
            dbVerification.verifyAccountDetails(extId, name, accTypeCode, parExtId,
                    fullName, phone, email,
                    addr1, addr2, zip, city);
        } catch (SQLException e) {
            Log.error(e.getMessage());
        }
        return false;
    }

    /**
     * @param fullName
     * @return
     */
    public Response updateAccountWithFullName(String fullName) {

        RequestSpecification request;
        request = RestAssured.given().header(new Header(AUTHORIZATION, accessToken)).pathParam(EXTERNAL_ID, generateExternalId);
        JSONObject requestParams = new JSONObject();

        requestParams.put(FULL_NAME, fullName);

        request.contentType(ContentType.JSON);
        // Adding a header stating the Request body is a JSON
        RestUtil.setContentType(ContentType.JSON);

        // Adding the Json to the body of the request
        request.body(requestParams.toJSONString());

        // Post the request and check the response
        Response res = request.put("/user-account/v1/accounts/{externalId}/contactDetails");
        System.out.println(res.asString());
        return res;
    }

    /**
     * @param extId
     * @return
     */
    public Response updateAccountWithInvalidExternalId(String extId) {
        RequestSpecification request;
        request = RestAssured.given().header(new Header(AUTHORIZATION, accessToken)).pathParam(EXTERNAL_ID, extId);
        JSONObject requestParams = new JSONObject();

        request.contentType(ContentType.JSON);
        // Adding a header stating the Request body is a JSON
        RestUtil.setContentType(ContentType.JSON);

        // Adding the Json to the body of the request
        request.body(requestParams.toJSONString());

        // Post the request and check the response
        return request.put("/user-account/v1/accounts/{externalId}/contactDetails");

    }

    /**
     * @param res
     * @param externalId
     * @param name
     * @param accountTypeCode
     * @param parentExternalId
     * @param fullName
     * @param phoneNumber
     * @param email
     * @param addressLine1
     * @param addressLine2
     * @param zipCode
     * @param city
     */
    public void verifyContactDetails(Response res, String externalId, String name, String accountTypeCode, String parentExternalId, String fullName,
                                     String phoneNumber, String email, String addressLine1, String addressLine2, String zipCode, String city) {

        JSONParser parse = new JSONParser();
        try {
            JSONArray userDetails = (JSONArray) parse.parse(res.asString());

            JSONObject jsonobj_1 = (JSONObject) userDetails.get(0);
            JSONArray accDetails = (JSONArray) jsonobj_1.get(ACCOUNT_DETAILS);
            String fullNameVal = jsonobj_1.get(FULL_NAME).toString();
            String phoneNumberVal = jsonobj_1.get(PHONE_NUMBER).toString();
            String emailVal = jsonobj_1.get(EMAIL).toString();
            String addressLine1Val = jsonobj_1.get(ADDRESS_LINE1).toString();
            String addressLine2Val = jsonobj_1.get(ADDRESS_LINE2).toString();
            String zipCodeVal = jsonobj_1.get(ZIP_CODE).toString();
            String cityVal = jsonobj_1.get(CITY).toString();

            String externalId1 = ((JSONObject) accDetails.get(0)).get(EXTERNAL_ID).toString();
            String nameVal = ((JSONObject) accDetails.get(0)).get(NAME).toString();
            String accounttypecodeVal = ((JSONObject) accDetails.get(0)).get(ACCOUNT_TYPE_CODE).toString();
            String parentExternalIdVal = ((JSONObject) accDetails.get(0)).get(PARENT_EXTERNAL_ID).toString();

            // Validate the response
            Assert.assertEquals("Wrong External Id", externalId1, externalId);
            Assert.assertEquals("Wrong name", nameVal, name);
            Assert.assertEquals("Wrong accountTypeCode", accounttypecodeVal, accountTypeCode);
            Assert.assertEquals("Wrong parentExternalId", parentExternalIdVal, parentExternalId);
            Assert.assertEquals("Wrong fullName", fullNameVal, fullName);
            Assert.assertEquals("Wrong phoneNumber", phoneNumberVal, phoneNumber);
            Assert.assertEquals("Wrong email", emailVal, email);
            Assert.assertEquals("Wrong addressLine1", addressLine1Val, addressLine1);
            Assert.assertEquals("Wrong addressLine2", addressLine2Val, addressLine2);
            Assert.assertEquals("Wrong zipCode Id", zipCodeVal, zipCode);
            Assert.assertEquals("Wrong city", cityVal, city);

        } catch (ParseException e) {
            e.printStackTrace();
        }

    }

    /**
     * @param res
     * @param iban
     * @param currency
     * @param description
     * @param status
     */
    public void verifyBankDetails(Response res, String iban, String currency, String description, String status) {
        JsonPath jsonPathEvaluator = res.jsonPath();

        String ibanVal = jsonPathEvaluator.get("bankAccounts[0].iban");
        String currencyVal = jsonPathEvaluator.get("bankAccounts[0].curency");
        String descriptionVal = jsonPathEvaluator.get("bankAccounts[0].description");
        String statusVal = jsonPathEvaluator.get("bankAccounts[0].status");

        // Validate the response
        Assert.assertEquals("Wrong iban", ibanVal, iban);
        Assert.assertEquals("Wrong currency", currencyVal, currency);
        Assert.assertEquals("Wrong description", descriptionVal, description);
        Assert.assertEquals("Wrong status", statusVal, status);

    }

    /**
     * @param res
     * @param balance
     * @param defa
     * @param currency
     * @param iban
     */
    public void verifyWalletDetails(Response res, String balance, String defa, String currency, String iban) {
        JsonPath jsonPathEvaluator = res.jsonPath();

        String balanceVal = jsonPathEvaluator.get("balance");
        String defaVal = jsonPathEvaluator.get("defa");
        String currencyVal = jsonPathEvaluator.get("currency");
        String ibanVal = jsonPathEvaluator.get("iban");

        // Validate the response
        Assert.assertEquals("Wrong balance", balanceVal, balance);
        Assert.assertEquals("Wrong default", defaVal, defa);
        Assert.assertEquals("Wrong currency", currencyVal, currency);
        Assert.assertEquals("Wrong iban", ibanVal, iban);

    }

    /**
     * @param extId
     * @return
     */
    public boolean verifyAccountDeleted(String extId) {
        return dbVerification.verifyAccountDeleted(extId);
    }
}

