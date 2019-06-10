package com.test.steps;

import com.test.services.BankAccountPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class BankAccountSteps {

    BankAccountPage bankAccountPage = new BankAccountPage();

    @Given("^I have an invalid external id$")
    public void iHaveAnInvalidExternalId() {
        return;
    }

    @When("^I opt to add bank details like \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" with \"([^\"]*)\"$")
    public void iOptToAddBankDetailsLikeWith(String iban, String currency, String name, String extId) {
        UserAccountSteps.AccResponse = bankAccountPage.addBankAccount(iban, currency, name, extId);
    }
}
