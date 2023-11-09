# TestTriggers
(*testTriggers*)

## Overview

Test Triggers CRUD operations

### Available Operations

* [bulkUpdateTestTriggers](#bulkupdatetesttriggers) - Bulk update test triggers
* [createTestTriggerJson](#createtesttriggerjson) - Create new test trigger
* [createTestTriggerString](#createtesttriggerstring) - Create new test trigger
* [deleteTestTrigger](#deletetesttrigger) - Delete test trigger
* [deleteTestTriggers](#deletetesttriggers) - Delete test triggers
* [getTestTriggerByID](#gettesttriggerbyid) - Get test trigger by ID
* [listTestTriggers](#listtesttriggers) - List test triggers
* [updateTestTriggerJson](#updatetesttriggerjson) - Update test trigger
* [updateTestTriggerString](#updatetesttriggerstring) - Update test trigger

## bulkUpdateTestTriggers

Updates test triggers provided as an array in the request body

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.bulkUpdateTestTriggers([
    {
      action: TestTriggerActions.Run,
      conditionSpec: {
        conditions: [
          {
            reason: "NewReplicaSetAvailable",
            status: TestTriggerConditionStatuses.Unknown,
            ttl: 1,
            type: "Progressing",
          },
        ],
        delay: 1,
        timeout: 1,
      },
      event: "modified",
      execution: TestTriggerExecutions.Testsuite,
      labels: {
        "env": "prod",
        "app": "backend",
      },
      name: "name",
      namespace: "testkube",
      probeSpec: {
        delay: 1,
        probes: [
          {
            headers: {
              "Content-Type": "application/xml",
            },
            host: "testkube-api-server",
            path: "/",
            port: 80,
            scheme: "http",
          },
        ],
        timeout: 1,
      },
      resource: TestTriggerResources.Deployment,
      resourceSelector: {
        name: "nginx",
        namespace: "testkube",
      },
      testSelector: {
        name: "nginx",
        namespace: "testkube",
      },
    },
  ]);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.TestTriggerUpsertRequest[]](../../models/.md)        | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.BulkUpdateTestTriggersResponse](../../sdk/models/operations/bulkupdatetesttriggersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestTriggerJson

Create new test trigger CRD inside a Kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.createTestTriggerJson({
    action: TestTriggerActions.Run,
    conditionSpec: {
      conditions: [
        {
          reason: "NewReplicaSetAvailable",
          status: TestTriggerConditionStatuses.Unknown,
          ttl: 1,
          type: "Progressing",
        },
      ],
      delay: 1,
      timeout: 1,
    },
    event: "modified",
    execution: TestTriggerExecutions.Test,
    labels: {
      "env": "prod",
      "app": "backend",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "Content-Type": "application/xml",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
      ],
      timeout: 1,
    },
    resource: TestTriggerResources.Pod,
    resourceSelector: {
      name: "nginx",
      namespace: "testkube",
    },
    testSelector: {
      name: "nginx",
      namespace: "testkube",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.TestTriggerUpsertRequest](../../sdk/models/shared/testtriggerupsertrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateTestTriggerJsonResponse](../../sdk/models/operations/createtesttriggerjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestTriggerString

Create new test trigger CRD inside a Kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.createTestTriggerString("string");

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [string](../../models/.md)                                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTestTriggerStringResponse](../../sdk/models/operations/createtesttriggerstringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTestTrigger

Deletes a test trigger

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.deleteTestTrigger({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteTestTriggerRequest](../../sdk/models/operations/deletetesttriggerrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteTestTriggerResponse](../../sdk/models/operations/deletetesttriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTestTriggers

Deletes all or labeled test triggers

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.deleteTestTriggers({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteTestTriggersRequest](../../sdk/models/operations/deletetesttriggersrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteTestTriggersResponse](../../sdk/models/operations/deletetesttriggersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestTriggerByID

Get test trigger by ID from CRD in kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.getTestTriggerByID({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetTestTriggerByIDRequest](../../sdk/models/operations/gettesttriggerbyidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetTestTriggerByIDResponse](../../sdk/models/operations/gettesttriggerbyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestTriggers

List test triggers from the kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.listTestTriggers({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListTestTriggersRequest](../../sdk/models/operations/listtesttriggersrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListTestTriggersResponse](../../sdk/models/operations/listtesttriggersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestTriggerJson

Update test trigger

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.updateTestTriggerJson({
    testTriggerUpsertRequest: {
      action: TestTriggerActions.Run,
      conditionSpec: {
        conditions: [
          {
            reason: "NewReplicaSetAvailable",
            status: TestTriggerConditionStatuses.False,
            ttl: 1,
            type: "Progressing",
          },
        ],
        delay: 1,
        timeout: 1,
      },
      event: "modified",
      execution: TestTriggerExecutions.Testsuite,
      labels: {
        "app": "backend",
        "env": "prod",
      },
      name: "name",
      namespace: "testkube",
      probeSpec: {
        delay: 1,
        probes: [
          {
            headers: {
              "Content-Type": "application/xml",
            },
            host: "testkube-api-server",
            path: "/",
            port: 80,
            scheme: "http",
          },
        ],
        timeout: 1,
      },
      resource: TestTriggerResources.Configmap,
      resourceSelector: {
        name: "nginx",
        namespace: "testkube",
      },
      testSelector: {
        name: "nginx",
        namespace: "testkube",
      },
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateTestTriggerJsonRequest](../../sdk/models/operations/updatetesttriggerjsonrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateTestTriggerJsonResponse](../../sdk/models/operations/updatetesttriggerjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestTriggerString

Update test trigger

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testTriggers.updateTestTriggerString({
    requestBody: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateTestTriggerStringRequest](../../sdk/models/operations/updatetesttriggerstringrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateTestTriggerStringResponse](../../sdk/models/operations/updatetesttriggerstringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
