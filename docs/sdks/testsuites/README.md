# testSuites

## Overview

Test suites orchestration operations

### Available Operations

* [abortTestSuiteExecution](#aborttestsuiteexecution) - Aborts testsuite execution
* [abortTestSuiteExecutions](#aborttestsuiteexecutions) - Abort all executions of a test suite
* [createTestSuiteJson](#createtestsuitejson) - Create new test suite
* [createTestSuiteString](#createtestsuitestring) - Create new test suite
* [deleteTestSuite](#deletetestsuite) - Delete test suite
* [deleteTestSuites](#deletetestsuites) - Delete test suites
* [executeTestSuite](#executetestsuite) - Starts new test suite execution
* [executeTestSuites](#executetestsuites) - Starts new test suite executions
* [getTestSuiteByID](#gettestsuitebyid) - Get test suite by ID
* [getTestSuiteByIDWithExecution](#gettestsuitebyidwithexecution) - Get test suite by ID with execution
* [getTestSuiteExecution](#gettestsuiteexecution) - Get test suite execution
* [getTestSuiteExecutionArtifacts](#gettestsuiteexecutionartifacts) - Get test suite execution artifacts
* [getTestSuiteExecutionArtifactsByTestsuite](#gettestsuiteexecutionartifactsbytestsuite) - Get test suite execution artifacts
* [listTestSuiteExecutions](#listtestsuiteexecutions) - Get all test suite executions
* [listTestSuiteTests](#listtestsuitetests) - List tests for test suite
* [listTestSuiteWithExecutions](#listtestsuitewithexecutions) - Get all test suite with executions
* [listTestSuites](#listtestsuites) - Get all test suites
* [updateTestSuiteJson](#updatetestsuitejson) - Update test suite
* [updateTestSuiteString](#updatetestsuitestring) - Update test suite

## abortTestSuiteExecution

Aborts testsuite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.abortTestSuiteExecution({
  executionID: "atque",
  id: "fbb8c20c-b67f-4c4b-825e-99e6234c9f7b",
}).then((res: AbortTestSuiteExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.AbortTestSuiteExecutionRequest](../../models/operations/aborttestsuiteexecutionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.AbortTestSuiteExecutionResponse](../../models/operations/aborttestsuiteexecutionresponse.md)>**


## abortTestSuiteExecutions

Abort all test executions of a test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.abortTestSuiteExecutions({
  id: "79dfeb77-a5c3-48d4-baf9-1e506ef890a5",
}).then((res: AbortTestSuiteExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.AbortTestSuiteExecutionsRequest](../../models/operations/aborttestsuiteexecutionsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.AbortTestSuiteExecutionsResponse](../../models/operations/aborttestsuiteexecutionsresponse.md)>**


## createTestSuiteJson

Create new test suite action

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSuiteJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSuites.createTestSuiteJson({
  after: [
    {
      execute: [
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
      ],
      stopOnFailure: false,
    },
    {
      execute: [
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
      ],
      stopOnFailure: false,
    },
  ],
  before: [
    {
      execute: [
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
      ],
      stopOnFailure: false,
    },
    {
      execute: [
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
      ],
      stopOnFailure: false,
    },
  ],
  created: new Date("2022-07-30T17:56:08.127Z"),
  description: "collection of tests",
  executionRequest: {
    concurrencyLevel: 10,
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "earum",
    executionLabels: {
      "ex": "possimus",
      "nesciunt": "corrupti",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "fuga": "sequi",
      "maxime": "numquam",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "laborum",
      type: RunningContextType.Testtrigger,
    },
    sync: false,
    timeout: 1,
    variables: {
      "adipisci": {
        configMapRef: {
          key: "sunt",
          name: "Tracy Medhurst",
          namespace: "autem",
        },
        name: "Conrad Stehr",
        secretRef: {
          key: "natus",
          name: "Marcos Quigley",
          namespace: "et",
        },
        type: VariableType.Basic,
        value: "maiores",
      },
      "nisi": {
        configMapRef: {
          key: "velit",
          name: "Rudolph Weimann IV",
          namespace: "atque",
        },
        name: "Mr. Nellie Reichert",
        secretRef: {
          key: "asperiores",
          name: "Ellis Koepp",
          namespace: "vel",
        },
        type: VariableType.Basic,
        value: "labore",
      },
    },
  },
  labels: {
    "blanditiis": "iste",
  },
  name: "name",
  namespace: "testkube",
  repeats: 1,
  schedule: "* * * * *",
  status: {
    latestExecution: {
      endTime: new Date("2020-11-07T12:44:30.685Z"),
      id: "62f395e004109209b50edfc4",
      startTime: new Date("2022-09-18T01:28:12.994Z"),
      status: TestSuiteExecutionStatus.Failed,
    },
  },
  steps: [
    {
      execute: [
        {
          delay: "1s",
          test: "name",
        },
      ],
      stopOnFailure: false,
    },
    {
      execute: [
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
        {
          delay: "1s",
          test: "name",
        },
      ],
      stopOnFailure: false,
    },
  ],
}).then((res: CreateTestSuiteJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.TestSuiteUpsertRequestInput](../../models/shared/testsuiteupsertrequestinput.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateTestSuiteJsonResponse](../../models/operations/createtestsuitejsonresponse.md)>**


## createTestSuiteString

Create new test suite action

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSuiteStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.createTestSuiteString("quis").then((res: CreateTestSuiteStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [string](../../models//.md)                                  | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTestSuiteStringResponse](../../models/operations/createtestsuitestringresponse.md)>**


## deleteTestSuite

Deletes a test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSuiteResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.deleteTestSuite({
  id: "033f19db-f125-4ce4-952e-ab9cd7e5224a",
}).then((res: DeleteTestSuiteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteTestSuiteRequest](../../models/operations/deletetestsuiterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteTestSuiteResponse](../../models/operations/deletetestsuiteresponse.md)>**


## deleteTestSuites

Deletes all or labeled test suites

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSuitesResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.deleteTestSuites({
  selector: "vel",
}).then((res: DeleteTestSuitesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteTestSuitesRequest](../../models/operations/deletetestsuitesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteTestSuitesResponse](../../models/operations/deletetestsuitesresponse.md)>**


## executeTestSuite

New test suite execution returns new execution details on successful execution start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestSuiteResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSuites.executeTestSuite({
  testSuiteExecutionRequestInput: {
    concurrencyLevel: 10,
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "dolorum",
    executionLabels: {
      "itaque": "ab",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "amet": "cum",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "iusto",
      type: RunningContextType.Testsuite,
    },
    sync: false,
    timeout: 1,
    variables: {
      "esse": {
        configMapRef: {
          key: "vero",
          name: "Derek Mohr DVM",
          namespace: "autem",
        },
        name: "Jaime Farrell",
        secretRef: {
          key: "optio",
          name: "Lamar Goodwin",
          namespace: "illum",
        },
        type: VariableType.Basic,
        value: "aliquid",
      },
      "sint": {
        configMapRef: {
          key: "aliquid",
          name: "Timmy Feeney",
          namespace: "nihil",
        },
        name: "Mr. Courtney Hessel",
        secretRef: {
          key: "corporis",
          name: "Gretchen Greenholt",
          namespace: "ipsam",
        },
        type: VariableType.Basic,
        value: "hic",
      },
    },
  },
  id: "8b084c31-97e1-493a-a454-67f94874c2d5",
  last: 750343,
  namespace: "porro",
}).then((res: ExecuteTestSuiteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ExecuteTestSuiteRequest](../../models/operations/executetestsuiterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ExecuteTestSuiteResponse](../../models/operations/executetestsuiteresponse.md)>**


## executeTestSuites

New test suite executions returns new executions details on successful executions start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestSuitesResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSuites.executeTestSuites({
  testSuiteExecutionRequestInput: {
    concurrencyLevel: 10,
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "labore",
    executionLabels: {
      "ducimus": "qui",
      "qui": "consectetur",
      "ratione": "saepe",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "aliquid": "cum",
      "fugiat": "rem",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "voluptatibus",
      type: RunningContextType.Scheduler,
    },
    sync: false,
    timeout: 1,
    variables: {
      "repellendus": {
        configMapRef: {
          key: "aut",
          name: "Jeannette Mante",
          namespace: "officiis",
        },
        name: "Martin Bahringer",
        secretRef: {
          key: "nihil",
          name: "Nicole Becker",
          namespace: "aut",
        },
        type: VariableType.Secret,
        value: "quod",
      },
      "quo": {
        configMapRef: {
          key: "architecto",
          name: "Erika Jaskolski Jr.",
          namespace: "non",
        },
        name: "Annie Price",
        secretRef: {
          key: "quis",
          name: "Amber Grady",
          namespace: "ullam",
        },
        type: VariableType.Secret,
        value: "debitis",
      },
    },
  },
  concurrency: 442668,
  namespace: "eos",
  selector: "assumenda",
}).then((res: ExecuteTestSuitesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ExecuteTestSuitesRequest](../../models/operations/executetestsuitesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ExecuteTestSuitesResponse](../../models/operations/executetestsuitesresponse.md)>**


## getTestSuiteByID

Returns test suite with given name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteByIDResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.getTestSuiteByID({
  id: "c4077d0c-c3f4-408e-bc15-ceb4d6e1eae0",
}).then((res: GetTestSuiteByIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetTestSuiteByIDRequest](../../models/operations/gettestsuitebyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetTestSuiteByIDResponse](../../models/operations/gettestsuitebyidresponse.md)>**


## getTestSuiteByIDWithExecution

Returns test suite with given name with execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteByIDWithExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.getTestSuiteByIDWithExecution({
  id: "f75aedf2-acab-458b-991c-926ddb589461",
}).then((res: GetTestSuiteByIDWithExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetTestSuiteByIDWithExecutionRequest](../../models/operations/gettestsuitebyidwithexecutionrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetTestSuiteByIDWithExecutionResponse](../../models/operations/gettestsuitebyidwithexecutionresponse.md)>**


## getTestSuiteExecution

Returns test suite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.getTestSuiteExecution({
  executionID: "vero",
  id: "7421cbe6-d950-42f0-aa93-0b69f7ac2f72",
}).then((res: GetTestSuiteExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetTestSuiteExecutionRequest](../../models/operations/gettestsuiteexecutionrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetTestSuiteExecutionResponse](../../models/operations/gettestsuiteexecutionresponse.md)>**


## getTestSuiteExecutionArtifacts

Returns test suite execution artifacts with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteExecutionArtifactsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.getTestSuiteExecutionArtifacts({
  executionID: "delectus",
}).then((res: GetTestSuiteExecutionArtifactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetTestSuiteExecutionArtifactsRequest](../../models/operations/gettestsuiteexecutionartifactsrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetTestSuiteExecutionArtifactsResponse](../../models/operations/gettestsuiteexecutionartifactsresponse.md)>**


## getTestSuiteExecutionArtifactsByTestsuite

Returns test suite execution artifacts with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteExecutionArtifactsByTestsuiteResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.getTestSuiteExecutionArtifactsByTestsuite({
  executionID: "quos",
  id: "85009049-1160-4820-b888-ec66183bfe96",
}).then((res: GetTestSuiteExecutionArtifactsByTestsuiteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetTestSuiteExecutionArtifactsByTestsuiteRequest](../../models/operations/gettestsuiteexecutionartifactsbytestsuiterequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetTestSuiteExecutionArtifactsByTestsuiteResponse](../../models/operations/gettestsuiteexecutionartifactsbytestsuiteresponse.md)>**


## listTestSuiteExecutions

Returns array of all available test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.testSuites.listTestSuiteExecutions({
  endDate: new RFCDate("2022-05-26"),
  id: "eb40ec16-faf7-45b0-b532-a4da37cbaaf4",
  page: 260246,
  pageSize: 323876,
  startDate: new RFCDate("2022-03-15"),
  status: TestSuiteExecutionStatus.Passed,
}).then((res: ListTestSuiteExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListTestSuiteExecutionsRequest](../../models/operations/listtestsuiteexecutionsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListTestSuiteExecutionsResponse](../../models/operations/listtestsuiteexecutionsresponse.md)>**


## listTestSuiteTests

List available tests for test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuiteTestsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.listTestSuiteTests({
  id: "842c9b2a-d32d-4afe-81a8-8f4444573fec",
}).then((res: ListTestSuiteTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListTestSuiteTestsRequest](../../models/operations/listtestsuitetestsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListTestSuiteTestsResponse](../../models/operations/listtestsuitetestsresponse.md)>**


## listTestSuiteWithExecutions

Returns array of test suite with executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuiteWithExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSuites.listTestSuiteWithExecutions({
  page: 858398,
  pageSize: 271185,
  selector: "quam",
  status: TestSuiteExecutionStatus.Running,
  textSearch: "nemo",
}).then((res: ListTestSuiteWithExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ListTestSuiteWithExecutionsRequest](../../models/operations/listtestsuitewithexecutionsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ListTestSuiteWithExecutionsResponse](../../models/operations/listtestsuitewithexecutionsresponse.md)>**


## listTestSuites

Returns array of test suites

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuitesResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.listTestSuites({
  selector: "nesciunt",
  textSearch: "earum",
}).then((res: ListTestSuitesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListTestSuitesRequest](../../models/operations/listtestsuitesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListTestSuitesResponse](../../models/operations/listtestsuitesresponse.md)>**


## updateTestSuiteJson

Update test based on test suite content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSuiteJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSuites.updateTestSuiteJson({
  testSuiteUpdateRequestInput: {
    after: [
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
    ],
    before: [
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
    ],
    created: new Date("2022-07-12T14:44:09.875Z"),
    description: "collection of tests",
    executionRequest: {
      concurrencyLevel: 10,
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      cronJobTemplate: "unde",
      executionLabels: {
        "id": "ex",
        "occaecati": "optio",
        "at": "ad",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      labels: {
        "nam": "cumque",
        "sapiente": "quam",
        "occaecati": "repellendus",
        "culpa": "dicta",
      },
      name: "testing with 1000 users",
      namespace: "testkube",
      number: 1,
      runningContext: {
        context: "rem",
        type: RunningContextType.Testtrigger,
      },
      sync: false,
      timeout: 1,
      variables: {
        "totam": {
          configMapRef: {
            key: "magni",
            name: "Fannie Wiza",
            namespace: "quos",
          },
          name: "Tom Thiel",
          secretRef: {
            key: "eum",
            name: "Lynda Schuppe",
            namespace: "quaerat",
          },
          type: VariableType.Secret,
          value: "iste",
        },
        "accusamus": {
          configMapRef: {
            key: "ipsam",
            name: "Miss Darren Hermiston",
            namespace: "doloribus",
          },
          name: "Wallace Wilderman",
          secretRef: {
            key: "aut",
            name: "Susie Wolf",
            namespace: "non",
          },
          type: VariableType.Basic,
          value: "enim",
        },
      },
    },
    labels: {
      "blanditiis": "modi",
    },
    name: "name",
    namespace: "testkube",
    repeats: 1,
    schedule: "* * * * *",
    status: {
      latestExecution: {
        endTime: new Date("2022-01-17T10:40:45.847Z"),
        id: "62f395e004109209b50edfc4",
        startTime: new Date("2022-07-11T21:25:21.909Z"),
        status: TestSuiteExecutionStatus.Passed,
      },
    },
    steps: [
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
          {
            delay: "1s",
            test: "name",
          },
        ],
        stopOnFailure: false,
      },
    ],
  },
  id: "6379f3fb-27e2-41f8-a265-7b36fc6b9f58",
}).then((res: UpdateTestSuiteJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateTestSuiteJsonRequest](../../models/operations/updatetestsuitejsonrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateTestSuiteJsonResponse](../../models/operations/updatetestsuitejsonresponse.md)>**


## updateTestSuiteString

Update test based on test suite content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSuiteStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSuites.updateTestSuiteString({
  requestBody: "iusto",
  id: "ce525c67-641a-4831-ae50-47b4c21ccb42",
}).then((res: UpdateTestSuiteStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateTestSuiteStringRequest](../../models/operations/updatetestsuitestringrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateTestSuiteStringResponse](../../models/operations/updatetestsuitestringresponse.md)>**

