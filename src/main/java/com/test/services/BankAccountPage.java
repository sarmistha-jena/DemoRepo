package com.test.services;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.http.Header;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONObject;
import utils.DatabaseVerification;
import utils.Log;
import utils.RestUtil;

public class BankAccountPage {

    private static final String EXTERNAL_ID = "externalId";
    private static final String AUTHORIZATION ="Authorization";
    private DatabaseVerification dbVerification = new DatabaseVerification();

    public Response addBankAccount(String iban, String currency, String name, String extId) {

        Log.info(RestAssured.baseURI);
        RequestSpecification request;
        request = RestAssured.given().pathParam(EXTERNAL_ID, UserAccountPage.generateExternalId).header(new Header(AUTHORIZATION, UserAccountPage.accessToken));
        JSONObject requestParams = new JSONObject();

        requestParams.put("iban", iban);
        requestParams.put("currency", currency);
        requestParams.put("name", name);

        request.contentType(ContentType.JSON);

        request.body(requestParams.toJSONString());

        return request.post("v1/bankAccounts/{externalId]");

    }
}
