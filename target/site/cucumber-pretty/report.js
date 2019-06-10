$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 7,
  "name": "As a User on the Nodes Marketplace, when user wants to trade on the marketplace the System",
  "description": "(payments platform) should create a User Account, Update account, Get account details, Delete account",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    },
    {
      "line": 5,
      "name": "@Sprint-1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should be able to register in the system with valid all inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-valid-all-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Create_Account"
    },
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I provide all details like \"\u003cexternalId\u003e\",\"\u003cname\u003e\",\"\u003caccountTypeCode\u003e\",\"\u003cparentExternalId\u003e\",\"\u003cfullName\u003e\",\"\u003cphoneNumber\u003e\",\"\u003ce-mail\u003e\",\"\u003caddressLine1\u003e\",\"\u003caddressLine2\u003e\",\"\u003czipCode\u003e\",\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the response code should be 201",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-valid-all-inputs;",
  "rows": [
    {
      "cells": [
        "externalId",
        "name",
        "accountTypeCode",
        "parentExternalId",
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 16,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-valid-all-inputs;;1"
    },
    {
      "cells": [
        "9999",
        "demo",
        "merchant",
        "parentExternalId",
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 17,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-valid-all-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to register in the system with valid all inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-valid-all-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 10,
      "name": "@Create_Account"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I provide all details like \"9999\",\"demo\",\"merchant\",\"parentExternalId\",\"fullName\",\"phoneNumber\",\"e-mail\",\"addressLine1\",\"addressLine2\",\"zipCode\",\"city\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the response code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "User should be able to get contact details with valid external id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-get-contact-details-with-valid-external-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Get_AccountDetails"
    },
    {
      "line": 19,
      "name": "@smoke"
    },
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I try to access my account details with externalId \"\u003cexternalId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-get-contact-details-with-valid-external-id;",
  "rows": [
    {
      "cells": [
        "externalId",
        "name",
        "accountTypeCode",
        "parentExternalId",
        "fullName",
        "phoneNumber",
        "email",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 25,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-get-contact-details-with-valid-external-id;;1"
    },
    {
      "cells": [
        "12345",
        "demo",
        "merchant",
        "parentExternalId",
        "fullName",
        "phoneNumber",
        "email",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 26,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-get-contact-details-with-valid-external-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to get contact details with valid external id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-get-contact-details-with-valid-external-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 19,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 19,
      "name": "@Get_AccountDetails"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I try to access my account details with externalId \"12345\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "User should not be able to view account details with invalid external id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-view-account-details-with-invalid-external-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Get_AccountDetails"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I try to get account details with invalid externalId \"\u003cexternalId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the response code should be 404",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-view-account-details-with-invalid-external-id;",
  "rows": [
    {
      "cells": [
        "externalId"
      ],
      "line": 52,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-view-account-details-with-invalid-external-id;;1"
    },
    {
      "cells": [
        "qwe123rty"
      ],
      "line": 53,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-view-account-details-with-invalid-external-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 53,
  "name": "User should not be able to view account details with invalid external id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-view-account-details-with-invalid-external-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 46,
      "name": "@Get_AccountDetails"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I try to get account details with invalid externalId \"qwe123rty\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the response code should be 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "User should be able to update her contact details with valid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-valid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@Update_Account"
    },
    {
      "line": 55,
      "name": "@smoke"
    },
    {
      "line": 55,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I opt to update all details like \"\u003cexternalId\u003e\",\"\u003cfullName\u003e\",\"\u003cphoneNumber\u003e\",\"\u003ce-mail\u003e\",\"\u003caddressLine1\u003e\",\"\u003caddressLine2\u003e\",\"\u003czipCode\u003e\",\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "the response code should be 200",
  "keyword": "And "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-valid-inputs;",
  "rows": [
    {
      "cells": [
        "externalId",
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 61,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-valid-inputs;;1"
    },
    {
      "cells": [
        "12345",
        "demoUser",
        "0987654321",
        "demo.user@test.in",
        "Demo address",
        "Demo state",
        "987654",
        "demo"
      ],
      "line": 62,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-valid-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "User should be able to update her contact details with valid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-valid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 55,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 55,
      "name": "@regression"
    },
    {
      "line": 55,
      "name": "@Update_Account"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I opt to update all details like \"12345\",\"demoUser\",\"0987654321\",\"demo.user@test.in\",\"Demo address\",\"Demo state\",\"987654\",\"demo\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "the response code should be 200",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 65,
  "name": "User should be able to update her contact details with only mandatory input",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-only-mandatory-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 64,
      "name": "@Update_Account"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I opt to update mandatory detail like fullname \"\u003cfullName\u003e\" with \"\u003cexternalId\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "the response code should be 200",
  "keyword": "And "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-only-mandatory-input;",
  "rows": [
    {
      "cells": [
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city",
        "externalId"
      ],
      "line": 70,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-only-mandatory-input;;1"
    },
    {
      "cells": [
        "demoUserCHANGED",
        "0987654321",
        "demo.user@test.in",
        "Demo address",
        "Demo state",
        "987654",
        "demo",
        "12345"
      ],
      "line": 71,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-only-mandatory-input;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "User should be able to update her contact details with only mandatory input",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-update-her-contact-details-with-only-mandatory-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 64,
      "name": "@Update_Account"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I opt to update mandatory detail like fullname \"demoUserCHANGED\" with \"12345\"",
  "matchedColumns": [
    0,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "the response code should be 200",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "User should not be able to update account with invalid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 74,
      "name": "@Update_Account"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I opt to update all details like \"\u003cexternalId\u003e\",\"\u003cfullName\u003e\",\"\u003cphoneNumber\u003e\",\"\u003ce-mail\u003e\",\"\u003caddressLine1\u003e\",\"\u003caddressLine2\u003e\",\"\u003czipCode\u003e\",\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the response code should be 400",
  "keyword": "And "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs;",
  "rows": [
    {
      "cells": [
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city",
        "externalId"
      ],
      "line": 80,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs;;1"
    },
    {
      "cells": [
        "",
        "0987654321",
        "demo.user@test.in",
        "Demo address",
        "Demo state",
        "987654",
        "demo",
        "12345"
      ],
      "line": 81,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs;;2"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "12345"
      ],
      "line": 82,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 81,
  "name": "User should not be able to update account with invalid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 74,
      "name": "@Update_Account"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I opt to update all details like \"12345\",\"\",\"0987654321\",\"demo.user@test.in\",\"Demo address\",\"Demo state\",\"987654\",\"demo\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the response code should be 400",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 82,
  "name": "User should not be able to update account with invalid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 74,
      "name": "@Update_Account"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "I opt to update all details like \"12345\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the response code should be 400",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "User should not be able to update account with invalid external id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-external-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 84,
      "name": "@Update_Account"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I try to update account with invalid external id \"\u003cexternal id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "the response code should be 400",
  "keyword": "Then "
});
formatter.examples({
  "line": 89,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-external-id;",
  "rows": [
    {
      "cells": [
        "external id"
      ],
      "line": 90,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-external-id;;1"
    },
    {
      "cells": [
        "qwe123ff"
      ],
      "line": 91,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-external-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 91,
  "name": "User should not be able to update account with invalid external id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-update-account-with-invalid-external-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 84,
      "name": "@Update_Account"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "I try to update account with invalid external id \"qwe123ff\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "the response code should be 400",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 95,
  "name": "User should be able to delete I account using valid external Id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-delete-i-account-using-valid-external-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@Delete_Account"
    },
    {
      "line": 94,
      "name": "@smoke"
    },
    {
      "line": 94,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I try to delete my account with external id  \"\u003cexternal id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-delete-i-account-using-valid-external-id;",
  "rows": [
    {
      "cells": [
        "external id"
      ],
      "line": 100,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-delete-i-account-using-valid-external-id;;1"
    },
    {
      "cells": [
        "123456"
      ],
      "line": 101,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-delete-i-account-using-valid-external-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 101,
  "name": "User should be able to delete I account using valid external Id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-delete-i-account-using-valid-external-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 94,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 94,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    },
    {
      "line": 94,
      "name": "@Delete_Account"
    }
  ]
});
formatter.step({
  "line": 96,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 97,
  "name": "I try to delete my account with external id  \"123456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "the response code should be 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 104,
  "name": "User should not be able to delete user account using invalid external Id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-delete-user-account-using-invalid-external-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 103,
      "name": "@Delete_Account"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "I try to delete my account with invalid external Id \"\u003cexternal id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "the response code should be 404",
  "keyword": "Then "
});
formatter.examples({
  "line": 108,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-delete-user-account-using-invalid-external-id;",
  "rows": [
    {
      "cells": [
        "external id"
      ],
      "line": 109,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-delete-user-account-using-invalid-external-id;;1"
    },
    {
      "cells": [
        "123456"
      ],
      "line": 110,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-delete-user-account-using-invalid-external-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "User should not be able to delete user account using invalid external Id",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-delete-user-account-using-invalid-external-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    },
    {
      "line": 103,
      "name": "@Delete_Account"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "I try to delete my account with invalid external Id \"123456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "the response code should be 404",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "User should be able to register in the system with mandatory inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-mandatory-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 112,
      "name": "@Create_Account"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I provide all details like \"\u003cexternalId\u003e\",\"\u003cname\u003e\",\"\u003caccountTypeCode\u003e\",\"\u003cparentExternalId\u003e\",\"\u003cfullName\u003e\",\"\u003cphoneNumber\u003e\",\"\u003ce-mail\u003e\",\"\u003caddressLine1\u003e\",\"\u003caddressLine2\u003e\",\"\u003czipCode\u003e\",\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "the response code should be 201",
  "keyword": "Then "
});
formatter.examples({
  "line": 117,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-mandatory-inputs;",
  "rows": [
    {
      "cells": [
        "externalId",
        "name",
        "accountTypeCode",
        "parentExternalId",
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 118,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-mandatory-inputs;;1"
    },
    {
      "cells": [
        "8888",
        "",
        "merchant",
        "",
        "fullName",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 119,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-mandatory-inputs;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 119,
  "name": "User should be able to register in the system with mandatory inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-be-able-to-register-in-the-system-with-mandatory-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 112,
      "name": "@Create_Account"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I provide all details like \"8888\",\"\",\"merchant\",\"\",\"fullName\",\"\",\"\",\"\",\"\",\"\",\"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "the response code should be 201",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 122,
  "name": "User should not be able to register in the system with invalid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 121,
      "name": "@Create_Account"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "I provide all details like \"\u003cexternalId\u003e\",\"\u003cname\u003e\",\"\u003caccountTypeCode\u003e\",\"\u003cparentExternalId\u003e\",\"\u003cfullName\u003e\",\"\u003cphoneNumber\u003e\",\"\u003ce-mail\u003e\",\"\u003caddressLine1\u003e\",\"\u003caddressLine2\u003e\",\"\u003czipCode\u003e\",\"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "the response code should be 400",
  "keyword": "Then "
});
formatter.examples({
  "line": 126,
  "name": "",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs;",
  "rows": [
    {
      "cells": [
        "externalId",
        "name",
        "accountTypeCode",
        "parentExternalId",
        "fullName",
        "phoneNumber",
        "e-mail",
        "addressLine1",
        "addressLine2",
        "zipCode",
        "city"
      ],
      "line": 127,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs;;1"
    },
    {
      "cells": [
        "7777",
        "",
        "merchant",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 128,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs;;2"
    },
    {
      "cells": [
        "6666",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 129,
      "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 128,
  "name": "User should not be able to register in the system with invalid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 121,
      "name": "@Create_Account"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "I provide all details like \"7777\",\"\",\"merchant\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "the response code should be 400",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 129,
  "name": "User should not be able to register in the system with invalid inputs",
  "description": "",
  "id": "as-a-user-on-the-nodes-marketplace,-when-user-wants-to-trade-on-the-marketplace-the-system;user-should-not-be-able-to-register-in-the-system-with-invalid-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Sprint-1"
    },
    {
      "line": 1,
      "name": "@NWS-3"
    },
    {
      "line": 121,
      "name": "@Create_Account"
    },
    {
      "line": 3,
      "name": "@author_sjena"
    },
    {
      "line": 4,
      "name": "@reviewer_gnpan"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "I have access to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "I provide all details like \"6666\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "the response code should be 400",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});