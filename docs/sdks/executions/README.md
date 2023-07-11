# executions

## Overview

Test suites and tests execution operations

### Available Operations

* [abortExecution](#abortexecution) - Aborts execution
* [abortTestSuiteExecution](#aborttestsuiteexecution) - Aborts testsuite execution
* [abortTestSuiteExecutionByID](#aborttestsuiteexecutionbyid) - Aborts testsuite execution
* [downloadArchive](#downloadarchive) - Download artifact archive
* [downloadFile](#downloadfile) - Download artifact
* [executeTest](#executetest) - Starts new test execution
* [executeTestSuite](#executetestsuite) - Starts new test suite execution
* [executeTestSuites](#executetestsuites) - Starts new test suite executions
* [executeTests](#executetests) - Starts new test executions
* [getExecutionArtifacts](#getexecutionartifacts) - Get execution's artifacts by ID
* [getExecutionByID](#getexecutionbyid) - Get test execution by ID
* [getExecutionLogs](#getexecutionlogs) - Get execution's logs by ID
* [getTestExecution](#gettestexecution) - Get test execution
* [getTestSuiteExecution](#gettestsuiteexecution) - Get test suite execution
* [getTestSuiteExecutionArtifacts](#gettestsuiteexecutionartifacts) - Get test suite execution artifacts
* [getTestSuiteExecutionArtifactsByTestsuite](#gettestsuiteexecutionartifactsbytestsuite) - Get test suite execution artifacts
* [getTestSuiteExecutionByID](#gettestsuiteexecutionbyid) - Get test suite execution by ID
* [listAllTestSuiteExecutions](#listalltestsuiteexecutions) - Get all test suite executions
* [listExecutions](#listexecutions) - Get all test executions
* [listTestExecutions](#listtestexecutions) - Get all test executions
* [listTestSuiteExecutions](#listtestsuiteexecutions) - Get all test suite executions
* [uploads](#uploads) - Upload file

## abortExecution

Aborts execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.abortExecution({
  executionID: "perferendis",
  id: "87875614-3f5a-46c9-8b55-554080d40bca",
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


## abortTestSuiteExecution

Aborts testsuite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.abortTestSuiteExecution({
  executionID: "porro",
  id: "c6cbd6b5-f3ec-4909-b04f-926bad255381",
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

sdk.executions.abortTestSuiteExecutionByID({
  executionID: "error",
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


## downloadArchive

Download the artifact archive from the given execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DownloadArchiveResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.downloadArchive({
  id: "b474b0ed-20e5-4624-8fff-639a910abdca",
  mask: "tempore",
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

sdk.executions.downloadFile({
  filename: "commodi",
  id: "2676696e-1ec0-4022-9b33-5d89acb3ecfd",
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

sdk.executions.executeTest({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "atque",
      "quibusdam",
      "sit",
    ],
    argsMode: ExecutionRequestArgsMode.Override,
    artifactRequest: {
      dirs: [
        "aliquam",
        "provident",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "vero",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "doloremque",
      "ipsum",
      "alias",
      "doloremque",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "tempora",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "quam",
        reference: {
          name: "Dr. Luke Jaskolski",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "veritatis",
        reference: {
          name: "Ms. Darnell Denesik",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "totam",
        reference: {
          name: "Jared Koepp DVM",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "quod",
        reference: {
          name: "Debra Schultz",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "ab",
        reference: {
          name: "Kim Wunsch",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "sequi",
        reference: {
          name: "Ken Bahringer",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "nihil",
        reference: {
          name: "Darrin Flatley",
        },
      },
    ],
    envs: {
      "illum": "at",
      "tenetur": "molestias",
      "ipsam": "esse",
      "laborum": "perspiciatis",
    },
    executionLabels: {
      "eum": "quasi",
      "quas": "odio",
      "commodi": "porro",
      "aliquid": "mollitia",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Frances Stokes",
      },
      {
        name: "Darnell Russel",
      },
      {
        name: "Hector Yundt",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "facere",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 491380,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "iste",
      type: RunningContextType.Testsuite,
    },
    scraperTemplate: "dolor",
    secretEnvs: {
      "aperiam": "eaque",
      "eum": "laboriosam",
      "laborum": "autem",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "explicabo",
      "fugiat",
      "doloremque",
      "voluptatem",
    ],
    variables: {
      "velit": {
        configMapRef: {
          key: "ullam",
          name: "Thelma Dickens",
          namespace: "recusandae",
        },
        name: "Brian Larson",
        secretRef: {
          key: "est",
          name: "Christine Tromp III",
          namespace: "consequuntur",
        },
        type: VariableType.Secret,
        value: "quidem",
      },
    },
    variablesFile: "non",
  },
  id: "119167b8-e3c8-4db0-b408-d6d364ffd455",
  namespace: "perspiciatis",
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

sdk.executions.executeTestSuite({
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
    cronJobTemplate: "alias",
    executionLabels: {
      "quibusdam": "dicta",
      "quia": "commodi",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "quibusdam": "numquam",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "rem",
      type: RunningContextType.Scheduler,
    },
    sync: false,
    timeout: 1,
    variables: {
      "neque": {
        configMapRef: {
          key: "corporis",
          name: "Todd Schowalter",
          namespace: "quos",
        },
        name: "Miss Jeannie Emmerich",
        secretRef: {
          key: "sequi",
          name: "Leroy Fisher Sr.",
          namespace: "illum",
        },
        type: VariableType.Basic,
        value: "magni",
      },
      "beatae": {
        configMapRef: {
          key: "aliquid",
          name: "Colleen Kautzer III",
          namespace: "laboriosam",
        },
        name: "Ann Leffler PhD",
        secretRef: {
          key: "provident",
          name: "Aaron Bode",
          namespace: "deserunt",
        },
        type: VariableType.Secret,
        value: "consequatur",
      },
      "adipisci": {
        configMapRef: {
          key: "doloremque",
          name: "Don Toy",
          namespace: "et",
        },
        name: "Alberta Altenwerth",
        secretRef: {
          key: "iure",
          name: "Mrs. Julia Morissette",
          namespace: "facilis",
        },
        type: VariableType.Secret,
        value: "ullam",
      },
    },
  },
  id: "02a55e7f-73bc-4845-a320-a319f4badf94",
  last: 476801,
  namespace: "impedit",
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

sdk.executions.executeTestSuites({
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
    cronJobTemplate: "error",
    executionLabels: {
      "voluptatum": "aliquid",
      "nihil": "facilis",
      "optio": "incidunt",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    labels: {
      "magnam": "dolores",
    },
    name: "testing with 1000 users",
    namespace: "testkube",
    number: 1,
    runningContext: {
      context: "aliquid",
      type: RunningContextType.Testsuite,
    },
    sync: false,
    timeout: 1,
    variables: {
      "ad": {
        configMapRef: {
          key: "quos",
          name: "Laurie Sporer",
          namespace: "culpa",
        },
        name: "Pat Wuckert DVM",
        secretRef: {
          key: "cumque",
          name: "Edwin Runte",
          namespace: "ipsum",
        },
        type: VariableType.Secret,
        value: "quisquam",
      },
      "quasi": {
        configMapRef: {
          key: "fugit",
          name: "Marty O'Hara",
          namespace: "ipsa",
        },
        name: "Clark Kohler",
        secretRef: {
          key: "saepe",
          name: "Robin Strosin PhD",
          namespace: "tenetur",
        },
        type: VariableType.Basic,
        value: "numquam",
      },
    },
  },
  concurrency: 546950,
  namespace: "similique",
  selector: "dolore",
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

sdk.executions.executeTests({
  executionRequestInput: {
    activeDeadlineSeconds: 1,
    args: [
      "reiciendis",
      "iste",
    ],
    argsMode: ExecutionRequestArgsMode.Append,
    artifactRequest: {
      dirs: [
        "aut",
        "impedit",
        "minima",
      ],
      storageClassName: "artifact-volume-local",
      volumeMountPath: "quos",
    },
    bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
    command: [
      "quas",
      "voluptatem",
      "provident",
    ],
    contentRequest: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        workingDir: "/",
      },
    },
    cronJobTemplate: "quas",
    envConfigMaps: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "vero",
        reference: {
          name: "Cesar Wunsch",
        },
      },
    ],
    envSecrets: [
      {
        mapToVariables: false,
        mount: true,
        mountPath: "consectetur",
        reference: {
          name: "Jan Senger",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "delectus",
        reference: {
          name: "Camille Ankunding",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "similique",
        reference: {
          name: "Edwin Schumm",
        },
      },
      {
        mapToVariables: false,
        mount: true,
        mountPath: "in",
        reference: {
          name: "Ellen Sawayn",
        },
      },
    ],
    envs: {
      "reiciendis": "labore",
    },
    executionLabels: {
      "eos": "quas",
      "quasi": "architecto",
      "praesentium": "iusto",
      "fugiat": "enim",
    },
    httpProxy: "user:pass@my.proxy.server:8080",
    httpsProxy: "user:pass@my.proxy.server:8081",
    id: "62f395e004109209b50edfc1",
    image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
    imagePullSecrets: [
      {
        name: "Joel Gutkowski",
      },
      {
        name: "Ellis Lakin",
      },
    ],
    isNegativeTestChangedOnRun: false,
    isVariablesFileUploaded: false,
    jobTemplate: "unde",
    name: "testing with 1000 users",
    namespace: "testkube",
    negativeTest: false,
    number: 61498,
    postRunScript: "sleep 30",
    preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
    runningContext: {
      context: "eum",
      type: RunningContextType.UserUI,
    },
    scraperTemplate: "eveniet",
    secretEnvs: {
      "ratione": "blanditiis",
      "quidem": "illum",
    },
    sync: false,
    testSuiteName: "test-suite1",
    uploads: [
      "placeat",
      "dolores",
      "consequatur",
      "nesciunt",
    ],
    variables: {
      "quidem": {
        configMapRef: {
          key: "voluptas",
          name: "Dwight Kulas",
          namespace: "fugit",
        },
        name: "Melody Kreiger I",
        secretRef: {
          key: "ad",
          name: "Mario Zboncak",
          namespace: "itaque",
        },
        type: VariableType.Basic,
        value: "eos",
      },
    },
    variablesFile: "impedit",
  },
  concurrency: 401388,
  executionSelector: "praesentium",
  namespace: "natus",
  selector: "vitae",
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


## getExecutionArtifacts

Returns artifacts of the given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionArtifactsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.getExecutionArtifacts({
  id: "f82ce115-7172-4305-b77d-cfa89df975e3",
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

sdk.executions.getExecutionByID({
  executionID: "quis",
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

sdk.executions.getExecutionLogs({
  id: "6686092e-9c3d-4dc5-b111-dea1026d541a",
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

sdk.executions.getTestExecution({
  executionID: "quaerat",
  id: "d190feb2-1780-4bcc-80db-bddb484708fb",
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

sdk.executions.getTestSuiteExecution({
  executionID: "aliquam",
  id: "e391e6bc-158c-44c4-a545-99ea342260e9",
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

sdk.executions.getTestSuiteExecutionArtifacts({
  executionID: "nobis",
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

sdk.executions.getTestSuiteExecutionArtifactsByTestsuite({
  executionID: "qui",
  id: "00ce78a1-bd8f-4b7a-8a11-6ce723d4097f",
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

sdk.executions.getTestSuiteExecutionByID({
  executionID: "deserunt",
  last: 188081,
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


## listAllTestSuiteExecutions

Returns array of test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListAllTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus, TestSuiteExecutionStatus, TestSuiteStepType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.executions.listAllTestSuiteExecutions({
  endDate: new RFCDate("2022-02-08"),
  last: 614763,
  page: 646776,
  pageSize: 944405,
  selector: "ducimus",
  startDate: new RFCDate("2022-08-18"),
  status: TestSuiteExecutionStatus.Aborted,
  test: "quia",
  textSearch: "omnis",
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

sdk.executions.listExecutions({
  endDate: new RFCDate("2022-10-25"),
  page: 130934,
  pageSize: 6203,
  selector: "amet",
  startDate: new RFCDate("2022-02-23"),
  status: ExecutionStatus.Failed,
  test: "velit",
  textSearch: "hic",
  type: "ullam",
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


## listTestExecutions

Returns array of all available test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus, RunningContextType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.executions.listTestExecutions({
  endDate: new RFCDate("2021-02-19"),
  id: "b7799d22-e8c1-4f84-9382-5fdc42c876c2",
  last: 791538,
  page: 162073,
  pageSize: 820900,
  startDate: new RFCDate("2020-12-05"),
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


## listTestSuiteExecutions

Returns array of all available test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus, TestSuiteExecutionStatus, TestSuiteStepType } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.executions.listTestSuiteExecutions({
  endDate: new RFCDate("2020-03-06"),
  id: "c1c76230-f841-4fb1-bd23-fdb14db6be5a",
  page: 375588,
  pageSize: 516363,
  startDate: new RFCDate("2022-06-07"),
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


## uploads

Upload file to be used in executions and tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UploadsRequestBodyParentType, UploadsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.uploads({
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

