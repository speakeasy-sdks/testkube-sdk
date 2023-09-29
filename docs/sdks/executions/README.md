# Executions
(*executions*)

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


## abortTestSuiteExecution

Aborts testsuite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortTestSuiteExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.abortTestSuiteExecution({
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

sdk.executions.abortTestSuiteExecutionByID({
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


## downloadArchive

Download the artifact archive from the given execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DownloadArchiveResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.downloadArchive({
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

sdk.executions.downloadFile({
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

sdk.executions.executeTest({
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

sdk.executions.executeTests({
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


## getExecutionArtifacts

Returns artifacts of the given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionArtifactsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.getExecutionArtifacts({
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

sdk.executions.getExecutionByID({
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

sdk.executions.getExecutionLogs({
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


## getTestExecution

Returns execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.getTestExecution({
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


## getTestSuiteExecution

Returns test suite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSuiteExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executions.getTestSuiteExecution({
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

sdk.executions.getTestSuiteExecutionArtifacts({
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

sdk.executions.getTestSuiteExecutionArtifactsByTestsuite({
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

sdk.executions.getTestSuiteExecutionByID({
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


## listAllTestSuiteExecutions

Returns array of test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListAllTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.executions.listAllTestSuiteExecutions({
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

sdk.executions.listExecutions({
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


## listTestExecutions

Returns array of all available test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.executions.listTestExecutions({
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


## listTestSuiteExecutions

Returns array of all available test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSuiteExecutionsResponse } from "testkube-sdk/dist/sdk/models/operations";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

const sdk = new TestkubeSDK();

sdk.executions.listTestSuiteExecutions({
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

