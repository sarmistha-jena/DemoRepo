package com.test.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import com.test.services.UserAccountPage;

/**
 *
 */
public class UserAccountSteps {

    public static Response AccResponse;
    public static String AccountId;
    UserAccountPage userAccountPage = new UserAccountPage();

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
     */
    @When("^I provide all details like \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void provideDetails(String extId, String name, String accTypeCode, String parExtId,
                               String fullName, String phone, String email,
                               String addr1, String addr2, String zip, String city) {
        AccResponse = userAccountPage.createAccount(extId, name, accTypeCode, parExtId, fullName, phone,
                email, addr1, addr2, zip, city);

    }


    /**
     * Checking response code
     */

    @Then("^the response code should be (\\d+)$")
    public void theResponseCodeShouldBe(int code) {
        userAccountPage.verifyResponseCode(AccResponse, code);
    }


    @When("^I opt to update all details like \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void user_opts_to_update_all_details_like(String extId, String fullName, String phone, String email,
                                                     String addr1, String addr2, String zip, String city) {
        AccResponse = userAccountPage.updateAccount(fullName, phone, email, addr1, addr2, zip, city);
    }

    @Given("^I have access to the application$")
    public void userHasAccessToTheApplication() {
        UserAccountPage.getToken();
    }


    @And("^my details should be updated successfully in the database with \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void myDetailsShouldBeUpdatedSuccessfullyInTheApplicationWith(String extId, String name, String accTypeCode, String parExtId, String fullName, String phone, String email,
                                                                         String addr1, String addr2, String zip, String city) throws Throwable {
        assertTrue(userAccountPage.verifyUserDetailsInDb(extId, name, accTypeCode, parExtId,
                fullName, phone, email,
                addr1, addr2, zip, city));
    }

    @Then("^my details should be updated successfully in the database like \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void myDetailsShouldBeUpdatedSuccessfullyInTheApplicationLike(String extId, String name, String accTypeCode, String parExtId, String fullName, String phone, String email,
                                                                         String addr1, String addr2, String zip, String city) {
        /*assertTrue(userAccountPage.verifyUserDetailsInDb(extId, name, accTypeCode, parExtId,
                fullName, phone, email,
                addr1, addr2, zip, city));*/
    }

    @When("^I opt to update mandatory detail like fullname \"([^\"]*)\" with \"([^\"]*)\"$")
    public void iOptToUpdateMandatoryDetailLikeFullname(String fullName, String extId) {
        AccResponse = userAccountPage.updateAccountWithFullName(fullName);
    }

    @Then("^my details should not be updated in the database like \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void myDetailsShouldNotBeUpdatedInTheApplicationLike(String extId, String name, String accTypeCode, String parExtId, String fullName, String phone, String email,
                                                                String addr1, String addr2, String zip, String city) {
        assertFalse(userAccountPage.verifyUserDetailsInDb(extId, name, accTypeCode, parExtId,
                fullName, phone, email,
                addr1, addr2, zip, city));
    }


    @Given("^I have valid external id$")
    public void iHaveValidExternalId() {
        return;
    }

    @When("^I try to access my account details with externalId \"([^\"]*)\"$")
    public void iTryToAccessMyAccountDetailsWithExternalId(String extId) {
        AccResponse = userAccountPage.getAccountDetails();
    }

    @When("^I try to delete my account with external id  \"([^\"]*)\"$")
    public void iTryToDeleteMyAccountWithExternalId(String extId) {
        AccResponse = userAccountPage.deleteAccount();
    }

    /**
     * @param extId
     */
    @When("^I try to delete my account with invalid external Id \"([^\"]*)\"$")
    public void iTryToDeleteMyAccountWithInvalidExternalId(String extId) {
        AccResponse = userAccountPage.deleteAccount();
    }


    @Given("^I have invalid external id$")
    public void iHaveInvalidExternalId() {
        return;
    }


    @When("^I try to access my bank details with externalId \"([^\"]*)\"$")
    public void iTryToAccessMyBankDetailsWithExternalId(String extId) {
        AccResponse = userAccountPage.getAccountDetails();
    }

    @When("^I try to access my wallet details with externalId \"([^\"]*)\"$")
    public void iTryToAccessMyWalletDetailsWithExternalId(String extId) {
        AccResponse = userAccountPage.getAccountDetails();
    }

    @When("^I try to update account with invalid external id \"([^\"]*)\"$")
    public void iTryToUpdateAccountWithInvalidExternalId(String extId) {
        AccResponse = userAccountPage.updateAccountWithInvalidExternalId(extId);
    }

    @When("^I try to get account details with invalid externalId \"([^\"]*)\"$")
    public void iTryToGetAccountDetailsWithInvalidExternalId(String extId) {
        AccResponse = userAccountPage.getAccountDetailsWithInvalidExtId(extId);
    }

    @Then("^I should get the account details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iShouldGetTheAccountDetails(String externalId, String name, String accountTypeCode, String parentExternalId, String fullName, String phoneNumber, String email, String addressLine1, String addressLine2, String zipCode, String city) {
        userAccountPage.verifyContactDetails(AccResponse, externalId, name, accountTypeCode, parentExternalId, fullName, phoneNumber, email, addressLine1, addressLine2, zipCode, city);
    }

    @Then("^I should get the bank details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iShouldGetTheBankDetails(String Iban, String currency, String description, String status) throws Throwable {
        userAccountPage.verifyBankDetails(AccResponse, Iban, currency, description, status);
    }

    @Then("^I should get the wallet details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iShouldGetTheWalletDetails(String balance, String defa, String currency, String iban) {
        userAccountPage.verifyWalletDetails(AccResponse, balance, defa, currency, iban);
    }


    @And("^the user \"([^\"]*)\" should deleted from database$")
    public void theUserShouldDeletedFromDatabase(String extId) throws Throwable {
        userAccountPage.verifyAccountDeleted(extId);
    }

    @Given("^I have access to the application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iHaveAccessToTheApplicationWithAnd(String username, String password) throws Throwable {
        UserAccountPage.getToken();
    }
}
