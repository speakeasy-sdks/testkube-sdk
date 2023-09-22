# Tests

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
  executionID: "excepturi",
  id: "98e22ae2-0da1-46fc-ab27-1a289c57e854",
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
  id: "e90439d2-2246-4569-8624-07084f7ab37c",
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
    data: "saepe",
    repository: {
      authType: RepositoryAuthType.Header,
      branch: "main",
      certificateSecret: "accusantium",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "sed",
      tokenSecret: {
        key: "eos",
        name: "Beatrice Buckridge",
        namespace: "fugiat",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Mauricio26",
      usernameSecret: {
        key: "quasi",
        name: "Hattie Schuster",
        namespace: "ex",
      },
      workingDir: "/",
    },
    type: TestContentType.GitFile,
    uri: "https://github.com/kubeshop/testkube",
  },
  created: new Date("2022-07-30T06:54:15Z"),
  executionRequest: {
    activeDeadlineSeconds: 1,
    args: [
      "est",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "provident",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "alias",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "deserunt",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "fugit",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "autem",
        reference: {
          name: "Clinton Schneider",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "cupiditate",
        reference: {
          name: "Mrs. Arthur Wolff",
        },
      },
    ],
    envs: {
      "unde": "corrupti",
    },
    executionLabels: {
      "quae": "facere",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Kelli Reichert",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "minus",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 943828,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "similique",
      type: RunningContextType.Testtrigger,
    },
    scraperTemplate: "consectetur",
    secretEnvs: {
      "labore": "laudantium",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "cumque",
    ],
    variables: {
      "adipisci": {
        configMapRef: {
          key: "veritatis",
          name: "Ms. Courtney Gutkowski",
          namespace: "necessitatibus",
        },
        name: "Ora Rosenbaum DDS",
        secretRef: {
          key: "numquam",
          name: "Gayle Koss",
          namespace: "vitae",
        },
        type: VariableType.Basic,
        value: "nisi",
      },
    },
    variablesFile: "consequuntur",
  },
  labels: {
    "voluptas": "ratione",
  },
  name: "test1",
  namespace: "testkube",
  schedule: "* * * * *",
  source: "my-private-repository-test",
  status: {
    latestExecution: {
      endTime: new Date("2021-11-25T23:25:02.274Z"),
      id: "62f395e004109209b50edfc4",
      number: 1,
      startTime: new Date("2022-12-16T03:47:02.612Z"),
      status: ExecutionStatus.Timeout,
    },
  },
  type: "postman/collection",
  uploads: [
    "impedit",
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

sdk.tests.createTestString("ducimus").then((res: CreateTestStringResponse) => {
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
  id: "66324ccb-06c8-4ca1-ad02-529270b8d572",
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
  selector: "aspernatur",
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
      "at",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "praesentium",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "sint",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "exercitationem",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "cum",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "voluptatum",
        reference: {
          name: "Guadalupe Wisoky",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "pariatur",
        reference: {
          name: "Kent Hickle",
        },
      },
    ],
    envs: {
      "provident": "amet",
    },
    executionLabels: {
      "dolor": "nostrum",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Mandy Kreiger",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "velit",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 240836,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "cupiditate",
      type: RunningContextType.Testsuite,
    },
    scraperTemplate: "numquam",
    secretEnvs: {
      "fugiat": "molestiae",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "quas",
    ],
    variables: {
      "repellendus": {
        configMapRef: {
          key: "saepe",
          name: "Verna Kautzer",
          namespace: "nesciunt",
        },
        name: "Terrance Wolf",
        secretRef: {
          key: "soluta",
          name: "Harvey Wisoky",
          namespace: "fugit",
        },
        type: VariableType.Basic,
        value: "ullam",
      },
    },
    variablesFile: "doloremque",
  },
  id: "a28382ac-483a-4fd2-b15b-ba650164e06f",
  namespace: "veniam",
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
      "quidem",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "eum",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "deserunt",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "repudiandae",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "nemo",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "molestias",
        reference: {
          name: "Mamie Schaefer",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "assumenda",
        reference: {
          name: "Cary Emmerich Sr.",
        },
      },
    ],
    envs: {
      "nam": "ex",
    },
    executionLabels: {
      "neque": "quod",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Mary Hammes",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "id",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 539537,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "quaerat",
      type: RunningContextType.UserCLI,
    },
    scraperTemplate: "dignissimos",
    secretEnvs: {
      "quam": "modi",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "fuga",
    ],
    variables: {
      "iure": {
        configMapRef: {
          key: "deleniti",
          name: "Perry Pacocha",
          namespace: "illum",
        },
        name: "Leona Hodkiewicz",
        secretRef: {
          key: "maiores",
          name: "Jessie Wintheiser",
          namespace: "consequatur",
        },
        type: VariableType.Basic,
        value: "accusantium",
      },
    },
    variablesFile: "voluptates",
  },
  concurrency: 590280,
  executionSelector: "maiores",
  namespace: "quaerat",
  selector: "numquam",
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
  id: "3b4257b9-92c8-4dbd-a6a6-1efa2198258f",
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
  executionID: "pariatur",
  id: "0a9eba47-f7d3-4ef0-8964-0d6a1831c87a",
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
  id: "df596fdf-1ad8-437a-a80c-1c19c95ba998",
  last: 385828,
  limit: 497695,
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
  id: "8fa3f696-991a-4f38-8ce0-3614448c7977",
  last: 654199,
  limit: 10585,
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
  id: "ef2f5360-28ef-4eef-9341-52ed7e253f4c",
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
  endDate: new RFCDate("2022-08-24"),
  id: "7deaa717-0f44-45ac-8f66-7aaf9bbad185",
  last: 959420,
  page: 913393,
  pageSize: 281135,
  startDate: new RFCDate("2022-12-07"),
  status: ExecutionStatus.Timeout,
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
  page: 384354,
  pageSize: 696324,
  selector: "delectus",
  status: ExecutionStatus.Passed,
  textSearch: "cumque",
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
  selector: "voluptatum",
  textSearch: "sequi",
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
      data: "atque",
      repository: {
        authType: RepositoryAuthType.Header,
        branch: "main",
        certificateSecret: "expedita",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "rerum",
        tokenSecret: {
          key: "totam",
          name: "Bruce Becker",
          namespace: "ex",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Jayson.Windler71",
        usernameSecret: {
          key: "eius",
          name: "Sally VonRueden",
          namespace: "debitis",
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
        "eos",
      ],
      argsMode: ExecutionRequestArgsMode.Append,
      artifactRequest: {
        dirs: [
          "incidunt",
        ],
        storageClassName: "artifact-volume-local",
        volumeMountPath: "porro",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "occaecati",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      cronJobTemplate: "reiciendis",
      envConfigMaps: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "voluptate",
          reference: {
            name: "Arnold Monahan",
          },
        },
      ],
      envSecrets: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "recusandae",
          reference: {
            name: "Mathew Klocko",
          },
        },
      ],
      envs: {
        "quod": "ratione",
      },
      executionLabels: {
        "totam": "vero",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {
          name: "Candice Nienow",
        },
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      jobTemplate: "illo",
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      number: 901563,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        context: "enim",
        type: RunningContextType.UserCLI,
      },
      scraperTemplate: "ex",
      secretEnvs: {
        "eveniet": "delectus",
      },
      sync: false,
      testSuiteName: "test-suite1",
      uploads: [
        "deleniti",
      ],
      variables: {
        "provident": {
          configMapRef: {
            key: "aut",
            name: "Dean Goldner",
            namespace: "odio",
          },
          name: "Elisa Boehm",
          secretRef: {
            key: "minima",
            name: "Marcella Dooley",
            namespace: "fuga",
          },
          type: VariableType.Basic,
          value: "maxime",
        },
      },
      variablesFile: "numquam",
    },
    labels: {
      "laborum": "eligendi",
    },
    name: "test1",
    namespace: "testkube",
    schedule: "* * * * *",
    source: "my-private-repository-test",
    status: {
      latestExecution: {
        endTime: new Date("2022-10-06T02:55:36.027Z"),
        id: "62f395e004109209b50edfc4",
        number: 1,
        startTime: new Date("2022-04-20T22:07:53.297Z"),
        status: ExecutionStatus.Failed,
      },
    },
    type: "postman/collection",
    uploads: [
      "provident",
    ],
  },
  id: "e26ced8f-9fdb-4941-8f63-bbf817837b01",
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
  requestBody: "mollitia",
  id: "fdd78862-4189-4eb4-8873-f5033f19dbf1",
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

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UploadsRequestBody1](../../models/operations/uploadsrequestbody1.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UploadsResponse](../../models/operations/uploadsresponse.md)>**

