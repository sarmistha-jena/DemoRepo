@skip
@NWS-6, @NWS-3

@author_sjena
@reviewer_gnpan
@Sprint-3


Feature: As a User on the Tradeshift platform I want to get an overview of my internal  and external transfers
  so that I can see all of my transactions (transaction history)and my Account balance.

  @Create_Account @smoke @regression
  Scenario Outline: User should be able to register in the system with valid all and mandatory inputs
    Given I have access to the application
    When I provide all details like "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Then the response code should be 201
    And my details should be updated successfully in the database with "<externalId>","<name>","<accountTypeCode>","<parentExternalId>","<fullName>","<phoneNumber>","<e-mail>","<addressLine1>","<addressLine2>","<zipCode>","<city>"
    Examples:
      | externalId | name | accountTypeCode | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |
      | 1245       | demo | merchant        | parentExternalId | fullName | phoneNumber | e-mail | addressLine1 | addressLine2 | zipCode | city |

  @View_WalletDetails
  Scenario Outline: User should be able to get wallet details with valid external id
    Given I have access to the application
    When I try to access my wallet details with externalId "<externalId>"
    Then I should get the wallet details "<balance>","<default>","<currency>","<iban>","<wallet_id>"
    And the response code should be 200
    Examples:
      | balance | default | currency | iban | externalId |wallet_id|
      | balance | default | currency | iban | 1234545    |         |

  @View_WalletDetails
  Scenario Outline: User should be able to get wallet details with invalid external id
    Given I have access to the application
    When I try to access my wallet details with externalId "<externalId>"
    Then  the response code should be 404
    Examples:
      | externalId |
      | 1234545    |

  @View_WalletDetails @manual
  Scenario Outline: User should be able to get multiple wallets details with valid external id
    Given I have access to the application
    When I try to access wallet details with externalId "<externalId>"
    Then I should get multiple wallet details with "<balance>","<default>","<currency>","<iban>","<wallet_id>"
    And the response code should be 200
    Examples:
      | balance | default | currency | iban | externalId |wallet_id|
      | balance | default | currency | iban | 1234545    |         |

  @View_Wallet_Balance
  Scenario Outline: User is able to view her wallet balance
    Given I have access to the application
    When I opt to view my wallet balance with external Id "<externalId>"
    Then I should get the wallet details "<balance>","<default>","<currency>","<iban>"
    And the response code should be 200
    Examples:
      | balance | default | currency | iban | externalId |
      | balance | default | currency | iban | 1234545    |


  @View_Wallet_Balance
  Scenario Outline: User is able to view her wallet balance with invalid external id
    Given I have access to the application
    When I opt to view my wallet balance with invalid external Id "<externalId>"
    Then the response code should be 400
    Examples:
      | externalId |
      | qwe123rty  |

  @View_Transaction_History
  Scenario Outline: User should be able to view her transaction history with valid external id, to date and from date
    Given I have access to the application
    When I opt to view my transaction history with external Id "<externalId>", "<from_date>" and "<to_date>"
    Then I should get the transaction details like "<trans_amount>", "<trans_transferRef>", "<trans_timestamp>", "<trans_currency>", "<trans_description>", "<trans_externalTransferRef>", "<trans_externalProductId>"
    And the response code should be 200
    Examples:
      | externalId | trans_amount | trans_transferRef | trans_timestamp | trans_currency | trans_description | trans_externalTransferRef | trans_externalProductId | from_date | to_date |
      | qwe123rty  |              |                   |                 |                |                   |                           |                         |           |         |

  @View_Transaction_History
  Scenario Outline: User should not be able to view her transaction history with invalid external id
    Given I have access to the application
    When I opt to view my transaction history with invalid external Id "<externalId>", "<from_date>" and "<to_date>"
    Then the response code should be 400
    Examples:
      | externalId | from_date | to_date |
      | qwe123rty  |           |         |

  @View_Transaction_History
  Scenario Outline: User should not be able to view her transaction history without from date
    Given I have access to the application
    When I opt to view my transaction history with external Id "<externalId>" and "<to_date>"
    Then the response code should be 400
    Examples:
      | externalId | from_date | to_date |
      | qwe123rty  |           |         |

  @View_Transaction_History @manual
  Scenario Outline: User is able to view her transaction history without providing to date
    Given I have access to the application
    When I opt to view my transaction history with external Id "<externalId>" and "<from_date>" only
    Then I should get the transaction details like "<trans_amount>", "<trans_transferRef>", "<trans_timestamp>", "<trans_currency>", "<trans_description>", "<trans_externalTransferRef>", "<trans_externalProductId>"
    And "<to_date>" should be set as current date
    And the response code should be 200
    Examples:
      | externalId | trans_amount | trans_transferRef | trans_timestamp | trans_currency | trans_description | trans_externalTransferRef | trans_externalProductId | from_date | to_date |
      | qwe123rty  |              |                   |                 |                |                   |                           |                         |           |         |


  @Internal_Transfer
  Scenario Outline: User should be able to transfer amount to valid receiver
    Given I have access to the application
    When I opt to transfer from "<wallet Id>" to "<receiver externalId>" an "<amount>" with "<externalId>", "<requestId>" and "<description>"
    Then I should be provided with "<transfer reference id>"
    And the response code should be 200
    Examples:
      | externalId | wallet Id | receiver externalId | amount | requestId | description |
      | 123455     | testId    | 12122               | 1234   | 12387     | test        |

  @Internal_Transfer
  Scenario Outline: User should not be able to transfer amount to invalid receiver
    Given I have access to the application
    When I opt to transfer from "<wallet Id>" to invalid "<receiver externalId>" an "<amount>" with "<externalId>", "<requestId>" and "<description>"
    Then the response code should be 400
    Examples:
      | externalId | wallet Id | receiver externalId | amount | requestId | description |
      | 123455     | testId    | 12122               | 1234   | 12387     | test        |

  @Internal_Transfer
  Scenario Outline: User should not be able to transfer amount more than balance amount
    Given I have access to the application
    When I opt to transfer from "<wallet Id>" to "<receiver externalId>" an "<amount>" with "<externalId>", "<requestId>" and "<description>"
    Then the response code should be 400
    Examples:
      | externalId | wallet Id | receiver externalId | amount | requestId | description |
      | 123455     | testId    | 12122               | 1234   | 12387     | test        |

  @Internal_Transfer
  Scenario Outline: User should not be able to transfer amount less than smallest currency unit
    Given I have access to the application
    When I opt to transfer from "<wallet Id>" to "<receiver externalId>" an "<amount>" less than currency unit with "<externalId>", "<requestId>" and "<description>"
    Then the response code should be 400
    Examples:
      | externalId | wallet Id | receiver externalId | amount | requestId | description |
      | 123455     | testId    | 12122               | 1234   | 12387     | test        |

  @Internal_Transfer @manual
  Scenario Outline: New wallet should be created if default wallet currency differs from transfer amount currency
    Given I have access to the application
    And I have default wallet created with <receiver_currency>
    When sender opt to transfer amount with a different currency <sender_currency>
    Then new wallet with <sender_currency> should be created
    And the response code should be 201
    Examples:
      | receiver_currency | sender_currency |
      | euro              | DK              |

  @Internal_Transfer @manual
  Scenario Outline: Transfer amount should be added to receiver's wallet
    Given I have access to the application
    When I opt to transfer from "<wallet Id>" to "<receiver externalId>" an "<amount>" with "<externalId>", "<requestId>" and "<description>"
    Then the transfer <amount> should be added to receiver's wallet balance
    Examples:
    |wallet Id|receiver externalId|amount|externalId|requestId|description|
    |         |                   |      |          |         |           |

  @Internal_Transfer @manual
  Scenario Outline: Transfer amount should be deducted from sender's wallet
    Given I have access to the application
    When I opt to transfer from "<wallet Id>" to "<receiver externalId>" an "<amount>" with "<externalId>", "<requestId>" and "<description>"
    Then the transfer <amount> should be deducted from sender's wallet balance
    Examples:
      |wallet Id|receiver externalId|amount|externalId|requestId|description|
      |         |                   |      |          |         |           |

  @Internal_Transfer @manual
  Scenario Outline: Transfer amount should be deducted from sender's default wallet if wallet id is not specified
    Given I have access to the application
    When I opt to transfer to "<receiver externalId>" an "<amount>" with "<externalId>", "<requestId>" and "<description>"
    Then the transfer <amount> should be deducted from sender's default wallet balance
    Examples:
      |receiver externalId|amount|externalId|requestId|description|
      |                   |      |          |         |           |