@skip
@NWS-3

@author_sjena
@reviewer_gnpan
@Sprint-1

Feature: As a User on the Nodes Marketplace, when user wants to trade on the marketplace the System
  (payments platform) should create a User Account, Update account, Get account details, Delete account

  @Create_Account @smoke @regression
  Scenario Outline: User should be able to register in the system with valid all inputs
    Given I have access to the application
    When I provide all details like "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then the response code should be 201
    And my details should be updated successfully in the database with "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Examples:
      | externalId | name | accountTypeCode | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |
      | 9999       | demo | merchant        | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |

  @Get_AccountDetails @smoke @regression
  Scenario Outline: User should be able to get contact details with valid external id
    Given I have access to the application
    When I try to access my account details with externalId "<externalId>"
    Then I should get the account details "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<email>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    And the response code should be 200
    Examples:
      | externalId | name | accountTypeCode | parentExternalId | fullName | phoneNumber | email | addressLine1 | addressLine2 | zipCode | city |
      | 12345      | demo | merchant        | parentExternalId | fullName | phoneNumber | email | addressLine1 | addressLine2 | zipCode | city |

  @Get_AccountDetails @pending
  Scenario Outline: User should be able to get bank details with valid external id
    Given I have access to the application
    When I try to access my bank details with externalId "<externalId>"
    Then I should get the bank details "<Iban>","<currency>","<description>","<status>"
    And the response code should be 200
    Examples:
      | Iban | currency | description | status | externalId |
      | Iban | currency | description | status | 12345      |

  @Get_AccountDetails @pending
  Scenario Outline: User should be able to get wallet details with valid external id
    Given I have access to the application
    When I try to access my wallet details with externalId "<externalId>"
    Then I should get the wallet details "<balance>","<default>","<currency>","<iban>"
    And the response code should be 200
    Examples:
      | balance | default | currency | iban | externalId |
      | balance | default | currency | iban | 12345      |

  @Get_AccountDetails
  Scenario Outline: User should not be able to view account details with invalid external id
    Given I have access to the application
    When I try to get account details with invalid externalId "<externalId>"
    Then the response code should be 404
    Examples:
      | externalId |
      | qwe123rty  |

  @Delete_Account @smoke @regression
  Scenario Outline: User should be able to delete I account using valid external Id
    Given I have access to the application
    When I try to delete my account with external id  "<external id>"
    Then the response code should be 200
    And the user "<external id>" should deleted from database
    Examples:
      | external id |
      | 123456      |

  @Delete_Account
  Scenario Outline: User should not be able to delete user account using invalid external Id
    Given I have access to the application
    When I try to delete my account with invalid external Id "<external id>"
    Then the response code should be 404
    Examples:
      | external id |
      | 123456      |

  @Create_Account
  Scenario Outline: User should be able to register in the system with mandatory inputs
    Given I have access to the application
    When I provide all details like "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then the response code should be 201
    And my details should be updated successfully in the database with "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Examples:
      | externalId | name | accountTypeCode | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |
      | 8888       |      | merchant        |                  | fullName |             |        |              |              |         |      |

  @Create_Account
  Scenario Outline: User should not be able to register in the system with invalid inputs
    Given I have access to the application
    When I provide all details like "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then the response code should be 400
    Examples:
      | externalId | name | accountTypeCode | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |
      | 7777       |      | merchant        |                  |          |             |        |              |              |         |      |
      | 6666       |      |                 |                  |          |             |        |              |              |         |      |

  @Update_Account @smoke @regression
  Scenario Outline: User should be able to update her contact details with valid inputs
    Given I have access to the application
    When I opt to update all details like "<externalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then my details should be updated successfully in the database like "<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    And the response code should be 200
    Examples:
      | externalId | fullName | phoneNumber | e-mail            | addressLine1 | addressLine2 | zipCode | city |
      | 12345      | demoUser | 0987654321  | demo.user@test.in | Demo address | Demo state   | 987654  | demo |

  @Update_Account
  Scenario Outline: User should be able to update her contact details with only mandatory input
    Given I have access to the application
    When I opt to update mandatory detail like fullname "<fullName>" with "<externalId>"
    Then my details should be updated successfully in the database like "<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    And the response code should be 200
    Examples:
      | fullName        | phoneNumber | e-mail            | addressLine1 | addressLine2 | zipCode | city | externalId |
      | demoUserCHANGED | 0987654321  | demo.user@test.in | Demo address | Demo state   | 987654  | demo | 12345      |


  @Update_Account
  Scenario Outline: User should not be able to update account with invalid inputs
    Given I have access to the application
    When I opt to update all details like "<externalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then my details should not be updated in the database like "<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    And the response code should be 400
    Examples:
      | fullName | phoneNumber | e-mail            | addressLine1 | addressLine2 | zipCode | city | externalId |
      |          | 0987654321  | demo.user@test.in | Demo address | Demo state   | 987654  | demo | 12345      |
      |          |             |                   |              |              |         |      | 12345      |

  @Update_Account
  Scenario Outline: User should not be able to update account with invalid external id
    Given I have access to the application
    When I try to update account with invalid external id "<external id>"
    Then the response code should be 400
    Examples:
      | external id |
      | qwe123ff    |