@skip
@NWS-4

@author_sjena
@reviewer_gnpan
@Sprint-2


Feature: As a User on the Tradeshift platform I want to add, update and delete my bank account details to
  my User Account so that I can make external (outbound) bank transfers of funds from
  my payments account and into my personal bank account.

  Scenario Outline: User should be able to register in the system with valid all and mandatory inputs
    Given I have access to the application
    When I provide all details like "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then the response code should be 201
    And my details should be updated successfully in the database with "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Examples:
      | externalId | name | accountTypeCode | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |
      | 1245       | demo | merchant        | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |

  @pending
  @Add_BankAccount @NWS-108 @smoke @regression
  Scenario Outline: User should be able to add bank account details
    Given I have valid external id
    When I opt to add bank details like "<iban>","<currency>","<name>" with "<external id>"
    Then the response code should be 201
    And the bank details should be updated in database for "<external id>"
    Examples:
      | iban | currency | name | external id |
      | test | test     | test | 12345       |

  @pending
  @Add_BankAccount @NWS-108
  Scenario Outline: User should not be able to add bank account for invalid external Id
    Given I have an invalid external id
    When I opt to add bank account with invalid "<external id>"
    Then the response code should be 400
    Examples:
      | external id |
      | 12345       |

  @pending
  @Add_BankAccount @NWS-108
  Scenario Outline: User should not be able to add bank account details with only non mandatory details
    Given I have valid external id
    When I opt to add bank account with bank name only "<bank_name>"
    Then the response code should be 400
    Examples:
      | bank_name |
      | test      |

  @pending
  @Get_BankAccount @NWS-109 @smoke @regression
  Scenario Outline: User should be able to view bank account details
    Given I have valid external id
    And I have added bank details like "<iban>","<currency>","<name>"
    When I opt to view bank details like "<iban>","<currency>","<description>","<status>" with "<external id>"
    Then the response code should be 200
    Examples:
      | iban | currency | description | external id | status |
      | test | test     | test        |             |        |

  @pending
  @Get_BankAccount @NWS-109
  Scenario Outline: User should not be able to view bank account details
    Given I have an invalid external id
    When I opt to view bank details like "<iban>","<currency>","<description>","<status>"
    Then the response code should be 400
    Examples:
      | iban | currency | description | external id | status |
      | test | test     | test        |             |        |

  @pending
  @Delete_BankAccount @NWS-110 @smoke @regression
  Scenario Outline: User should be able to delete bank account details
    Given I have an valid external id and bank account id
    When I opt to delete bank account details with "<external id>" and "<bank account id>"
    Then the response code should be 200
    Examples:
      | external id | bank account id |
      | test        |                 |

  @pending
  @Delete_BankAccount @NWS-110
  Scenario Outline: User should not be able to delete bank account details with invalid external id
    Given I have an invalid external id
    When I opt to delete bank account details with "<external id>"
    Then the response code should be 400
    Examples:
      | external id |
      | test        |

  @pending
  @Delete_BankAccount @NWS-110
  Scenario Outline: User should not be able to delete bank account details with invalid bank account id
    Given I have an invalid bank account id
    When I opt to delete bank account details
    Then the response code should be 400
    Examples:
      | external id |
      | test        |