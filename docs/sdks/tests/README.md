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

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.abortExecution({
    executionID: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AbortExecutionRequest](../../sdk/models/operations/abortexecutionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AbortExecutionResponse](../../sdk/models/operations/abortexecutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## abortTestExecutions

Abort all test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.abortTestExecutions({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.AbortTestExecutionsRequest](../../sdk/models/operations/aborttestexecutionsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.AbortTestExecutionsResponse](../../sdk/models/operations/aborttestexecutionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestJson

Create new test based on file content, uri or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import {
  AuthType,
  ExecutionRequestArgsMode,
  ExecutionStatus,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.createTestJson({
    content: {
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        tokenSecret: {
          key: "<key>",
          name: "string",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        usernameSecret: {
          key: "<key>",
          name: "string",
        },
        workingDir: "/",
      },
      uri: "https://github.com/kubeshop/testkube",
    },
    created: new Date("2022-07-30T06:54:15Z"),
    executionRequest: {
      activeDeadlineSeconds: 1,
      args: [
        "--repeats",
        "5",
        "--insecure",
      ],
      artifactRequest: {
        dirs: [
          "string",
        ],
        storageClassName: "artifact-volume-local",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "curl",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      envConfigMaps: [
        {
          mount: true,
          reference: {},
        },
      ],
      envSecrets: [
        {
          mount: true,
          reference: {},
        },
      ],
      envs: {
        "record": "true",
        "prefix": "some-",
      },
      executionLabels: {
        "users": "3",
        "prefix": "some-",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {},
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        type: RunningContextType.UserUI,
      },
      secretEnvs: {
        "secret_key_name1": "secret-name",
        "secret_Key_name2": "secret-name",
      },
      testSuiteName: "test-suite1",
      uploads: [
        "settings/config.txt",
      ],
      variables: {
        "var1": {
          configMapRef: {
            key: "<key>",
            name: "string",
          },
          secretRef: {
            key: "<key>",
            name: "string",
          },
        },
        "secret1": {
          configMapRef: {
            key: "<key>",
            name: "string",
          },
          secretRef: {
            key: "<key>",
            name: "string",
          },
        },
      },
    },
    labels: {
      "env": "prod",
      "app": "backend",
    },
    name: "test1",
    namespace: "testkube",
    schedule: "* * * * *",
    source: "my-private-repository-test",
    status: {
      latestExecution: {
        id: "62f395e004109209b50edfc4",
        number: 1,
      },
    },
    type: "postman/collection",
    uploads: [
      "settings/config.txt",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.TestUpsertRequest](../../sdk/models/shared/testupsertrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateTestJsonResponse](../../sdk/models/operations/createtestjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestString

Create new test based on file content, uri or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.createTestString("string");

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [string](../../models/.md)                                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTestStringResponse](../../sdk/models/operations/createteststringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTest

Deletes a test

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.deleteTest({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteTestRequest](../../sdk/models/operations/deletetestrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteTestResponse](../../sdk/models/operations/deletetestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTests

Deletes all or labeled tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.deleteTests({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteTestsRequest](../../sdk/models/operations/deletetestsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteTestsResponse](../../sdk/models/operations/deletetestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## executeTest

New test execution returns new execution details on successful execution start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecutionRequestArgsMode, RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.executeTest({
    executionRequest: {
      activeDeadlineSeconds: 1,
      args: [
        "--repeats",
        "5",
        "--insecure",
      ],
      artifactRequest: {
        dirs: [
          "string",
        ],
        storageClassName: "artifact-volume-local",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "curl",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      envConfigMaps: [
        {
          mount: true,
          reference: {},
        },
      ],
      envSecrets: [
        {
          mount: true,
          reference: {},
        },
      ],
      envs: {
        "record": "true",
        "prefix": "some-",
      },
      executionLabels: {
        "users": "3",
        "prefix": "some-",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {},
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        type: RunningContextType.Testsuite,
      },
      secretEnvs: {
        "secret_key_name1": "secret-name",
        "secret_Key_name2": "secret-name",
      },
      testSuiteName: "test-suite1",
      uploads: [
        "settings/config.txt",
      ],
      variables: {
        "var1": {
          configMapRef: {
            key: "<key>",
            name: "string",
          },
          secretRef: {
            key: "<key>",
            name: "string",
          },
        },
        "secret1": {
          configMapRef: {
            key: "<key>",
            name: "string",
          },
          secretRef: {
            key: "<key>",
            name: "string",
          },
        },
      },
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ExecuteTestRequest](../../sdk/models/operations/executetestrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ExecuteTestResponse](../../sdk/models/operations/executetestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## executeTests

New test executions returns new executions details on successful executions start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecutionRequestArgsMode, RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.executeTests({
    executionRequest: {
      activeDeadlineSeconds: 1,
      args: [
        "--repeats",
        "5",
        "--insecure",
      ],
      artifactRequest: {
        dirs: [
          "string",
        ],
        storageClassName: "artifact-volume-local",
      },
      bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
      command: [
        "curl",
      ],
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      envConfigMaps: [
        {
          mount: true,
          reference: {},
        },
      ],
      envSecrets: [
        {
          mount: true,
          reference: {},
        },
      ],
      envs: {
        "record": "true",
        "prefix": "some-",
      },
      executionLabels: {
        "users": "3",
        "prefix": "some-",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      id: "62f395e004109209b50edfc1",
      image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
      imagePullSecrets: [
        {},
      ],
      isNegativeTestChangedOnRun: false,
      isVariablesFileUploaded: false,
      name: "testing with 1000 users",
      namespace: "testkube",
      negativeTest: false,
      postRunScript: "sleep 30",
      preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
      runningContext: {
        type: RunningContextType.Scheduler,
      },
      secretEnvs: {
        "secret_key_name1": "secret-name",
        "secret_Key_name2": "secret-name",
      },
      testSuiteName: "test-suite1",
      uploads: [
        "settings/config.txt",
      ],
      variables: {
        "var1": {
          configMapRef: {
            key: "<key>",
            name: "string",
          },
          secretRef: {
            key: "<key>",
            name: "string",
          },
        },
        "secret1": {
          configMapRef: {
            key: "<key>",
            name: "string",
          },
          secretRef: {
            key: "<key>",
            name: "string",
          },
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ExecuteTestsRequest](../../sdk/models/operations/executetestsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ExecuteTestsResponse](../../sdk/models/operations/executetestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTest

Gets the specified test

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.getTest({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetTestRequest](../../sdk/models/operations/gettestrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetTestResponse](../../sdk/models/operations/gettestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestExecution

Returns execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.getTestExecution({
    executionID: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTestExecutionRequest](../../sdk/models/operations/gettestexecutionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTestExecutionResponse](../../sdk/models/operations/gettestexecutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestMetrics

Gets test metrics for given tests executions, with particular execution status and timings

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.getTestMetrics({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetTestMetricsRequest](../../sdk/models/operations/gettestmetricsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetTestMetricsResponse](../../sdk/models/operations/gettestmetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSuiteMetrics

Gets test suite metrics for given tests executions, with particular execution status and timings

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.getTestSuiteMetrics({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetTestSuiteMetricsRequest](../../sdk/models/operations/gettestsuitemetricsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetTestSuiteMetricsResponse](../../sdk/models/operations/gettestsuitemetricsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestWithExecution

Gets the specified test with execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.getTestWithExecution({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTestWithExecutionRequest](../../sdk/models/operations/gettestwithexecutionrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTestWithExecutionResponse](../../sdk/models/operations/gettestwithexecutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestExecutions

Returns array of all available test executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.listTestExecutions({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListTestExecutionsRequest](../../sdk/models/operations/listtestexecutionsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListTestExecutionsResponse](../../sdk/models/operations/listtestexecutionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestWithExecutions

List available test with executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.listTestWithExecutions({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListTestWithExecutionsRequest](../../sdk/models/operations/listtestwithexecutionsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListTestWithExecutionsResponse](../../sdk/models/operations/listtestwithexecutionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTests

List available tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.listTests({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListTestsRequest](../../sdk/models/operations/listtestsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListTestsResponse](../../sdk/models/operations/listtestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestJson

Update test based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import {
  AuthType,
  ExecutionRequestArgsMode,
  ExecutionStatus,
  RepositoryType,
  RunningContextType,
  TestContentType,
  VariableType,
} from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.updateTestJson({
    testUpdateRequest: {
      content: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          tokenSecret: {
            key: "<key>",
            name: "string",
          },
          type: RepositoryType.Git,
          uri: "https://github.com/kubeshop/testkube",
          usernameSecret: {
            key: "<key>",
            name: "string",
          },
          workingDir: "/",
        },
        uri: "https://github.com/kubeshop/testkube",
      },
      created: new Date("2022-07-30T06:54:15Z"),
      executionRequest: {
        activeDeadlineSeconds: 1,
        args: [
          "--repeats",
          "5",
          "--insecure",
        ],
        artifactRequest: {
          dirs: [
            "string",
          ],
          storageClassName: "artifact-volume-local",
        },
        bucketName: "execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43",
        command: [
          "curl",
        ],
        contentRequest: {
          repository: {
            branch: "main",
            commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
            path: "test/perf",
            workingDir: "/",
          },
        },
        envConfigMaps: [
          {
            mount: true,
            reference: {},
          },
        ],
        envSecrets: [
          {
            mount: true,
            reference: {},
          },
        ],
        envs: {
          "record": "true",
          "prefix": "some-",
        },
        executionLabels: {
          "users": "3",
          "prefix": "some-",
        },
        httpProxy: "user:pass@my.proxy.server:8080",
        httpsProxy: "user:pass@my.proxy.server:8081",
        id: "62f395e004109209b50edfc1",
        image: "kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91",
        imagePullSecrets: [
          {},
        ],
        isNegativeTestChangedOnRun: false,
        isVariablesFileUploaded: false,
        name: "testing with 1000 users",
        namespace: "testkube",
        negativeTest: false,
        postRunScript: "sleep 30",
        preRunScript: "echo -n '$SECRET_ENV' > ./secret_file",
        runningContext: {
          type: RunningContextType.UserCLI,
        },
        secretEnvs: {
          "secret_key_name1": "secret-name",
          "secret_Key_name2": "secret-name",
        },
        testSuiteName: "test-suite1",
        uploads: [
          "settings/config.txt",
        ],
        variables: {
          "var1": {
            configMapRef: {
              key: "<key>",
              name: "string",
            },
            secretRef: {
              key: "<key>",
              name: "string",
            },
          },
          "secret1": {
            configMapRef: {
              key: "<key>",
              name: "string",
            },
            secretRef: {
              key: "<key>",
              name: "string",
            },
          },
        },
      },
      labels: {
        "env": "prod",
        "app": "backend",
      },
      name: "test1",
      namespace: "testkube",
      schedule: "* * * * *",
      source: "my-private-repository-test",
      status: {
        latestExecution: {
          id: "62f395e004109209b50edfc4",
          number: 1,
        },
      },
      type: "postman/collection",
      uploads: [
        "settings/config.txt",
      ],
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateTestJsonRequest](../../sdk/models/operations/updatetestjsonrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateTestJsonResponse](../../sdk/models/operations/updatetestjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestString

Update test based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.updateTestString({
    requestBody: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateTestStringRequest](../../sdk/models/operations/updateteststringrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateTestStringResponse](../../sdk/models/operations/updateteststringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## uploads

Upload file to be used in executions and tests

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ParentType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.tests.uploads({
    filePath: "folder/file.txt",
    parentName: "test-1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.UploadsBody](../../sdk/models/shared/uploadsbody.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UploadsResponse](../../sdk/models/operations/uploadsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
