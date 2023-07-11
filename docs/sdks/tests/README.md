# tests

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
  executionID: "culpa",
  id: "79cd72cd-2484-4da2-9729-f2ac41ef5725",
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
  id: "f1169ac1-e41d-48a2-bc23-e34f2dfa4a19",
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
    data: "quam",
    repository: {
      authType: RepositoryAuthType.Header,
      branch: "main",
      certificateSecret: "iure",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "nulla",
      tokenSecret: {
        key: "recusandae",
        name: "Mrs. Brandon Collins DVM",
        namespace: "saepe",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Bobby15",
      usernameSecret: {
        key: "voluptatem",
        name: "Evan Lind",
        namespace: "saepe",
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
      "quis",
      "modi",
      "adipisci",
      "pariatur",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "dolore",
        "numquam",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "dolor",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "accusamus",
      "voluptates",
      "quia",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "aspernatur",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "non",
        reference: {
          name: "Ruth Goodwin",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "expedita",
        reference: {
          name: "Juan Harber V",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "quisquam",
        reference: {
          name: "Nettie Herzog",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "totam",
        reference: {
          name: "Cristina Nader",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "dolorem",
        reference: {
          name: "Cecelia O'Conner",
        },
      },
    ],
    envs: {
      "et": "odio",
      "eligendi": "nesciunt",
    },
    executionLabels: {
      "aperiam": "pariatur",
      "ad": "architecto",
      "culpa": "aliquam",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Miss Domingo Bahringer",
      },
      {
        name: "Ms. Sidney Kling",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "incidunt",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 407468,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "alias",
      type: RunningContextType.Testsuite,
    },
    scraperTemplate: "qui",
    secretEnvs: {
      "maiores": "nam",
      "pariatur": "quod",
      "modi": "vitae",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "delectus",
      "nemo",
      "at",
      "magnam",
    ],
    variables: {
      "sed": {
        configMapRef: {
          key: "mollitia",
          name: "Francisco Yost",
          namespace: "impedit",
        },
        name: "Marvin Harvey IV",
        secretRef: {
          key: "nisi",
          name: "Dr. Brandy Wisoky",
          namespace: "distinctio",
        },
        type: VariableType.Basic,
        value: "atque",
      },
      "consectetur": {
        configMapRef: {
          key: "nemo",
          name: "Sheldon Schimmel",
          namespace: "cumque",
        },
        name: "Dr. Hugh Keebler",
        secretRef: {
          key: "impedit",
          name: "Miss Dan Lakin",
          namespace: "molestiae",
        },
        type: VariableType.Basic,
        value: "quas",
      },
      "sunt": {
        configMapRef: {
          key: "aperiam",
          name: "Alex Zulauf",
          namespace: "quaerat",
        },
        name: "Colleen Cummerata",
        secretRef: {
          key: "cumque",
          name: "Dr. Alfred Prohaska",
          namespace: "amet",
        },
        type: VariableType.Secret,
        value: "libero",
      },
      "impedit": {
        configMapRef: {
          key: "repudiandae",
          name: "Debbie Kozey",
          namespace: "aliquid",
        },
        name: "Marcus VonRueden",
        secretRef: {
          key: "exercitationem",
          name: "Teresa Denesik",
          namespace: "in",
        },
        type: VariableType.Basic,
        value: "nobis",
      },
    },
    variablesFile: "voluptatibus",
  },
  labels: {
    "facilis": "facere",
    "aut": "itaque",
    "rerum": "molestiae",
    "quaerat": "distinctio",
  },
  name: "test1",
  namespace: "testkube",
  schedule: "* * * * *",
  source: "my-private-repository-test",
  status: {
    latestExecution: {
      endTime: new Date("2022-05-20T09:27:03.508Z"),
      id: "62f395e004109209b50edfc4",
      number: 1,
      startTime: new Date("2022-12-06T14:25:00.055Z"),
      status: ExecutionStatus.Failed,
    },
  },
  type: "postman/collection",
  uploads: [
    "dolorem",
    "rerum",
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

sdk.tests.createTestString("ut").then((res: CreateTestStringResponse) => {
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
  id: "4bd3c431-59d3-43e5-953c-001139863aa4",
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
  selector: "et",
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

sdk.tests.executeTest({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "aliquid",
      "optio",
      "adipisci",
      "ab",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "explicabo",
        "reiciendis",
        "dicta",
        "hic",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "porro",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "ullam",
      "sunt",
      "quisquam",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "sint",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "ut",
        reference: {
          name: "Johanna Witting",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "iste",
        reference: {
          name: "Willis Smitham",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "ipsam",
        reference: {
          name: "Merle Johns",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "esse",
        reference: {
          name: "Johnnie Schamberger",
        },
      },
    ],
    envs: {
      "delectus": "eum",
      "beatae": "suscipit",
      "eveniet": "mollitia",
    },
    executionLabels: {
      "porro": "molestiae",
      "inventore": "vel",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Daisy Franey",
      },
      {
        name: "Daniel Zemlak",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "sit",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 577672,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "nulla",
      type: RunningContextType.UserCLI,
    },
    scraperTemplate: "natus",
    secretEnvs: {
      "magni": "a",
      "cumque": "explicabo",
      "delectus": "natus",
      "earum": "fugit",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "vitae",
      "consequatur",
      "nemo",
      "provident",
    ],
    variables: {
      "numquam": {
        configMapRef: {
          key: "tempore",
          name: "Allen Hamill",
          namespace: "adipisci",
        },
        name: "Madeline Kunze",
        secretRef: {
          key: "occaecati",
          name: "Mattie Gutkowski",
          namespace: "laboriosam",
        },
        type: VariableType.Secret,
        value: "itaque",
      },
      "assumenda": {
        configMapRef: {
          key: "quaerat",
          name: "Ramiro Rowe",
          namespace: "nemo",
        },
        name: "Joy Schroeder",
        secretRef: {
          key: "eos",
          name: "Lori Schneider",
          namespace: "maiores",
        },
        type: VariableType.Basic,
        value: "ducimus",
      },
    },
    variablesFile: "dolore",
  },
  id: "91aabfa2-e761-4f0c-a4d4-56ef1031e689",
  namespace: "omnis",
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

sdk.tests.executeTests({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "accusantium",
      "minus",
      "explicabo",
      "accusantium",
    ],
    argsMode: ExecutionRequestArgsMode.Append,
    artifactRequest: {
      dirs: [
        "saepe",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "quia",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "minus",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "illum",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "exercitationem",
        reference: {
          name: "Forrest Abshire",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "modi",
        reference: {
          name: "Carl Larson",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "voluptas",
        reference: {
          name: "Dr. Arturo Kling",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "atque",
        reference: {
          name: "Karen Roob",
        },
      },
    ],
    envs: {
      "aut": "consectetur",
      "in": "rerum",
      "distinctio": "blanditiis",
    },
    executionLabels: {
      "sit": "optio",
      "impedit": "corrupti",
      "quas": "ullam",
      "veritatis": "quas",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Leroy Stoltenberg II",
      },
      {
        name: "Terrell Cremin",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "ad",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 845013,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "facere",
      type: RunningContextType.Scheduler,
    },
    scraperTemplate: "quidem",
    secretEnvs: {
      "commodi": "mollitia",
      "similique": "quasi",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "voluptatibus",
      "illum",
      "ea",
      "facere",
    ],
    variables: {
      "magni": {
        configMapRef: {
          key: "blanditiis",
          name: "Mrs. Trevor Beer V",
          namespace: "inventore",
        },
        name: "Phyllis Mitchell",
        secretRef: {
          key: "aliquid",
          name: "Bertha Halvorson PhD",
          namespace: "blanditiis",
        },
        type: VariableType.Basic,
        value: "delectus",
      },
      "explicabo": {
        configMapRef: {
          key: "iste",
          name: "Megan Collins",
          namespace: "laboriosam",
        },
        name: "Rickey Kris",
        secretRef: {
          key: "a",
          name: "Tasha Pagac",
          namespace: "veritatis",
        },
        type: VariableType.Basic,
        value: "placeat",
      },
      "libero": {
        configMapRef: {
          key: "saepe",
          name: "Stella Boehm",
          namespace: "ab",
        },
        name: "Tiffany Torp",
        secretRef: {
          key: "unde",
          name: "Ms. Jimmy Renner",
          namespace: "vero",
        },
        type: VariableType.Secret,
        value: "omnis",
      },
    },
    variablesFile: "occaecati",
  },
  concurrency: 164044,
  executionSelector: "veniam",
  namespace: "quam",
  selector: "repellendus",
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

sdk.tests.getTest({
  id: "04f40847-a742-4d84-896c-bdeecf6b99bc",
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

sdk.tests.getTestExecution({
  executionID: "commodi",
  id: "3562ebfd-f55c-4294-8060-b06a1287764e",
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
  id: "ef6d0c6d-6ed9-4c73-9d63-4571509a8e87",
  last: 41508,
  limit: 844094,
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
  id: "3c5a1f9c-242c-47b6-aa1f-30c73df5b671",
  last: 570437,
  limit: 528085,
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

sdk.tests.getTestWithExecution({
  id: "90f42a4b-b438-4d85-b260-591d745e3c20",
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
import { ExecutionStatus, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.tests.listTestExecutions({
  endDate: new RFCDate("2022-06-05"),
  id: "c9c3f567-e0e2-4527-a5b1-d62fcdace1f0",
  last: 124460,
  page: 139967,
  pageSize: 80673,
  startDate: new RFCDate("2022-03-15"),
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

sdk.tests.listTestWithExecutions({
  page: 162171,
  pageSize: 133360,
  selector: "sequi",
  status: ExecutionStatus.Failed,
  textSearch: "accusamus",
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

sdk.tests.listTests({
  selector: "deleniti",
  textSearch: "earum",
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
      data: "consequuntur",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "minus",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "quibusdam",
        tokenSecret: {
          key: "accusantium",
          name: "Dennis Moen",
          namespace: "nostrum",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Kira23",
        usernameSecret: {
          key: "natus",
          name: "Jacob Marvin",
          namespace: "commodi",
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
        "temporibus",
        "error",
        "quaerat",
      ],
      argsMode: ExecutionRequestArgsMode.Override,
      artifactRequest: {
        dirs: [
          "deserunt",
          "laborum",
        ],
        storageClassName: "artifact-volume-local",
        volumeMountPath: "odit",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "consequuntur",
        "magnam",
        "et",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      cronJobTemplate: "et",
      envConfigMaps: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "nisi",
          reference: {
            name: "Dr. Dean Smitham",
          },
        },
      ],
      envSecrets: [
        {
          mapToVariables: false,
          mount: true,
          mountPath: "excepturi",
          reference: {
            name: "Jerald Schowalter",
          },
        },
        {
          mapToVariables: false,
          mount: true,
          mountPath: "veniam",
          reference: {
            name: "Ms. Leslie Daniel",
          },
        },
      ],
      envs: {
        "molestias": "quam",
      },
      executionLabels: {
        "aliquid": "voluptate",
        "eum": "consectetur",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {
          name: "Judy Hane I",
        },
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      jobTemplate: "atque",
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      number: 734296,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        context: "asperiores",
        type: RunningContextType.Testtrigger,
      },
      scraperTemplate: "minima",
      secretEnvs: {
        "molestiae": "et",
        "accusamus": "excepturi",
        "deleniti": "inventore",
      },
      sync: false,
      testSuiteName: "test-suite1",
      uploads: [
        "perferendis",
        "corporis",
        "ullam",
      ],
      variables: {
        "adipisci": {
          configMapRef: {
            key: "totam",
            name: "Benny Ward",
            namespace: "id",
          },
          name: "Harvey Wiegand",
          secretRef: {
            key: "dolor",
            name: "Dustin Mills",
            namespace: "vel",
          },
          type: VariableType.Basic,
          value: "soluta",
        },
        "minus": {
          configMapRef: {
            key: "magni",
            name: "Erick Haag III",
            namespace: "dolorem",
          },
          name: "Luz Morar",
          secretRef: {
            key: "tempora",
            name: "Elmer Wolf",
            namespace: "explicabo",
          },
          type: VariableType.Basic,
          value: "eum",
        },
      },
      variablesFile: "nesciunt",
    },
    labels: {
      "molestias": "atque",
      "explicabo": "totam",
    },
    name: "test1",
    namespace: "testkube",
    schedule: "* * * * *",
    source: "my-private-repository-test",
    status: {
      latestExecution: {
        endTime: new Date("2022-08-19T18:42:50.651Z"),
        id: "62f395e004109209b50edfc4",
        number: 1,
        startTime: new Date("2022-03-28T14:27:11.995Z"),
        status: ExecutionStatus.Aborted,
      },
    },
    type: "postman/collection",
    uploads: [
      "alias",
    ],
  },
  id: "006bef49-21ec-4205-bb74-9366ac8ee0f2",
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

sdk.tests.updateTestString({
  requestBody: "libero",
  id: "f19588d4-0d03-4f3d-aba2-97be3e90bc40",
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

