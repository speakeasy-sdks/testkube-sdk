# api

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
  executionID: "perferendis",
  id: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
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
  id: "73920592-9396-4fea-b596-eb10faaa2352",
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
  executionID: "nobis",
  id: "5955907a-ff1a-43a2-ba94-67739251aa52",
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
  executionID: "quo",
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
  id: "3f5ad019-da1f-4fe7-8f09-7b0074f15471",
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
      "ipsum": "quidem",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "pariatur": "modi",
            "praesentium": "rem",
            "voluptates": "quasi",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
        {
          headers: {
            "sint": "veritatis",
            "itaque": "incidunt",
            "enim": "consequatur",
            "est": "quibusdam",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
        {
          headers: {
            "deserunt": "distinctio",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
      ],
      timeout: 1,
    },
    resource: TestTriggerResources.Event,
    resourceSelector: {
      name: "nginx",
      namespace: "testkube",
    },
    testSelector: {
      name: "nginx",
      namespace: "testkube",
    },
  },
  {
    action: TestTriggerActions.Run,
    conditionSpec: {
      conditions: [
        {
          reason: "NewReplicaSetAvailable",
          status: TestTriggerConditionStatuses.True,
          ttl: 1,
          type: "Progressing",
        },
        {
          reason: "NewReplicaSetAvailable",
          status: TestTriggerConditionStatuses.True,
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
      "quos": "perferendis",
      "magni": "assumenda",
      "ipsam": "alias",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "excepturi": "tempora",
            "facilis": "tempore",
            "labore": "delectus",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
      ],
      timeout: 1,
    },
    resource: TestTriggerResources.Daemonset,
    resourceSelector: {
      name: "nginx",
      namespace: "testkube",
    },
    testSelector: {
      name: "nginx",
      namespace: "testkube",
    },
  },
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
      "provident": "necessitatibus",
      "sint": "officia",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "a": "dolorum",
            "in": "in",
            "illum": "maiores",
            "rerum": "dicta",
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
import {
  ExecutionStatus,
  ExecutorFeatures,
  ExecutorUpsertRequestFeatures,
  RunningContextType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createExecutorJson({
  args: [
    "facere",
    "ea",
    "aliquid",
    "laborum",
  ],
  command: [
    "non",
    "occaecati",
    "enim",
    "accusamus",
  ],
  contentTypes: [
    "quidem",
    "provident",
    "nam",
    "id",
  ],
  executorType: "blanditiis",
  features: [
    ExecutorUpsertRequestFeatures.JunitReport,
    ExecutorUpsertRequestFeatures.Artifacts,
    ExecutorUpsertRequestFeatures.JunitReport,
  ],
  image: "nisi",
  imagePullSecrets: [
    {
      name: "Ms. Arturo Krajcik",
    },
    {
      name: "Alfonso Green",
    },
  ],
  jobTemplate: "natus",
  labels: {
    "eum": "vero",
    "aspernatur": "architecto",
    "magnam": "et",
  },
  meta: {
    docsURI: "https://docs.testkube.io/test-types/executor-k6",
    iconURI: "/assets/k6.jpg",
    tooltips: {
      "ullam": "provident",
      "quos": "sint",
      "accusantium": "mollitia",
    },
  },
  name: "name",
  namespace: "testkube",
  types: [
    "mollitia",
    "ad",
    "eum",
    "dolor",
  ],
  uri: "https://conventional-frequency.com",
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
import { ExecutionStatus, ExecutorFeatures, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createExecutorString("iure").then((res: CreateExecutorStringResponse) => {
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
import { RepositoryAuthType, RepositoryType, TestSourceType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestSourceJson({
  data: "doloribus",
  labels: {
    "eius": "maxime",
    "deleniti": "facilis",
    "in": "architecto",
    "architecto": "repudiandae",
  },
  name: "testsource1",
  namespace: "testkube",
  repository: {
    authType: RepositoryAuthType.Basic,
    branch: "main",
    certificateSecret: "expedita",
    commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
    path: "test/perf",
    token: "nihil",
    tokenSecret: {
      key: "repellat",
      name: "Louis Turner Sr.",
      namespace: "praesentium",
    },
    type: RepositoryType.Git,
    uri: "https://github.com/kubeshop/testkube",
    username: "Levi77",
    usernameSecret: {
      key: "illum",
      name: "Simon Jenkins",
      namespace: "ea",
    },
    workingDir: "/",
  },
  type: TestSourceUpsertRequestType.String,
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
import { RepositoryAuthType, RepositoryType, TestSourceType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestSourceString("ab").then((res: CreateTestSourceStringResponse) => {
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
  created: new Date("2022-12-13T19:01:00.083Z"),
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
    cronJobTemplate: "fugiat",
    executionLabels: {
      "aut": "cumque",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "hic": "libero",
      "nobis": "dolores",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "quis",
      type: RunningContextType.Testsuite,
    },
    sync: false,
    timeout: 1,
    variables: {
      "eaque": {
        configMapRef: {
          key: "quis",
          name: "Ruby Auer",
          namespace: "quam",
        },
        name: "Eula Hegmann",
        secretRef: {
          key: "omnis",
          name: "Freddie Bartoletti",
          namespace: "blanditiis",
        },
        type: VariableType.Secret,
        value: "eaque",
      },
      "occaecati": {
        configMapRef: {
          key: "rerum",
          name: "Ollie Watsica",
          namespace: "dolorum",
        },
        name: "Ervin McLaughlin",
        secretRef: {
          key: "delectus",
          name: "Billie Jacobi",
          namespace: "dolor",
        },
        type: VariableType.Basic,
        value: "ipsum",
      },
    },
  },
  labels: {
    "excepturi": "cum",
    "voluptate": "dignissimos",
    "reiciendis": "amet",
    "dolorum": "numquam",
  },
  name: "name",
  namespace: "testkube",
  repeats: 1,
  schedule: "* * * * *",
  status: {
    latestExecution: {
      endTime: new Date("2022-12-10T19:39:51.391Z"),
      id: "62f395e004109209b50edfc4",
      startTime: new Date("2022-07-26T10:30:36.625Z"),
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
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestSuiteString("voluptatibus").then((res: CreateTestSuiteStringResponse) => {
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
        status: TestTriggerConditionStatuses.False,
        ttl: 1,
        type: "Progressing",
      },
      {
        reason: "NewReplicaSetAvailable",
        status: TestTriggerConditionStatuses.True,
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
    "fugiat": "ab",
  },
  name: "name",
  namespace: "testkube",
  probeSpec: {
    delay: 1,
    probes: [
      {
        headers: {
          "iusto": "voluptate",
          "dolorum": "deleniti",
          "omnis": "necessitatibus",
        },
        host: "testkube-api-server",
        path: "/",
        port: 80,
        scheme: "http",
      },
      {
        headers: {
          "asperiores": "nihil",
          "ipsum": "voluptate",
          "id": "saepe",
        },
        host: "testkube-api-server",
        path: "/",
        port: 80,
        scheme: "http",
      },
      {
        headers: {
          "aspernatur": "perferendis",
          "amet": "optio",
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
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createTestTriggerString("ad").then((res: CreateTestTriggerStringResponse) => {
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
    data: "saepe",
    repository: {
      authType: RepositoryAuthType.Basic,
      branch: "main",
      certificateSecret: "deserunt",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "provident",
      tokenSecret: {
        key: "minima",
        name: "Dr. Jimmie Murphy",
        namespace: "tempora",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Herminia.Schmeler67",
      usernameSecret: {
        key: "a",
        name: "Fannie Kub",
        namespace: "tenetur",
      },
      workingDir: "/",
    },
    type: TestContentType.FileUri,
    uri: "https://github.com/kubeshop/testkube",
  },
  created: new Date("2022-07-30T06:54:15Z"),
  executionRequest: {
    activeDeadlineSeconds: 1,
    args: [
      "accusamus",
      "numquam",
      "enim",
    ],
    argsMode: ExecutionRequestArgsMode.Append,
    artifactRequest: {
      dirs: [
        "totam",
        "nihil",
        "sit",
        "expedita",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "neque",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "vel",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "libero",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "deserunt",
        reference: {
          name: "Tracy Gottlieb",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "maxime",
        reference: {
          name: "Dominic Carroll",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "aspernatur",
        reference: {
          name: "Verna Purdy",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "molestias",
        reference: {
          name: "Shawn Doyle",
        },
      },
    ],
    envs: {
      "sunt": "ullam",
      "nam": "hic",
    },
    executionLabels: {
      "cumque": "soluta",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Miss Kerry Emmerich",
      },
      {
        name: "Kent Bayer",
      },
      {
        name: "Clara Fisher Jr.",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "aut",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 555649,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "itaque",
      type: RunningContextType.UserCLI,
    },
    scraperTemplate: "est",
    secretEnvs: {
      "porro": "doloribus",
      "ut": "facilis",
      "cupiditate": "qui",
      "quae": "laudantium",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "occaecati",
      "voluptatibus",
    ],
    variables: {
      "vero": {
        configMapRef: {
          key: "omnis",
          name: "Tiffany Willms",
          namespace: "vero",
        },
        name: "Julio Weissnat",
        secretRef: {
          key: "odio",
          name: "Malcolm Swift",
          namespace: "quibusdam",
        },
        type: VariableType.Secret,
        value: "sequi",
      },
      "natus": {
        configMapRef: {
          key: "impedit",
          name: "Camille Heidenreich",
          namespace: "porro",
        },
        name: "Domingo Kris",
        secretRef: {
          key: "alias",
          name: "Don Hills",
          namespace: "vel",
        },
        type: VariableType.Secret,
        value: "magnam",
      },
      "ratione": {
        configMapRef: {
          key: "ex",
          name: "Willie Fahey III",
          namespace: "nulla",
        },
        name: "Boyd Heathcote",
        secretRef: {
          key: "saepe",
          name: "Krista Herzog",
          namespace: "inventore",
        },
        type: VariableType.Basic,
        value: "ea",
      },
      "quo": {
        configMapRef: {
          key: "consectetur",
          name: "Dr. Bruce Hane",
          namespace: "aut",
        },
        name: "Margie Russel",
        secretRef: {
          key: "accusamus",
          name: "Ellen Borer",
          namespace: "placeat",
        },
        type: VariableType.Basic,
        value: "eum",
      },
    },
    variablesFile: "autem",
  },
  labels: {
    "quas": "assumenda",
    "nulla": "voluptas",
    "libero": "quasi",
    "tempora": "numquam",
  },
  name: "test1",
  namespace: "testkube",
  schedule: "* * * * *",
  source: "my-private-repository-test",
  status: {
    latestExecution: {
      endTime: new Date("2022-05-29T22:38:52.265Z"),
      id: "62f395e004109209b50edfc4",
      number: 1,
      startTime: new Date("2022-07-11T02:03:34.375Z"),
      status: ExecutionStatus.Running,
    },
  },
  type: "postman/collection",
  uploads: [
    "eius",
    "esse",
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

sdk.api.createTestString("esse").then((res: CreateTestStringResponse) => {
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
    EventType.EndTestsuiteAborted,
    EventType.StartTestsuite,
    EventType.EndTestsuiteTimeout,
  ],
  headers: {
    "ut": "eum",
    "suscipit": "assumenda",
    "eos": "praesentium",
    "quisquam": "veritatis",
  },
  labels: {
    "id": "quidem",
  },
  name: "webhook1",
  namespace: "testkube",
  payloadObjectField: "neque",
  payloadTemplate: "quo",
  selector: "illum",
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
import { EventType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.createWebhookString("quo").then((res: CreateWebhookStringResponse) => {
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
  id: "a4251904-e523-4c7e-8bc7-178e4796f2a7",
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
  selector: "accusantium",
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
  id: "c688282a-a482-4562-b222-e9817ee17cbe",
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
  id: "61e6b7b9-5bc0-4ab3-820c-4f3789fd871f",
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
  selector: "error",
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
  id: "9dd2efd1-21aa-46f1-a674-bdb04f157560",
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
  selector: "voluptatum",
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
  id: "2d68ea19-f1d1-4705-9339-d08086a18403",
  namespace: "occaecati",
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
  namespace: "numquam",
  selector: "impedit",
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
  selector: "explicabo",
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
  id: "6071f93f-5f06-442d-ac7a-f515cc413aa6",
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
  selector: "velit",
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
  id: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
  mask: "reiciendis",
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
  filename: "quidem",
  id: "ee41f333-17fe-435b-a0eb-1ea426555ba3",
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
import {
  AssertionResultStatus,
  ExecutionRequestArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RunningContextType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.executeTest({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "dolores",
      "blanditiis",
      "in",
      "dolore",
    ],
    argsMode: ExecutionRequestArgsMode.Append,
    artifactRequest: {
      dirs: [
        "temporibus",
        "ullam",
        "adipisci",
        "cum",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "blanditiis",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "hic",
      "nesciunt",
      "culpa",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "corrupti",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "totam",
        reference: {
          name: "Miss Jorge Rolfson",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "reiciendis",
        reference: {
          name: "Jaime Quigley",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "ab",
        reference: {
          name: "Micheal Osinski",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "commodi",
        reference: {
          name: "Benjamin Hodkiewicz III",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "debitis",
        reference: {
          name: "Faith Aufderhar",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "incidunt",
        reference: {
          name: "Sherri Gerlach",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "ea",
        reference: {
          name: "Isaac Wolf",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "voluptate",
        reference: {
          name: "Marc Balistreri",
        },
      },
    ],
    envs: {
      "facilis": "quaerat",
      "incidunt": "ipsam",
      "debitis": "rem",
    },
    executionLabels: {
      "nobis": "error",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Sophie Wisoky",
      },
      {
        name: "Gwen Fritsch",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "officiis",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 104627,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "laudantium",
      type: RunningContextType.UserUI,
    },
    scraperTemplate: "praesentium",
    secretEnvs: {
      "laboriosam": "dolorum",
      "voluptatum": "error",
      "hic": "expedita",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "neque",
      "dolorum",
      "nostrum",
      "officia",
    ],
    variables: {
      "corrupti": {
        configMapRef: {
          key: "accusamus",
          name: "Kay Cormier",
          namespace: "voluptatem",
        },
        name: "Ms. Rudolph Gusikowski",
        secretRef: {
          key: "sit",
          name: "Willard Walker IV",
          namespace: "ex",
        },
        type: VariableType.Basic,
        value: "sit",
      },
      "vel": {
        configMapRef: {
          key: "nostrum",
          name: "Evan Altenwerth",
          namespace: "dolorem",
        },
        name: "Gerald Bradtke",
        secretRef: {
          key: "quidem",
          name: "Cameron Reilly",
          namespace: "alias",
        },
        type: VariableType.Basic,
        value: "deserunt",
      },
      "voluptate": {
        configMapRef: {
          key: "unde",
          name: "Rene Skiles",
          namespace: "perferendis",
        },
        name: "Rickey Kiehn",
        secretRef: {
          key: "praesentium",
          name: "Floyd Barrows",
          namespace: "quasi",
        },
        type: VariableType.Secret,
        value: "reprehenderit",
      },
    },
    variablesFile: "asperiores",
  },
  id: "86bc173d-689e-4ee9-926f-8d986e881ead",
  namespace: "labore",
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
import {
  ExecutionStatus,
  RunningContextType,
  TestSuiteExecutionStatus,
  TestSuiteStepType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

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
    cronJobTemplate: "reiciendis",
    executionLabels: {
      "repudiandae": "dicta",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "beatae": "dolores",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "enim",
      type: RunningContextType.UserUI,
    },
    sync: false,
    timeout: 1,
    variables: {
      "a": {
        configMapRef: {
          key: "molestias",
          name: "Tricia Cronin",
          namespace: "perspiciatis",
        },
        name: "Sylvia Upton",
        secretRef: {
          key: "fugit",
          name: "Leo Kiehn II",
          namespace: "quidem",
        },
        type: VariableType.Secret,
        value: "non",
      },
    },
  },
  id: "e060807e-2b6e-43ab-8845-f0597a60ff2a",
  last: 327988,
  namespace: "dolore",
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
import {
  ExecutionStatus,
  RunningContextType,
  TestSuiteExecutionStatus,
  TestSuiteStepType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

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
    cronJobTemplate: "dolorum",
    executionLabels: {
      "quae": "recusandae",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "quaerat": "molestiae",
      "ex": "ut",
      "culpa": "adipisci",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "debitis",
      type: RunningContextType.Testsuite,
    },
    sync: false,
    timeout: 1,
    variables: {
      "nemo": {
        configMapRef: {
          key: "recusandae",
          name: "Sherri Hauck",
          namespace: "provident",
        },
        name: "Marion Boyer",
        secretRef: {
          key: "mollitia",
          name: "Rufus Okuneva",
          namespace: "accusantium",
        },
        type: VariableType.Secret,
        value: "doloribus",
      },
      "ullam": {
        configMapRef: {
          key: "in",
          name: "Darin Nienow",
          namespace: "modi",
        },
        name: "Virgil Towne",
        secretRef: {
          key: "vitae",
          name: "Mr. Ricky Harvey",
          namespace: "quae",
        },
        type: VariableType.Basic,
        value: "velit",
      },
    },
  },
  concurrency: 137251,
  namespace: "eum",
  selector: "eius",
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
import {
  AssertionResultStatus,
  ExecutionRequestArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RunningContextType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.executeTests({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "at",
      "impedit",
      "eos",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "dicta",
        "minima",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "beatae",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "provident",
      "earum",
      "soluta",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "hic",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "eaque",
        reference: {
          name: "Freddie Wyman",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "porro",
        reference: {
          name: "Connie Corkery",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "ratione",
        reference: {
          name: "Mr. Santiago Stoltenberg IV",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "natus",
        reference: {
          name: "Mr. Sam Flatley",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "necessitatibus",
        reference: {
          name: "Anita Kovacek IV",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "esse",
        reference: {
          name: "Emilio Wisoky PhD",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "doloremque",
        reference: {
          name: "Glenda Goldner",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "consectetur",
        reference: {
          name: "Mrs. Melissa Osinski",
        },
      },
    ],
    envs: {
      "aliquid": "officia",
      "suscipit": "aliquid",
      "perferendis": "eum",
    },
    executionLabels: {
      "iste": "id",
      "ab": "error",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Shaun Osinski",
      },
      {
        name: "Bill Brown",
      },
      {
        name: "Ruben Goyette",
      },
      {
        name: "Leona Rippin IV",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "omnis",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 85233,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "rerum",
      type: RunningContextType.Testtrigger,
    },
    scraperTemplate: "culpa",
    secretEnvs: {
      "sapiente": "officiis",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "fuga",
    ],
    variables: {
      "debitis": {
        configMapRef: {
          key: "voluptatem",
          name: "Nina Wehner",
          namespace: "rem",
        },
        name: "Herman Zemlak",
        secretRef: {
          key: "perferendis",
          name: "Jimmie Russel",
          namespace: "ipsam",
        },
        type: VariableType.Secret,
        value: "dolor",
      },
      "aliquam": {
        configMapRef: {
          key: "inventore",
          name: "Peter Goodwin Sr.",
          namespace: "sit",
        },
        name: "Beverly Bergstrom I",
        secretRef: {
          key: "fugiat",
          name: "Kathryn Bednar",
          namespace: "impedit",
        },
        type: VariableType.Secret,
        value: "esse",
      },
      "necessitatibus": {
        configMapRef: {
          key: "sed",
          name: "Robin Ratke",
          namespace: "voluptatum",
        },
        name: "Annette Bernier",
        secretRef: {
          key: "nobis",
          name: "Mrs. Kate Cronin",
          namespace: "quasi",
        },
        type: VariableType.Basic,
        value: "at",
      },
      "vero": {
        configMapRef: {
          key: "est",
          name: "Johnny Yundt",
          namespace: "occaecati",
        },
        name: "Allison Kuvalis",
        secretRef: {
          key: "numquam",
          name: "Brandy Gibson",
          namespace: "nesciunt",
        },
        type: VariableType.Secret,
        value: "laudantium",
      },
    },
    variablesFile: "incidunt",
  },
  concurrency: 97493,
  executionSelector: "rem",
  namespace: "fugiat",
  selector: "dicta",
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
  id: "62309fb0-9299-421a-afb9-f58c4d86e68e",
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
import {
  AssertionResultStatus,
  ExecutionArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getExecutionByID({
  executionID: "modi",
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
import {
  AssertionResultStatus,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  ExecutorOutputType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getExecutionLogs({
  id: "be056013-f59d-4a75-ba59-ecfef66ef1ca",
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
import { ExecutionStatus, ExecutorFeatures, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getExecutor({
  id: "a3383c2b-eb47-4737-bc8d-72f64d1db1f2",
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

sdk.api.getTest({
  id: "c4310661-e963-449e-9cf9-e06e3a437000",
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
import {
  AssertionResultStatus,
  ExecutionArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestExecution({
  executionID: "officia",
  id: "e6b6bc9b-8f75-49ea-855a-9741d3113529",
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
  id: "65bb8a72-0261-4143-9e13-9dbc2259b1ab",
  last: 854460,
  limit: 637462,
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
import { RepositoryAuthType, RepositoryType, TestSourceType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestSource({
  id: "8c070e10-84cb-4067-ad1a-d879eeb9665b",
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
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteByID({
  id: "85efbd02-bae0-4be2-9782-259e3ea4b519",
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
import {
  AssertionResultStatus,
  ExecutionArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  TestSuiteExecutionStatus,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteByIDWithExecution({
  id: "7f92443d-a7ce-452b-895c-537c6454efb0",
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
import {
  AssertionResultStatus,
  ExecutionArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  TestSuiteExecutionStatus,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteExecution({
  executionID: "libero",
  id: "34896c3c-a5ac-4fbe-afd5-707577929177",
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
  executionID: "pariatur",
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
  executionID: "itaque",
  id: "ac646ecb-5734-409e-beb1-e5a2b12eb07f",
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
import {
  AssertionResultStatus,
  ExecutionArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  TestSuiteExecutionStatus,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestSuiteExecutionByID({
  executionID: "veritatis",
  last: 96450,
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
  id: "6db99545-fc95-4fa8-8970-e189dbb30fcb",
  last: 216870,
  limit: 238011,
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
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestTriggerByID({
  id: "ea055b19-7cd4-44e2-b52d-82d3513bb6f4",
  namespace: "blanditiis",
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
import {
  AssertionResultStatus,
  ExecutionArgsMode,
  ExecutionRequestArgsMode,
  ExecutionResultOutputType,
  ExecutionStatus,
  ExecutionStepResultStatus,
  RepositoryAuthType,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getTestWithExecution({
  id: "b656bcdb-35ff-42e4-b275-37a8cd9e7319",
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
import { EventType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.getWebhook({
  id: "c177d525-f77b-4114-aeb5-2ff785fc3781",
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
import { ExecutionStatus, TestSuiteExecutionStatus, TestSuiteStepType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listAllTestSuiteExecutions({
  endDate: new RFCDate("2022-03-04"),
  last: 304173,
  page: 790463,
  pageSize: 591065,
  selector: "laudantium",
  startDate: new RFCDate("2022-12-21"),
  status: TestSuiteExecutionStatus.Aborted,
  test: "aspernatur",
  textSearch: "nam",
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
import { ExecutionStatus, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listExecutions({
  endDate: new RFCDate("2021-11-18"),
  page: 590858,
  pageSize: 922299,
  selector: "rerum",
  startDate: new RFCDate("2022-08-22"),
  status: ExecutionStatus.Timeout,
  test: "similique",
  textSearch: "repellendus",
  type: "iure",
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
import { ExecutorFeatures } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listExecutors({
  selector: "dolorem",
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
import { ExecutionStatus, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listTestExecutions({
  endDate: new RFCDate("2022-03-25"),
  id: "600503d8-bb31-4180-b739-ae9e057eb809",
  last: 879522,
  page: 178635,
  pageSize: 520081,
  startDate: new RFCDate("2022-12-20"),
  status: ExecutionStatus.Running,
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
import { RepositoryAuthType, RepositoryType, TestSourceType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listTestSources({
  selector: "dolor",
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
import { ExecutionStatus, TestSuiteExecutionStatus, TestSuiteStepType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.api.listTestSuiteExecutions({
  endDate: new RFCDate("2022-01-17"),
  id: "3981d4c7-00b6-407f-bc93-c73b9da3f2ce",
  page: 848346,
  pageSize: 670762,
  startDate: new RFCDate("2022-02-15"),
  status: TestSuiteExecutionStatus.Running,
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

sdk.api.listTestSuiteTests({
  id: "3f225741-1faf-44b7-944e-472e802857a5",
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
import {
  ExecutionStatus,
  RunningContextType,
  TestSuiteExecutionStatus,
  TestSuiteStepType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listTestSuiteWithExecutions({
  page: 727544,
  pageSize: 300189,
  selector: "sit",
  status: TestSuiteExecutionStatus.Running,
  textSearch: "eum",
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
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listTestSuites({
  selector: "nesciunt",
  textSearch: "mollitia",
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
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listTestTriggers({
  namespace: "dignissimos",
  selector: "fugiat",
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

sdk.api.listTestWithExecutions({
  page: 345138,
  pageSize: 475325,
  selector: "veniam",
  status: ExecutionStatus.Timeout,
  textSearch: "ab",
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

sdk.api.listTests({
  selector: "modi",
  textSearch: "aut",
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
import { EventType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.listWebhooks({
  selector: "aut",
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
      data: "odio",
      labels: {
        "numquam": "dolorum",
        "possimus": "voluptate",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "nesciunt",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "quaerat",
        tokenSecret: {
          key: "itaque",
          name: "Ralph Rau",
          namespace: "et",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Meaghan_Fay",
        usernameSecret: {
          key: "alias",
          name: "David Lubowitz",
          namespace: "veritatis",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.String,
      uri: "https://github.com/kubeshop/testkube",
    },
    {
      data: "eaque",
      labels: {
        "delectus": "mollitia",
        "nulla": "officia",
        "sed": "voluptatem",
        "alias": "eveniet",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Header,
        branch: "main",
        certificateSecret: "voluptatem",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "incidunt",
        tokenSecret: {
          key: "qui",
          name: "Mr. Alyssa Pouros",
          namespace: "modi",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Noel_Wolf",
        usernameSecret: {
          key: "libero",
          name: "Johnny Jacobi",
          namespace: "ducimus",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.String,
      uri: "https://github.com/kubeshop/testkube",
    },
    {
      data: "velit",
      labels: {
        "repellat": "nulla",
        "laborum": "natus",
        "accusamus": "doloremque",
        "nisi": "rerum",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Header,
        branch: "main",
        certificateSecret: "voluptates",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "non",
        tokenSecret: {
          key: "rem",
          name: "Dr. Marion Schaefer",
          namespace: "quae",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Shayne31",
        usernameSecret: {
          key: "optio",
          name: "Joseph Purdy",
          namespace: "iste",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.String,
      uri: "https://github.com/kubeshop/testkube",
    },
    {
      data: "quos",
      labels: {
        "dolore": "modi",
        "itaque": "maxime",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "consequuntur",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "assumenda",
        tokenSecret: {
          key: "vero",
          name: "Edmund Sawayn",
          namespace: "reiciendis",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Annabel.Marvin",
        usernameSecret: {
          key: "iure",
          name: "Crystal Tremblay",
          namespace: "corporis",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.FileUri,
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
  clusterId: "consequuntur",
  enableTelemetry: false,
  id: "a7b408f0-5e3d-448f-9af3-13a1f5fd9425",
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
import {
  ExecutionStatus,
  ExecutorFeatures,
  ExecutorUpdateRequestFeatures,
  RunningContextType,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateExecutorJson({
  executorUpdateRequest: {
    args: [
      "optio",
      "alias",
      "quidem",
    ],
    command: [
      "commodi",
    ],
    contentTypes: [
      "consequuntur",
      "veniam",
      "debitis",
      "officia",
    ],
    executorType: "sint",
    features: [
      ExecutorUpdateRequestFeatures.Artifacts,
      ExecutorUpdateRequestFeatures.JunitReport,
    ],
    image: "adipisci",
    imagePullSecrets: [
      {
        name: "Lorraine Jacobson Sr.",
      },
      {
        name: "Charlie Schaefer",
      },
      {
        name: "Warren Brakus",
      },
    ],
    jobTemplate: "magni",
    labels: {
      "adipisci": "praesentium",
      "dolor": "exercitationem",
    },
    meta: {
      docsURI: "https://docs.testkube.io/test-types/executor-k6",
      iconURI: "/assets/k6.jpg",
      tooltips: {
        "facilis": "impedit",
        "sit": "nemo",
        "culpa": "consequuntur",
      },
    },
    name: "name",
    namespace: "testkube",
    types: [
      "deserunt",
    ],
    uri: "http://glaring-shore.org",
  },
  id: "fc5fde10-a0ce-4216-9e51-0019c6dc5e34",
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
import { ExecutionStatus, ExecutorFeatures, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateExecutorString({
  requestBody: "dignissimos",
  id: "62799bfb-be69-449f-b2bb-4ecae6c3d5db",
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
import { RepositoryAuthType, RepositoryType, TestSourceType, TestSourceUpdateRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestSourceJson({
  testSourceUpdateRequest: {
    data: "non",
    labels: {
      "assumenda": "recusandae",
      "distinctio": "pariatur",
      "ad": "facere",
    },
    name: "testsource1",
    namespace: "testkube",
    repository: {
      authType: RepositoryAuthType.Header,
      branch: "main",
      certificateSecret: "eveniet",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "laborum",
      tokenSecret: {
        key: "incidunt",
        name: "Vernon Abbott",
        namespace: "molestias",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Margarita.Ortiz",
      usernameSecret: {
        key: "quo",
        name: "Theresa Jacobi",
        namespace: "eligendi",
      },
      workingDir: "/",
    },
    type: TestSourceUpdateRequestType.Git,
    uri: "https://github.com/kubeshop/testkube",
  },
  id: "5e9d9a45-78ad-4c1a-8600-dec001ac802e",
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
import { RepositoryAuthType, RepositoryType, TestSourceType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestSourceString({
  requestBody: "sed",
  id: "ec09ff8f-0f81-46ff-b477-c13e902c1412",
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
    created: new Date("2022-08-07T09:12:40.710Z"),
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
      cronJobTemplate: "quas",
      executionLabels: {
        "ullam": "quae",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      labels: {
        "incidunt": "quam",
        "magni": "deserunt",
        "delectus": "omnis",
      },
      name: "testing with 1000 users",
      namespace: "testkube",
      number: 1,
      runningContext: {
        context: "sed",
        type: RunningContextType.UserUI,
      },
      sync: false,
      timeout: 1,
      variables: {
        "quis": {
          configMapRef: {
            key: "cupiditate",
            name: "Miriam Wuckert",
            namespace: "reiciendis",
          },
          name: "Renee Beer",
          secretRef: {
            key: "quas",
            name: "Elsie Yundt",
            namespace: "perspiciatis",
          },
          type: VariableType.Basic,
          value: "dicta",
        },
        "minus": {
          configMapRef: {
            key: "commodi",
            name: "Lowell Rippin",
            namespace: "voluptates",
          },
          name: "Charlotte Dickinson",
          secretRef: {
            key: "esse",
            name: "Perry Zieme",
            namespace: "maiores",
          },
          type: VariableType.Secret,
          value: "nulla",
        },
        "deserunt": {
          configMapRef: {
            key: "corporis",
            name: "Gretchen Halvorson",
            namespace: "eum",
          },
          name: "Steven Nienow IV",
          secretRef: {
            key: "eius",
            name: "Jesse Rogahn",
            namespace: "quia",
          },
          type: VariableType.Basic,
          value: "reprehenderit",
        },
        "quod": {
          configMapRef: {
            key: "quos",
            name: "Allen Kozey",
            namespace: "modi",
          },
          name: "Jana Brakus",
          secretRef: {
            key: "sunt",
            name: "Tony Connelly",
            namespace: "ipsam",
          },
          type: VariableType.Basic,
          value: "exercitationem",
        },
      },
    },
    labels: {
      "nihil": "ad",
      "nisi": "tenetur",
    },
    name: "name",
    namespace: "testkube",
    repeats: 1,
    schedule: "* * * * *",
    status: {
      latestExecution: {
        endTime: new Date("2022-02-26T12:27:00.614Z"),
        id: "62f395e004109209b50edfc4",
        startTime: new Date("2022-08-14T06:59:07.022Z"),
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
  id: "d0af2dfe-13db-44f6-acba-3f8941aebc0b",
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
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestSuiteString({
  requestBody: "corrupti",
  id: "0a6924d3-b2ec-4fcc-8f89-5010f5dd3d6f",
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
          status: TestTriggerConditionStatuses.True,
          ttl: 1,
          type: "Progressing",
        },
        {
          reason: "NewReplicaSetAvailable",
          status: TestTriggerConditionStatuses.False,
          ttl: 1,
          type: "Progressing",
        },
        {
          reason: "NewReplicaSetAvailable",
          status: TestTriggerConditionStatuses.True,
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
      "ad": "aliquam",
      "quisquam": "quas",
      "consequuntur": "maiores",
      "inventore": "aliquid",
    },
    name: "name",
    namespace: "testkube",
    probeSpec: {
      delay: 1,
      probes: [
        {
          headers: {
            "dolor": "aliquid",
            "consectetur": "cumque",
            "rem": "voluptatum",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
        {
          headers: {
            "adipisci": "recusandae",
            "tempora": "blanditiis",
          },
          host: "testkube-api-server",
          path: "/",
          port: 80,
          scheme: "http",
        },
        {
          headers: {
            "sequi": "voluptatum",
            "sit": "rerum",
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
  },
  id: "f6b8ca27-5a60-4a04-8495-cc699171b51c",
  namespace: "dicta",
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
import {
  TestTriggerActions,
  TestTriggerConditionStatuses,
  TestTriggerExecutions,
  TestTriggerResources,
} from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.api.updateTestTriggerString({
  requestBody: "harum",
  id: "db1cf4b8-88eb-4dfc-8ccc-a99bc7fc0b2d",
  namespace: "eligendi",
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
      data: "recusandae",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "aut",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "laudantium",
        tokenSecret: {
          key: "iusto",
          name: "Silvia Goodwin",
          namespace: "doloremque",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Alexa.Keeling44",
        usernameSecret: {
          key: "voluptatum",
          name: "Christian Lindgren",
          namespace: "atque",
        },
        workingDir: "/",
      },
      type: TestContentType.FileUri,
      uri: "https://github.com/kubeshop/testkube",
    },
    created: new Date("2022-07-30T06:54:15Z"),
    executionRequest: {
      activeDeadlineSeconds: 1,
      args: [
        "architecto",
        "est",
        "enim",
      ],
      argsMode: ExecutionRequestArgsMode.Override,
      artifactRequest: {
        dirs: [
          "quae",
        ],
        storageClassName: "artifact-volume-local",
        volumeMountPath: "quas",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "enim",
        "labore",
        "sapiente",
        "saepe",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      cronJobTemplate: "delectus",
      envConfigMaps: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "natus",
          reference: {
            name: "Luther Hahn",
          },
        },
        {
          mapToVariables: false,
          mount: true,
          mountPath: "officiis",
          reference: {
            name: "Noel Hauck",
          },
        },
        {
          mapToVariables: false,
          mount: true,
          mountPath: "nemo",
          reference: {
            name: "Danny Bahringer",
          },
        },
      ],
      envSecrets: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "recusandae",
          reference: {
            name: "Hugh Carroll III",
          },
        },
        {
          mapToVariables: false,
          mount: true,
          mountPath: "necessitatibus",
          reference: {
            name: "Cassandra Casper",
          },
        },
        {
          mapToVariables: false,
          mount: true,
          mountPath: "laborum",
          reference: {
            name: "Miss Rosie Gleichner",
          },
        },
        {
          mapToVariables: false,
          mount: true,
          mountPath: "voluptatum",
          reference: {
            name: "Cristina Ebert",
          },
        },
      ],
      envs: {
        "sequi": "fugit",
      },
      executionLabels: {
        "hic": "eaque",
        "dolorem": "architecto",
        "aperiam": "aspernatur",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {
          name: "Pamela Gusikowski",
        },
        {
          name: "Loren Jakubowski IV",
        },
        {
          name: "Irvin Marks",
        },
        {
          name: "Marguerite Jast",
        },
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      jobTemplate: "tenetur",
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      number: 493407,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        context: "esse",
        type: RunningContextType.Testtrigger,
      },
      scraperTemplate: "laudantium",
      secretEnvs: {
        "eveniet": "earum",
        "velit": "officiis",
      },
      sync: false,
      testSuiteName: "test-suite1",
      uploads: [
        "rerum",
        "itaque",
      ],
      variables: {
        "ipsam": {
          configMapRef: {
            key: "explicabo",
            name: "Gilbert Hayes",
            namespace: "ut",
          },
          name: "Julie Lakin",
          secretRef: {
            key: "expedita",
            name: "Nick Blanda",
            namespace: "temporibus",
          },
          type: VariableType.Secret,
          value: "iusto",
        },
        "enim": {
          configMapRef: {
            key: "accusamus",
            name: "Silvia Langworth V",
            namespace: "illum",
          },
          name: "Roman Lind",
          secretRef: {
            key: "architecto",
            name: "Clara Wyman",
            namespace: "consequatur",
          },
          type: VariableType.Basic,
          value: "debitis",
        },
      },
      variablesFile: "facere",
    },
    labels: {
      "cumque": "aliquam",
      "dolorum": "deserunt",
      "ad": "reiciendis",
      "sequi": "porro",
    },
    name: "test1",
    namespace: "testkube",
    schedule: "* * * * *",
    source: "my-private-repository-test",
    status: {
      latestExecution: {
        endTime: new Date("2021-07-03T05:59:33.277Z"),
        id: "62f395e004109209b50edfc4",
        number: 1,
        startTime: new Date("2021-03-06T15:38:17.604Z"),
        status: ExecutionStatus.Queued,
      },
    },
    type: "postman/collection",
    uploads: [
      "officia",
      "cupiditate",
    ],
  },
  id: "72e05672-8227-4b2d-b094-70bf7a4fa87c",
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

sdk.api.updateTestString({
  requestBody: "voluptatibus",
  id: "535a6fae-54eb-4f60-8321-f023b75d2367",
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
  parentType: UploadsRequestBodyParentType.Execution,
}).then((res: UploadsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UploadsRequestBody1](../../models/operations/uploadsrequestbody1.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


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
  certificateSecret: "vitae",
  commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
  path: "test/perf",
  token: "est",
  tokenSecret: {
    key: "accusantium",
    name: "Israel Lubowitz",
    namespace: "odio",
  },
  type: RepositoryType.Git,
  uri: "https://github.com/kubeshop/testkube",
  username: "Lafayette62",
  usernameSecret: {
    key: "nesciunt",
    name: "Ruben Sipes DDS",
    namespace: "sequi",
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

