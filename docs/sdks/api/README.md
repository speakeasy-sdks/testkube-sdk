# Api
(*api*)

## Overview

Testkube API operations

### Available Operations

* [abortExecution](#abortexecution) - Aborts execution
* [abortTestExecutions](#aborttestexecutions) - Abort all executions of a test
* [abortTestSuiteExecution](#aborttestsuiteexecution) - Aborts testsuite execution
* [abortTestSuiteExecutionByID](#aborttestsuiteexecutionbyid) - Aborts testsuite execution
* [abortTestSuiteExecutions](#aborttestsuiteexecutions) - Abort all executions of a test suite
* [bulkUpdateTestTriggers](#bulkupdatetesttriggers) - Bulk update test triggers
* [createExecutorJson](#createexecutorjson) - Create new executor
* [createExecutorString](#createexecutorstring) - Create new executor
* [createTestSourceJson](#createtestsourcejson) - Create new test source
* [createTestSourceString](#createtestsourcestring) - Create new test source
* [createTestSuiteJson](#createtestsuitejson) - Create new test suite
* [createTestSuiteString](#createtestsuitestring) - Create new test suite
* [createTestTriggerJson](#createtesttriggerjson) - Create new test trigger
* [createTestTriggerString](#createtesttriggerstring) - Create new test trigger
* [createTestJson](#createtestjson) - Create new test
* [createTestString](#createteststring) - Create new test
* [createWebhookJson](#createwebhookjson) - Create new webhook
* [createWebhookString](#createwebhookstring) - Create new webhook
* [deleteExecutor](#deleteexecutor) - Delete executor
* [deleteExecutors](#deleteexecutors) - Delete executors
* [deleteTest](#deletetest) - Delete test
* [deleteTestSource](#deletetestsource) - Delete test source
* [deleteTestSources](#deletetestsources) - Delete test sources
* [deleteTestSuite](#deletetestsuite) - Delete test suite
* [deleteTestSuites](#deletetestsuites) - Delete test suites
* [deleteTestTrigger](#deletetesttrigger) - Delete test trigger
* [deleteTestTriggers](#deletetesttriggers) - Delete test triggers
* [deleteTests](#deletetests) - Delete tests
* [deleteWebhook](#deletewebhook) - Delete webhook
* [deleteWebhooks](#deletewebhooks) - Delete webhooks
* [downloadArchive](#downloadarchive) - Download artifact archive
* [downloadFile](#downloadfile) - Download artifact
* [executeTest](#executetest) - Starts new test execution
* [executeTestSuite](#executetestsuite) - Starts new test suite execution
* [executeTestSuites](#executetestsuites) - Starts new test suite executions
* [executeTests](#executetests) - Starts new test executions
* [getConfig](#getconfig) - Get config
* [getDebugInfo](#getdebuginfo) - Get debug information
* [getExecutionArtifacts](#getexecutionartifacts) - Get execution's artifacts by ID
* [getExecutionByID](#getexecutionbyid) - Get test execution by ID
* [getExecutionLogs](#getexecutionlogs) - Get execution's logs by ID
* [getExecutor](#getexecutor) - Get executor details
* [getKeyMap](#getkeymap) - Test triggers keymap
* [getTest](#gettest) - Get test
* [getTestExecution](#gettestexecution) - Get test execution
* [getTestMetrics](#gettestmetrics) - Get test metrics
* [getTestSource](#gettestsource) - Get test source data
* [getTestSuiteByID](#gettestsuitebyid) - Get test suite by ID
* [getTestSuiteByIDWithExecution](#gettestsuitebyidwithexecution) - Get test suite by ID with execution
* [getTestSuiteExecution](#gettestsuiteexecution) - Get test suite execution
* [getTestSuiteExecutionArtifacts](#gettestsuiteexecutionartifacts) - Get test suite execution artifacts
* [getTestSuiteExecutionArtifactsByTestsuite](#gettestsuiteexecutionartifactsbytestsuite) - Get test suite execution artifacts
* [getTestSuiteExecutionByID](#gettestsuiteexecutionbyid) - Get test suite execution by ID
* [getTestSuiteMetrics](#gettestsuitemetrics) - Get test suite metrics
* [getTestTriggerByID](#gettesttriggerbyid) - Get test trigger by ID
* [getTestWithExecution](#gettestwithexecution) - Get test with execution
* [getWebhook](#getwebhook) - Get webhook details
* [listAllTestSuiteExecutions](#listalltestsuiteexecutions) - Get all test suite executions
* [listExecutions](#listexecutions) - Get all test executions
* [listExecutors](#listexecutors) - List executors
* [listTestExecutions](#listtestexecutions) - Get all test executions
* [listTestSources](#listtestsources) - List test sources
* [listTestSuiteExecutions](#listtestsuiteexecutions) - Get all test suite executions
* [listTestSuiteTests](#listtestsuitetests) - List tests for test suite
* [listTestSuiteWithExecutions](#listtestsuitewithexecutions) - Get all test suite with executions
* [listTestSuites](#listtestsuites) - Get all test suites
* [listTestTriggers](#listtesttriggers) - List test triggers
* [listTestWithExecutions](#listtestwithexecutions) - List test with executions
* [listTests](#listtests) - List tests
* [listWebhooks](#listwebhooks) - List webhooks
* [processTestSourceBatch](#processtestsourcebatch) - Process test source batch (create, update, delete)
* [updateConfigKey](#updateconfigkey) - Update config
* [updateExecutorJson](#updateexecutorjson) - Update executor
* [updateExecutorString](#updateexecutorstring) - Update executor
* [updateTestSourceJson](#updatetestsourcejson) - Update test source
* [updateTestSourceString](#updatetestsourcestring) - Update test source
* [updateTestSuiteJson](#updatetestsuitejson) - Update test suite
* [updateTestSuiteString](#updatetestsuitestring) - Update test suite
* [updateTestTriggerJson](#updatetesttriggerjson) - Update test trigger
* [updateTestTriggerString](#updatetesttriggerstring) - Update test trigger
* [updateTestJson](#updatetestjson) - Update test
* [updateTestString](#updateteststring) - Update test
* [uploads](#uploads) - Upload file
* [validateRepository](#validaterepository) - Validate new repository

## abortExecution

Aborts execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortExecution({
  executionID: "Kazakhstan flexibility",
  id: "<ID>",
}).then((res: AbortExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.AbortExecutionRequest](../../models/operations/abortexecutionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.AbortExecutionResponse](../../models/operations/abortexecutionresponse.md)>**


## abortTestExecutions

Abort all test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortTestExecutions({
  id: "<ID>",
}).then((res: AbortTestExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AbortTestExecutionsRequest](../../models/operations/aborttestexecutionsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AbortTestExecutionsResponse](../../models/operations/aborttestexecutionsresponse.md)>**


## abortTestSuiteExecution

Aborts testsuite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortTestSuiteExecution({
  executionID: "Folk Account",
  id: "<ID>",
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


## abortTestSuiteExecutionByID

Aborts testsuite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionByIDResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortTestSuiteExecutionByID({
  executionID: "Buckinghamshire Electronic",
}).then((res: AbortTestSuiteExecutionByIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.AbortTestSuiteExecutionByIDRequest](../../models/operations/aborttestsuiteexecutionbyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.AbortTestSuiteExecutionByIDResponse](../../models/operations/aborttestsuiteexecutionbyidresponse.md)>**


## abortTestSuiteExecutions

Abort all test executions of a test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortTestSuiteExecutions({
  id: "<ID>",
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


## bulkUpdateTestTriggers

Updates test triggers provided as an array in the request body

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { BulkUpdateTestTriggersResponse } from "testkube-sdk/dist/sdk/models/operations";
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.bulkUpdateTestTriggers([
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
      "qui": "serious",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "quibusdam": "holder",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
      ],
      timeout: 1,
    },
    resource: TestTriggerResources.Ingress,
    resourceSelector: {
      name: "nginx",
      namespace: "testkube",
    },
    testSelector: {
      name: "nginx",
      namespace: "testkube",
    },
  },
]).then((res: BulkUpdateTestTriggersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.TestTriggerUpsertRequest[]](../../models//.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.BulkUpdateTestTriggersResponse](../../models/operations/bulkupdatetesttriggersresponse.md)>**


## createExecutorJson

Create new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateExecutorJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutorUpsertRequestFeatures } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createExecutorJson({
  args: [
    "National",
  ],
  command: [
    "regarding",
  ],
  contentTypes: [
    "reboot",
  ],
  executorType: "Bicycle quantify Sports",
  features: [
    ExecutorUpsertRequestFeatures.Artifacts,
  ],
  image: "https://loremflickr.com/640/480",
  imagePullSecrets: [
    {
      name: "Yemen Accounts",
    },
  ],
  jobTemplate: "Pike",
  labels: {
    "atque": "incidunt",
  },
  meta: {
    docsURI: "https://docs.testkube.io/test-types/executor-k6",
    iconURI: "/assets/k6.jpg",
    tooltips: {
      "magnam": "East",
    },
  },
  name: "name",
  namespace: "testkube",
  types: [
    "watt",
  ],
  uri: "https://limp-civilian.name",
}).then((res: CreateExecutorJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.ExecutorUpsertRequest](../../models/shared/executorupsertrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateExecutorJsonResponse](../../models/operations/createexecutorjsonresponse.md)>**


## createExecutorString

Create new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateExecutorStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.createExecutorString("approach").then((res: CreateExecutorStringResponse) => {
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

**Promise<[operations.CreateExecutorStringResponse](../../models/operations/createexecutorstringresponse.md)>**


## createTestSourceJson

Create new test source based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSourceJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestSourceJson({
  data: "Mazda Iowa",
  labels: {
    "voluptates": "numquam",
  },
  name: "testsource1",
  namespace: "testkube",
  repository: {
    authType: RepositoryAuthType.Header,
    branch: "main",
    certificateSecret: "withdrawal Bedfordshire",
    commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
    path: "test/perf",
    token: "Sleek Nella mobile",
    tokenSecret: {
      key: "<key>",
      name: "withdrawal",
      namespace: "Cadillac",
    },
    type: RepositoryType.Git,
    uri: "https://github.com/kubeshop/testkube",
    username: "Fermin.Roob30",
    usernameSecret: {
      key: "<key>",
      name: "Bespoke",
      namespace: "Outdoors",
    },
    workingDir: "/",
  },
  type: TestSourceUpsertRequestType.GitFile,
  uri: "https://github.com/kubeshop/testkube",
}).then((res: CreateTestSourceJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.TestSourceUpsertRequest](../../models/shared/testsourceupsertrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateTestSourceJsonResponse](../../models/operations/createtestsourcejsonresponse.md)>**


## createTestSourceString

Create new test source based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSourceStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.createTestSourceString("Demigender").then((res: CreateTestSourceStringResponse) => {
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

**Promise<[operations.CreateTestSourceStringResponse](../../models/operations/createtestsourcestringresponse.md)>**


## createTestSuiteJson

Create new test suite action

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSuiteJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestSuiteJson({
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
  ],
  created: new Date("2022-06-10T22:02:25.936Z"),
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
    cronJobTemplate: "CLI Latin",
    executionLabels: {
      "ab": "Florida",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "suscipit": "uniform",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "Cambridgeshire Market B2B",
      type: RunningContextType.Scheduler,
    },
    sync: false,
    timeout: 1,
    variables: {
      "neque": {
        configMapRef: {
          key: "<key>",
          name: "Pickup Electric",
          namespace: "cyan Trans",
        },
        name: "Southwest Steel",
        secretRef: {
          key: "<key>",
          name: "hack SUV katal",
          namespace: "Rock Coordinator",
        },
        type: VariableType.Secret,
        value: "Rapids transmitter Factors",
      },
    },
  },
  labels: {
    "labore": "tensely",
  },
  name: "name",
  namespace: "testkube",
  repeats: 1,
  schedule: "* * * * *",
  status: {
    latestExecution: {
      endTime: new Date("2021-09-23T16:32:55.803Z"),
      id: "62f395e004109209b50edfc4",
      startTime: new Date("2022-03-22T19:51:12.817Z"),
      status: TestSuiteExecutionStatus.Timeout,
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

sdk.api.createTestSuiteString("South").then((res: CreateTestSuiteStringResponse) => {
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


## createTestTriggerJson

Create new test trigger CRD inside a Kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestTriggerJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestTriggerJson({
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
    "aut": "to",
  },
  name: "name",
  namespace: "testkube",
  probeSpec: {
    delay: 1,
    probes: [
      {
        headers: {
          "veritatis": "Mountain",
        },
        host: "testkube-api-server",
        path: "/",
        port: 80,
        scheme: "http",
      },
    ],
    timeout: 1,
  },
  resource: TestTriggerResources.Statefulset,
  resourceSelector: {
    name: "nginx",
    namespace: "testkube",
  },
  testSelector: {
    name: "nginx",
    namespace: "testkube",
  },
}).then((res: CreateTestTriggerJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.TestTriggerUpsertRequest](../../models/shared/testtriggerupsertrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateTestTriggerJsonResponse](../../models/operations/createtesttriggerjsonresponse.md)>**


## createTestTriggerString

Create new test trigger CRD inside a Kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestTriggerStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.createTestTriggerString("withdrawal").then((res: CreateTestTriggerStringResponse) => {
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

**Promise<[operations.CreateTestTriggerStringResponse](../../models/operations/createtesttriggerstringresponse.md)>**


## createTestJson

Create new test based on file content, uri or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import {
  ExecutionRequestArgsMode,
  ExecutionStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestJson({
  content: {
    data: "Digitized",
    repository: {
      authType: RepositoryAuthType.Basic,
      branch: "main",
      certificateSecret: "bypassing",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "generate",
      tokenSecret: {
        key: "<key>",
        name: "circuit Hampshire generation",
        namespace: "Rubber",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Sadye13",
      usernameSecret: {
        key: "<key>",
        name: "Glendale Technician Soft",
        namespace: "Coordinator",
      },
      workingDir: "/",
    },
    type: TestContentType.Git,
    uri: "https://github.com/kubeshop/testkube",
  },
  created: new Date("2022-07-30T06:54:15Z"),
  executionRequest: {
    activeDeadlineSeconds: 1,
    args: [
      "Yttrium",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "salmon",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "Classical Transmasculine",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "invoice",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "solicit black",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "South doloribus teammate",
        reference: {
          name: "Crew Fantastic Accountability",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "experiences Van Sterling",
        reference: {
          name: "Metrics Configuration Northwest",
        },
      },
    ],
    envs: {
      "consequatur": "whoever",
    },
    executionLabels: {
      "libero": "Buckinghamshire",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Savings Officer",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "Electronics granular",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 240230,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "port Markets Customizable",
      type: RunningContextType.UserUI,
    },
    scraperTemplate: "Bentley",
    secretEnvs: {
      "assumenda": "maximized",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "Branding",
    ],
    variables: {
      "voluptates": {
        configMapRef: {
          key: "<key>",
          name: "Ergonomic",
          namespace: "reboot drat Roberts",
        },
        name: "invoice Actinium Metal",
        secretRef: {
          key: "<key>",
          name: "Rapids hence",
          namespace: "Granite",
        },
        type: VariableType.Secret,
        value: "Handmade Karley maroon",
      },
    },
    variablesFile: "hub",
  },
  labels: {
    "soluta": "mesh",
  },
  name: "test1",
  namespace: "testkube",
  schedule: "* * * * *",
  source: "my-private-repository-test",
  status: {
    latestExecution: {
      endTime: new Date("2023-03-16T20:41:40.495Z"),
      id: "62f395e004109209b50edfc4",
      number: 1,
      startTime: new Date("2023-12-05T03:42:12.543Z"),
      status: ExecutionStatus.Passed,
    },
  },
  type: "postman/collection",
  uploads: [
    "New",
  ],
}).then((res: CreateTestJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.TestUpsertRequestInput](../../models/shared/testupsertrequestinput.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateTestJsonResponse](../../models/operations/createtestjsonresponse.md)>**


## createTestString

Create new test based on file content, uri or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.createTestString("Hybrid").then((res: CreateTestStringResponse) => {
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

**Promise<[operations.CreateTestStringResponse](../../models/operations/createteststringresponse.md)>**


## createWebhookJson

Create new webhook based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateWebhookJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { EventType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createWebhookJson({
  events: [
    EventType.EndTestTimeout,
  ],
  headers: {
    "porro": "Loaf",
  },
  labels: {
    "qui": "Quality",
  },
  name: "webhook1",
  namespace: "testkube",
  payloadObjectField: "Eritrea gray",
  payloadTemplate: "what haptic second",
  selector: "port",
  uri: "https://hooks.app.com/services/1",
}).then((res: CreateWebhookJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.WebhookCreateRequest](../../models/shared/webhookcreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateWebhookJsonResponse](../../models/operations/createwebhookjsonresponse.md)>**


## createWebhookString

Create new webhook based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateWebhookStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.createWebhookString("henry").then((res: CreateWebhookStringResponse) => {
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

**Promise<[operations.CreateWebhookStringResponse](../../models/operations/createwebhookstringresponse.md)>**


## deleteExecutor

Deletes executor by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteExecutorResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteExecutor({
  id: "<ID>",
}).then((res: DeleteExecutorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteExecutorRequest](../../models/operations/deleteexecutorrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteExecutorResponse](../../models/operations/deleteexecutorresponse.md)>**


## deleteExecutors

Deletes labeled executors

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteExecutorsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteExecutors({
  selector: "utilisation",
}).then((res: DeleteExecutorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteExecutorsRequest](../../models/operations/deleteexecutorsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteExecutorsResponse](../../models/operations/deleteexecutorsresponse.md)>**


## deleteTest

Deletes a test

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTest({
  id: "<ID>",
}).then((res: DeleteTestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteTestRequest](../../models/operations/deletetestrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteTestResponse](../../models/operations/deletetestresponse.md)>**


## deleteTestSource

Deletes test source by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSourceResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTestSource({
  id: "<ID>",
}).then((res: DeleteTestSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteTestSourceRequest](../../models/operations/deletetestsourcerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteTestSourceResponse](../../models/operations/deletetestsourceresponse.md)>**


## deleteTestSources

Deletes labeled test sources

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSourcesResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTestSources({
  selector: "distributed copying",
}).then((res: DeleteTestSourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteTestSourcesRequest](../../models/operations/deletetestsourcesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteTestSourcesResponse](../../models/operations/deletetestsourcesresponse.md)>**


## deleteTestSuite

Deletes a test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSuiteResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTestSuite({
  id: "<ID>",
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

sdk.api.deleteTestSuites({
  selector: "Norman Honda female",
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


## deleteTestTrigger

Deletes a test trigger

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestTriggerResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTestTrigger({
  id: "<ID>",
  namespace: "Dollar hornet",
}).then((res: DeleteTestTriggerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteTestTriggerRequest](../../models/operations/deletetesttriggerrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteTestTriggerResponse](../../models/operations/deletetesttriggerresponse.md)>**


## deleteTestTriggers

Deletes all or labeled test triggers

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestTriggersResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTestTriggers({
  namespace: "blue Bahamian",
  selector: "deposit Kroon",
}).then((res: DeleteTestTriggersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteTestTriggersRequest](../../models/operations/deletetesttriggersrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteTestTriggersResponse](../../models/operations/deletetesttriggersresponse.md)>**


## deleteTests

Deletes all or labeled tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteTests({
  selector: "Steel Hop",
}).then((res: DeleteTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteTestsRequest](../../models/operations/deletetestsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteTestsResponse](../../models/operations/deletetestsresponse.md)>**


## deleteWebhook

Deletes webhook by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteWebhookResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteWebhook({
  id: "<ID>",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## deleteWebhooks

Deletes labeled webhooks

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteWebhooksResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.deleteWebhooks({
  selector: "Table",
}).then((res: DeleteWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteWebhooksRequest](../../models/operations/deletewebhooksrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteWebhooksResponse](../../models/operations/deletewebhooksresponse.md)>**


## downloadArchive

Download the artifact archive from the given execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DownloadArchiveResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.downloadArchive({
  id: "<ID>",
  mask: "boldly withdrawal",
}).then((res: DownloadArchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DownloadArchiveRequest](../../models/operations/downloadarchiverequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DownloadArchiveResponse](../../models/operations/downloadarchiveresponse.md)>**


## downloadFile

Download the artifact file from the given execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DownloadFileResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.downloadFile({
  filename: "maserati_bronze_audi.mp2a",
  id: "<ID>",
}).then((res: DownloadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DownloadFileRequest](../../models/operations/downloadfilerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DownloadFileResponse](../../models/operations/downloadfileresponse.md)>**


## executeTest

New test execution returns new execution details on successful execution start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionRequestArgsMode, RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.executeTest({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "Savings",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "Peso",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "Reggae volt Volvo",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "invoice",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "why SMTP",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "transmitting Coordinator",
        reference: {
          name: "Hybrid policy blue",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "Manager Interactions Architect",
        reference: {
          name: "Manhattan how Mauritius",
        },
      },
    ],
    envs: {
      "nobis": "Cambridgeshire",
    },
    executionLabels: {
      "repudiandae": "Beauty",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "application Dollar",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "Island",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 536683,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "East redundant",
      type: RunningContextType.Scheduler,
    },
    scraperTemplate: "Northwest Bicycle",
    secretEnvs: {
      "vero": "Associate",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "Porterville",
    ],
    variables: {
      "fugit": {
        configMapRef: {
          key: "<key>",
          name: "kilogram Integration glen",
          namespace: "JSON whoa Berkshire",
        },
        name: "Bacon Cheese",
        secretRef: {
          key: "<key>",
          name: "eius",
          namespace: "Fresh Northwest",
        },
        type: VariableType.Secret,
        value: "West Account",
      },
    },
    variablesFile: "Chief female Honda",
  },
  id: "<ID>",
  namespace: "Usability Soft defiantly",
}).then((res: ExecuteTestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ExecuteTestRequest](../../models/operations/executetestrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ExecuteTestResponse](../../models/operations/executetestresponse.md)>**


## executeTestSuite

New test suite execution returns new execution details on successful execution start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestSuiteResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.executeTestSuite({
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
    cronJobTemplate: "Southwest Latin",
    executionLabels: {
      "voluptate": "finally",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "deleniti": "amid",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "phew Southwest Fundamental",
      type: RunningContextType.Testsuite,
    },
    sync: false,
    timeout: 1,
    variables: {
      "aut": {
        configMapRef: {
          key: "<key>",
          name: "Southwest",
          namespace: "bandwidth",
        },
        name: "East",
        secretRef: {
          key: "<key>",
          name: "fully global customized",
          namespace: "Indiana Towels",
        },
        type: VariableType.Basic,
        value: "Regional",
      },
    },
  },
  id: "<ID>",
  last: 342781,
  namespace: "navigate mole",
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

sdk.api.executeTestSuites({
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
    cronJobTemplate: "Fish klutzy",
    executionLabels: {
      "minus": "Borders",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "id": "Avon",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "input Keyboard",
      type: RunningContextType.Scheduler,
    },
    sync: false,
    timeout: 1,
    variables: {
      "dignissimos": {
        configMapRef: {
          key: "<key>",
          name: "brave SUV mysteriously",
          namespace: "override Longmont",
        },
        name: "synthesize",
        secretRef: {
          key: "<key>",
          name: "backing Dominica Checking",
          namespace: "Cargo national lumen",
        },
        type: VariableType.Secret,
        value: "frictionless West labore",
      },
    },
  },
  concurrency: 618300,
  namespace: "New",
  selector: "Profound",
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


## executeTests

New test executions returns new executions details on successful executions start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionRequestArgsMode, RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.executeTests({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "alongside",
    ],
    argsMode: ExecutionRequestArgsMode.Append,
    artifactRequest: {
      dirs: [
        "synthesize",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "Electric",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "Southeast",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "DNS green",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "Greece",
        reference: {
          name: "anonymise",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "Grocery compress Hatchback",
        reference: {
          name: "Estates Corporate",
        },
      },
    ],
    envs: {
      "illo": "Sarasota",
    },
    executionLabels: {
      "sit": "Borders",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Kuwaiti 24/7 Alabama",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "tightly South invoice",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 334866,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "Electric feed",
      type: RunningContextType.Scheduler,
    },
    scraperTemplate: "Street Fresh",
    secretEnvs: {
      "velit": "itch",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "honestly",
    ],
    variables: {
      "reiciendis": {
        configMapRef: {
          key: "<key>",
          name: "state Books",
          namespace: "Southeast payment",
        },
        name: "salmon",
        secretRef: {
          key: "<key>",
          name: "Shad Dodge withdrawal",
          namespace: "Hybrid countess occaecati",
        },
        type: VariableType.Basic,
        value: "East Auer Palestinian",
      },
    },
    variablesFile: "Granite",
  },
  concurrency: 64322,
  executionSelector: "complex before Kong",
  namespace: "Northwest Gasoline",
  selector: "calculating Northeast",
}).then((res: ExecuteTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ExecuteTestsRequest](../../models/operations/executetestsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ExecuteTestsResponse](../../models/operations/executetestsresponse.md)>**


## getConfig

Get config from cluster storage state

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetConfigResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getConfig().then((res: GetConfigResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetConfigResponse](../../models/operations/getconfigresponse.md)>**


## getDebugInfo

Gets information that is needed for debugging and opening Testkube bug reports

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetDebugInfoResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getDebugInfo().then((res: GetDebugInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetDebugInfoResponse](../../models/operations/getdebuginforesponse.md)>**


## getExecutionArtifacts

Returns artifacts of the given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionArtifactsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getExecutionArtifacts({
  id: "<ID>",
}).then((res: GetExecutionArtifactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetExecutionArtifactsRequest](../../models/operations/getexecutionartifactsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetExecutionArtifactsResponse](../../models/operations/getexecutionartifactsresponse.md)>**


## getExecutionByID

Returns execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionByIDResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getExecutionByID({
  executionID: "Computers",
}).then((res: GetExecutionByIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetExecutionByIDRequest](../../models/operations/getexecutionbyidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetExecutionByIDResponse](../../models/operations/getexecutionbyidresponse.md)>**


## getExecutionLogs

Returns logs of the given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionLogsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getExecutionLogs({
  id: "<ID>",
}).then((res: GetExecutionLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetExecutionLogsRequest](../../models/operations/getexecutionlogsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetExecutionLogsResponse](../../models/operations/getexecutionlogsresponse.md)>**


## getExecutor

Returns executors data with executions passed to executor

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutorResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getExecutor({
  id: "<ID>",
}).then((res: GetExecutorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetExecutorRequest](../../models/operations/getexecutorrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetExecutorResponse](../../models/operations/getexecutorresponse.md)>**


## getKeyMap

Returns a keymap (supported/allowed fields) for the test trigger UI screen

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetKeyMapResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getKeyMap().then((res: GetKeyMapResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetKeyMapResponse](../../models/operations/getkeymapresponse.md)>**


## getTest

Gets the specified test

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTest({
  id: "<ID>",
}).then((res: GetTestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetTestRequest](../../models/operations/gettestrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetTestResponse](../../models/operations/gettestresponse.md)>**


## getTestExecution

Returns execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestExecution({
  executionID: "Northeast male",
  id: "<ID>",
}).then((res: GetTestExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetTestExecutionRequest](../../models/operations/gettestexecutionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetTestExecutionResponse](../../models/operations/gettestexecutionresponse.md)>**


## getTestMetrics

Gets test metrics for given tests executions, with particular execution status and timings

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestMetricsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestMetrics({
  id: "<ID>",
  last: 553330,
  limit: 193883,
}).then((res: GetTestMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTestMetricsRequest](../../models/operations/gettestmetricsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTestMetricsResponse](../../models/operations/gettestmetricsresponse.md)>**


## getTestSource

Returns test sources data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSourceResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestSource({
  id: "<ID>",
}).then((res: GetTestSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetTestSourceRequest](../../models/operations/gettestsourcerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetTestSourceResponse](../../models/operations/gettestsourceresponse.md)>**


## getTestSuiteByID

Returns test suite with given name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteByIDResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteByID({
  id: "<ID>",
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

sdk.api.getTestSuiteByIDWithExecution({
  id: "<ID>",
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

sdk.api.getTestSuiteExecution({
  executionID: "despite Guyana",
  id: "<ID>",
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

sdk.api.getTestSuiteExecutionArtifacts({
  executionID: "atop North mole",
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

sdk.api.getTestSuiteExecutionArtifactsByTestsuite({
  executionID: "hertz Bowling",
  id: "<ID>",
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


## getTestSuiteExecutionByID

Returns test suite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteExecutionByIDResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteExecutionByID({
  executionID: "Hermaphrodite Markets",
  last: 386664,
}).then((res: GetTestSuiteExecutionByIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetTestSuiteExecutionByIDRequest](../../models/operations/gettestsuiteexecutionbyidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetTestSuiteExecutionByIDResponse](../../models/operations/gettestsuiteexecutionbyidresponse.md)>**


## getTestSuiteMetrics

Gets test suite metrics for given tests executions, with particular execution status and timings

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteMetricsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteMetrics({
  id: "<ID>",
  last: 663120,
  limit: 403660,
}).then((res: GetTestSuiteMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetTestSuiteMetricsRequest](../../models/operations/gettestsuitemetricsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetTestSuiteMetricsResponse](../../models/operations/gettestsuitemetricsresponse.md)>**


## getTestTriggerByID

Get test trigger by ID from CRD in kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestTriggerByIDResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestTriggerByID({
  id: "<ID>",
  namespace: "Beauty compress payment",
}).then((res: GetTestTriggerByIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTestTriggerByIDRequest](../../models/operations/gettesttriggerbyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTestTriggerByIDResponse](../../models/operations/gettesttriggerbyidresponse.md)>**


## getTestWithExecution

Gets the specified test with execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestWithExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getTestWithExecution({
  id: "<ID>",
}).then((res: GetTestWithExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetTestWithExecutionRequest](../../models/operations/gettestwithexecutionrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetTestWithExecutionResponse](../../models/operations/gettestwithexecutionresponse.md)>**


## getWebhook

Returns webhook

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetWebhookResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.getWebhook({
  id: "<ID>",
}).then((res: GetWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWebhookResponse](../../models/operations/getwebhookresponse.md)>**


## listAllTestSuiteExecutions

Returns array of test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListAllTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listAllTestSuiteExecutions({
  endDate: new RFCDate("2021-10-24"),
  last: 23183,
  page: 456148,
  pageSize: 513574,
  selector: "Directives",
  startDate: new RFCDate("2023-11-09"),
  status: TestSuiteExecutionStatus.Timeout,
  test: "deposit female versus",
  textSearch: "Qatari overriding program",
}).then((res: ListAllTestSuiteExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ListAllTestSuiteExecutionsRequest](../../models/operations/listalltestsuiteexecutionsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListAllTestSuiteExecutionsResponse](../../models/operations/listalltestsuiteexecutionsresponse.md)>**


## listExecutions

Returns array of test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listExecutions({
  endDate: new RFCDate("2021-04-10"),
  page: 506498,
  pageSize: 935977,
  selector: "withdrawal",
  startDate: new RFCDate("2023-06-30"),
  status: ExecutionStatus.Failed,
  test: "batting collaborative Convertible",
  textSearch: "cultivate",
  type: "Lawrencium joule purple",
}).then((res: ListExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListExecutionsRequest](../../models/operations/listexecutionsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListExecutionsResponse](../../models/operations/listexecutionsresponse.md)>**


## listExecutors

List executors available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListExecutorsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.listExecutors({
  selector: "Bedfordshire male",
}).then((res: ListExecutorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListExecutorsRequest](../../models/operations/listexecutorsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListExecutorsResponse](../../models/operations/listexecutorsresponse.md)>**


## listTestExecutions

Returns array of all available test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listTestExecutions({
  endDate: new RFCDate("2022-07-14"),
  id: "<ID>",
  last: 715626,
  page: 210724,
  pageSize: 611817,
  startDate: new RFCDate("2022-04-16"),
  status: ExecutionStatus.Queued,
}).then((res: ListTestExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListTestExecutionsRequest](../../models/operations/listtestexecutionsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListTestExecutionsResponse](../../models/operations/listtestexecutionsresponse.md)>**


## listTestSources

List test sources available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSourcesResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.listTestSources({
  selector: "Administrator Shanahan Coupe",
}).then((res: ListTestSourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListTestSourcesRequest](../../models/operations/listtestsourcesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListTestSourcesResponse](../../models/operations/listtestsourcesresponse.md)>**


## listTestSuiteExecutions

Returns array of all available test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listTestSuiteExecutions({
  endDate: new RFCDate("2022-11-23"),
  id: "<ID>",
  page: 729958,
  pageSize: 354494,
  startDate: new RFCDate("2021-04-16"),
  status: TestSuiteExecutionStatus.Aborting,
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

sdk.api.listTestSuiteTests({
  id: "<ID>",
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

sdk.api.listTestSuiteWithExecutions({
  page: 441473,
  pageSize: 614278,
  selector: "grey",
  status: TestSuiteExecutionStatus.Running,
  textSearch: "ax",
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

sdk.api.listTestSuites({
  selector: "Electric",
  textSearch: "Passenger magni Hybrid",
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


## listTestTriggers

List test triggers from the kubernetes cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestTriggersResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.listTestTriggers({
  namespace: "Account plum",
  selector: "male qui port",
}).then((res: ListTestTriggersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTestTriggersRequest](../../models/operations/listtesttriggersrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTestTriggersResponse](../../models/operations/listtesttriggersresponse.md)>**


## listTestWithExecutions

List available test with executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestWithExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listTestWithExecutions({
  page: 455452,
  pageSize: 206952,
  selector: "Southeast indexing Direct",
  status: ExecutionStatus.Timeout,
  textSearch: "Persistent Agent ability",
}).then((res: ListTestWithExecutionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListTestWithExecutionsRequest](../../models/operations/listtestwithexecutionsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListTestWithExecutionsResponse](../../models/operations/listtestwithexecutionsresponse.md)>**


## listTests

List available tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.listTests({
  selector: "blue Frozen Movies",
  textSearch: "Connecticut multimedia",
}).then((res: ListTestsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListTestsRequest](../../models/operations/listtestsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListTestsResponse](../../models/operations/listtestsresponse.md)>**


## listWebhooks

List webhooks available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListWebhooksResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.listWebhooks({
  selector: "Ball indigo",
}).then((res: ListWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListWebhooksRequest](../../models/operations/listwebhooksrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListWebhooksResponse](../../models/operations/listwebhooksresponse.md)>**


## processTestSourceBatch

Process test source batch based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ProcessTestSourceBatchResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.processTestSourceBatch({
  batch: [
    {
      data: "male Island codpiece",
      labels: {
        "voluptatem": "streamline",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "Cloned Peso United",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "Philadelphia Coordinator Officer",
        tokenSecret: {
          key: "<key>",
          name: "solution Pop purple",
          namespace: "JBOD",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Eloisa_Bergstrom84",
        usernameSecret: {
          key: "<key>",
          name: "Euclid World bumpy",
          namespace: "Northwest Metrics mismatch",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.Git,
      uri: "https://github.com/kubeshop/testkube",
    },
  ],
}).then((res: ProcessTestSourceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.TestSourceBatchRequest](../../models/shared/testsourcebatchrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ProcessTestSourceBatchResponse](../../models/operations/processtestsourcebatchresponse.md)>**


## updateConfigKey

Updates config in cluster storage state

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateConfigKeyResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.updateConfigKey({
  clusterId: "connect Avon",
  enableTelemetry: false,
  id: "<ID>",
}).then((res: UpdateConfigKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Config](../../models/shared/config.md)               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateConfigKeyResponse](../../models/operations/updateconfigkeyresponse.md)>**


## updateExecutorJson

Update new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateExecutorJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutorUpdateRequestFeatures } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateExecutorJson({
  executorUpdateRequest: {
    args: [
      "virtual",
    ],
    command: [
      "Market",
    ],
    contentTypes: [
      "handle",
    ],
    executorType: "lime ASCII",
    features: [
      ExecutorUpdateRequestFeatures.JunitReport,
    ],
    image: "https://loremflickr.com/640/480",
    imagePullSecrets: [
      {
        name: "Account male",
      },
    ],
    jobTemplate: "programming azure parallelism",
    labels: {
      "ab": "protocol",
    },
    meta: {
      docsURI: "https://docs.testkube.io/test-types/executor-k6",
      iconURI: "/assets/k6.jpg",
      tooltips: {
        "eligendi": "Product",
      },
    },
    name: "name",
    namespace: "testkube",
    types: [
      "quantify",
    ],
    uri: "http://humming-spoon.net",
  },
  id: "<ID>",
}).then((res: UpdateExecutorJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateExecutorJsonRequest](../../models/operations/updateexecutorjsonrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateExecutorJsonResponse](../../models/operations/updateexecutorjsonresponse.md)>**


## updateExecutorString

Update new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateExecutorStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.updateExecutorString({
  requestBody: "redundant troubled",
  id: "<ID>",
}).then((res: UpdateExecutorStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateExecutorStringRequest](../../models/operations/updateexecutorstringrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateExecutorStringResponse](../../models/operations/updateexecutorstringresponse.md)>**


## updateTestSourceJson

Update test source based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSourceJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType, TestSourceUpdateRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestSourceJson({
  testSourceUpdateRequest: {
    data: "Ergonomic Gloves",
    labels: {
      "vero": "female",
    },
    name: "testsource1",
    namespace: "testkube",
    repository: {
      authType: RepositoryAuthType.Basic,
      branch: "main",
      certificateSecret: "azure",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "Assistant",
      tokenSecret: {
        key: "<key>",
        name: "backing Franc Rand",
        namespace: "Northwest content indigo",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Gertrude3",
      usernameSecret: {
        key: "<key>",
        name: "yellow",
        namespace: "boohoo",
      },
      workingDir: "/",
    },
    type: TestSourceUpdateRequestType.FileUri,
    uri: "https://github.com/kubeshop/testkube",
  },
  id: "<ID>",
}).then((res: UpdateTestSourceJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateTestSourceJsonRequest](../../models/operations/updatetestsourcejsonrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateTestSourceJsonResponse](../../models/operations/updatetestsourcejsonresponse.md)>**


## updateTestSourceString

Update test source based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSourceStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.updateTestSourceString({
  requestBody: "Grocery",
  id: "<ID>",
}).then((res: UpdateTestSourceStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateTestSourceStringRequest](../../models/operations/updatetestsourcestringrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateTestSourceStringResponse](../../models/operations/updatetestsourcestringresponse.md)>**


## updateTestSuiteJson

Update test based on test suite content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSuiteJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestSuiteJson({
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
    ],
    created: new Date("2021-03-25T04:09:11.907Z"),
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
      cronJobTemplate: "Executive",
      executionLabels: {
        "deserunt": "Intuitive",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      labels: {
        "voluptatem": "Ball",
      },
      name: "testing with 1000 users",
      namespace: "testkube",
      number: 1,
      runningContext: {
        context: "programming",
        type: RunningContextType.Testsuite,
      },
      sync: false,
      timeout: 1,
      variables: {
        "maxime": {
          configMapRef: {
            key: "<key>",
            name: "Thailand",
            namespace: "viral",
          },
          name: "single Fitness",
          secretRef: {
            key: "<key>",
            name: "joyful lime",
            namespace: "more",
          },
          type: VariableType.Basic,
          value: "abaft",
        },
      },
    },
    labels: {
      "at": "Bespoke",
    },
    name: "name",
    namespace: "testkube",
    repeats: 1,
    schedule: "* * * * *",
    status: {
      latestExecution: {
        endTime: new Date("2022-09-22T05:31:11.249Z"),
        id: "62f395e004109209b50edfc4",
        startTime: new Date("2021-12-19T01:38:37.615Z"),
        status: TestSuiteExecutionStatus.Running,
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
    ],
  },
  id: "<ID>",
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

sdk.api.updateTestSuiteString({
  requestBody: "bluetooth enable generating",
  id: "<ID>",
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


## updateTestTriggerJson

Update test trigger

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestTriggerJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestTriggerJson({
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
      "delectus": "Optimized",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "fugit": "Borders",
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
  id: "<ID>",
  namespace: "Chevrolet",
}).then((res: UpdateTestTriggerJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateTestTriggerJsonRequest](../../models/operations/updatetesttriggerjsonrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateTestTriggerJsonResponse](../../models/operations/updatetesttriggerjsonresponse.md)>**


## updateTestTriggerString

Update test trigger

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestTriggerStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.updateTestTriggerString({
  requestBody: "plum vainly haptic",
  id: "<ID>",
  namespace: "male Borders",
}).then((res: UpdateTestTriggerStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateTestTriggerStringRequest](../../models/operations/updatetesttriggerstringrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateTestTriggerStringResponse](../../models/operations/updatetesttriggerstringresponse.md)>**


## updateTestJson

Update test based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import {
  ExecutionRequestArgsMode,
  ExecutionStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestJson({
  testUpdateRequestInput: {
    content: {
      data: "Man",
      repository: {
        authType: RepositoryAuthType.Header,
        branch: "main",
        certificateSecret: "Southwest woman North",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "armour fugit Hybrid",
        tokenSecret: {
          key: "<key>",
          name: "out East",
          namespace: "Illinois Functionality plum",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Alice_Marvin",
        usernameSecret: {
          key: "<key>",
          name: "fatally Luxurious",
          namespace: "Cleveland Strategist",
        },
        workingDir: "/",
      },
      type: TestContentType.GitDir,
      uri: "https://github.com/kubeshop/testkube",
    },
    created: new Date("2022-07-30T06:54:15Z"),
    executionRequest: {
      activeDeadlineSeconds: 1,
      args: [
        "Automated",
      ],
      argsMode: ExecutionRequestArgsMode.Append,
      artifactRequest: {
        dirs: [
          "Wooden",
        ],
        storageClassName: "artifact-volume-local",
        volumeMountPath: "withdrawal Northeast",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "semantics",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      cronJobTemplate: "Paradigm",
      envConfigMaps: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "Bicycle Ergonomic utterly",
          reference: {
            name: "given aspernatur invoice",
          },
        },
      ],
      envSecrets: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "Northwest",
          reference: {
            name: "synthesize azure customer",
          },
        },
      ],
      envs: {
        "debitis": "Handmade",
      },
      executionLabels: {
        "quisquam": "connecting",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {
          name: "olive Catonsville composite",
        },
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      jobTemplate: "dragonfly virtual Intranet",
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      number: 664723,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        context: "Fish",
        type: RunningContextType.UserUI,
      },
      scraperTemplate: "circuit",
      secretEnvs: {
        "cumque": "Corporate",
      },
      sync: false,
      testSuiteName: "test-suite1",
      uploads: [
        "FTM",
      ],
      variables: {
        "minus": {
          configMapRef: {
            key: "<key>",
            name: "Principal",
            namespace: "Barium",
          },
          name: "Northwest indigo",
          secretRef: {
            key: "<key>",
            name: "plum Granite Sports",
            namespace: "Tools Rock West",
          },
          type: VariableType.Secret,
          value: "spyglass hierarchy Miramar",
        },
      },
      variablesFile: "Volvo Northeast",
    },
    labels: {
      "deserunt": "calculating",
    },
    name: "test1",
    namespace: "testkube",
    schedule: "* * * * *",
    source: "my-private-repository-test",
    status: {
      latestExecution: {
        endTime: new Date("2023-04-14T05:16:33.717Z"),
        id: "62f395e004109209b50edfc4",
        number: 1,
        startTime: new Date("2023-01-25T11:07:25.324Z"),
        status: ExecutionStatus.Queued,
      },
    },
    type: "postman/collection",
    uploads: [
      "Gorgeous",
    ],
  },
  id: "<ID>",
}).then((res: UpdateTestJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateTestJsonRequest](../../models/operations/updatetestjsonrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateTestJsonResponse](../../models/operations/updatetestjsonresponse.md)>**


## updateTestString

Update test based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.updateTestString({
  requestBody: "meanwhile",
  id: "<ID>",
}).then((res: UpdateTestStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateTestStringRequest](../../models/operations/updateteststringrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateTestStringResponse](../../models/operations/updateteststringresponse.md)>**


## uploads

Upload file to be used in executions and tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UploadsRequestBodyParentType, UploadsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.uploads({
  filePath: "folder/file.txt",
  parentName: "test-1",
  parentType: UploadsRequestBodyParentType.Test,
}).then((res: UploadsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UploadsRequestBody](../../models/operations/uploadsrequestbody.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UploadsResponse](../../models/operations/uploadsresponse.md)>**


## validateRepository

Validate new repository based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ValidateRepositoryResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.validateRepository({
  authType: RepositoryAuthType.Header,
  branch: "main",
  certificateSecret: "Jaguar",
  commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
  path: "test/perf",
  token: "Pants Gasoline male",
  tokenSecret: {
    key: "<key>",
    name: "officially doloribus withdrawal",
    namespace: "Metal",
  },
  type: RepositoryType.Git,
  uri: "https://github.com/kubeshop/testkube",
  username: "Rosina.Leffler",
  usernameSecret: {
    key: "<key>",
    name: "Buckinghamshire solution",
    namespace: "repudiandae male candela",
  },
  workingDir: "/",
}).then((res: ValidateRepositoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Repository](../../models/shared/repository.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateRepositoryResponse](../../models/operations/validaterepositoryresponse.md)>**

