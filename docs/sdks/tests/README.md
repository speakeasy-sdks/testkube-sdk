# Tests
(*tests*)

## Overview

Tests operations

### Available Operations

* [abortExecution](#abortexecution) - Aborts execution
* [abortTestExecutions](#aborttestexecutions) - Abort all executions of a test
* [createTestJson](#createtestjson) - Create new test
* [createTestString](#createteststring) - Create new test
* [deleteTest](#deletetest) - Delete test
* [deleteTests](#deletetests) - Delete tests
* [executeTest](#executetest) - Starts new test execution
* [executeTests](#executetests) - Starts new test executions
* [getTest](#gettest) - Get test
* [getTestExecution](#gettestexecution) - Get test execution
* [getTestMetrics](#gettestmetrics) - Get test metrics
* [getTestSuiteMetrics](#gettestsuitemetrics) - Get test suite metrics
* [getTestWithExecution](#gettestwithexecution) - Get test with execution
* [listTestExecutions](#listtestexecutions) - Get all test executions
* [listTestWithExecutions](#listtestwithexecutions) - List test with executions
* [listTests](#listtests) - List tests
* [updateTestJson](#updatetestjson) - Update test
* [updateTestString](#updateteststring) - Update test
* [uploads](#uploads) - Upload file

## abortExecution

Aborts execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.tests.abortExecution({
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

sdk.tests.abortTestExecutions({
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

sdk.tests.createTestJson({
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

sdk.tests.createTestString("Hybrid").then((res: CreateTestStringResponse) => {
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


## deleteTest

Deletes a test

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.tests.deleteTest({
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


## deleteTests

Deletes all or labeled tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.tests.deleteTests({
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


## executeTest

New test execution returns new execution details on successful execution start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionRequestArgsMode, RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.tests.executeTest({
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


## executeTests

New test executions returns new executions details on successful executions start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecuteTestsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionRequestArgsMode, RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.tests.executeTests({
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


## getTest

Gets the specified test

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.tests.getTest({
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

sdk.tests.getTestExecution({
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

sdk.tests.getTestMetrics({
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


## getTestSuiteMetrics

Gets test suite metrics for given tests executions, with particular execution status and timings

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteMetricsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.tests.getTestSuiteMetrics({
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


## getTestWithExecution

Gets the specified test with execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestWithExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.tests.getTestWithExecution({
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


## listTestExecutions

Returns array of all available test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.tests.listTestExecutions({
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


## listTestWithExecutions

List available test with executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestWithExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.tests.listTestWithExecutions({
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

sdk.tests.listTests({
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

sdk.tests.updateTestJson({
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

sdk.tests.updateTestString({
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

sdk.tests.uploads({
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

