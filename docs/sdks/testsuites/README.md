# TestSuites
(*testSuites*)

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

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.abortTestSuiteExecution({
    executionID: "string",
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
| `request`                                                                                                  | [operations.AbortTestSuiteExecutionRequest](../../sdk/models/operations/aborttestsuiteexecutionrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.AbortTestSuiteExecutionResponse](../../sdk/models/operations/aborttestsuiteexecutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## abortTestSuiteExecutions

Abort all test executions of a test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.abortTestSuiteExecutions({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.AbortTestSuiteExecutionsRequest](../../sdk/models/operations/aborttestsuiteexecutionsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.AbortTestSuiteExecutionsResponse](../../sdk/models/operations/aborttestsuiteexecutionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestSuiteJson

Create new test suite action

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.createTestSuiteJson({
    after: [
      {
        execute: [
          {
            delay: "1s",
            test: "name",
          },
        ],
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
      },
    ],
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
      executionLabels: {
        "users": "3",
        "prefix": "some-",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      labels: {
        "users": "3",
        "prefix": "some-",
      },
      name: "testing with 1000 users",
      namespace: "testkube",
      number: 1,
      runningContext: {
        type: RunningContextType.Testsuite,
      },
      timeout: 1,
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
    name: "name",
    namespace: "testkube",
    repeats: 1,
    schedule: "* * * * *",
    status: {
      latestExecution: {
        id: "62f395e004109209b50edfc4",
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
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.TestSuiteUpsertRequest](../../sdk/models/shared/testsuiteupsertrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateTestSuiteJsonResponse](../../sdk/models/operations/createtestsuitejsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestSuiteString

Create new test suite action

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.createTestSuiteString("string");

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

**Promise<[operations.CreateTestSuiteStringResponse](../../sdk/models/operations/createtestsuitestringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTestSuite

Deletes a test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.deleteTestSuite({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteTestSuiteRequest](../../sdk/models/operations/deletetestsuiterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteTestSuiteResponse](../../sdk/models/operations/deletetestsuiteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTestSuites

Deletes all or labeled test suites

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.deleteTestSuites({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteTestSuitesRequest](../../sdk/models/operations/deletetestsuitesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteTestSuitesResponse](../../sdk/models/operations/deletetestsuitesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## executeTestSuite

New test suite execution returns new execution details on successful execution start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.executeTestSuite({
    testSuiteExecutionRequest: {
      concurrencyLevel: 10,
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      executionLabels: {
        "prefix": "some-",
        "users": "3",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      labels: {
        "users": "3",
        "prefix": "some-",
      },
      name: "testing with 1000 users",
      namespace: "testkube",
      number: 1,
      runningContext: {
        type: RunningContextType.Testtrigger,
      },
      timeout: 1,
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
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ExecuteTestSuiteRequest](../../sdk/models/operations/executetestsuiterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ExecuteTestSuiteResponse](../../sdk/models/operations/executetestsuiteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## executeTestSuites

New test suite executions returns new executions details on successful executions start

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { RunningContextType, VariableType } from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.executeTestSuites({
    testSuiteExecutionRequest: {
      concurrencyLevel: 10,
      contentRequest: {
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          workingDir: "/",
        },
      },
      executionLabels: {
        "users": "3",
        "prefix": "some-",
      },
      httpProxy: "user:pass@my.proxy.server:8080",
      httpsProxy: "user:pass@my.proxy.server:8081",
      labels: {
        "users": "3",
        "prefix": "some-",
      },
      name: "testing with 1000 users",
      namespace: "testkube",
      number: 1,
      runningContext: {
        type: RunningContextType.UserUI,
      },
      timeout: 1,
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
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ExecuteTestSuitesRequest](../../sdk/models/operations/executetestsuitesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ExecuteTestSuitesResponse](../../sdk/models/operations/executetestsuitesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSuiteByID

Returns test suite with given name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.getTestSuiteByID({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTestSuiteByIDRequest](../../sdk/models/operations/gettestsuitebyidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTestSuiteByIDResponse](../../sdk/models/operations/gettestsuitebyidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSuiteByIDWithExecution

Returns test suite with given name with execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.getTestSuiteByIDWithExecution({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetTestSuiteByIDWithExecutionRequest](../../sdk/models/operations/gettestsuitebyidwithexecutionrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetTestSuiteByIDWithExecutionResponse](../../sdk/models/operations/gettestsuitebyidwithexecutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSuiteExecution

Returns test suite execution with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.getTestSuiteExecution({
    executionID: "string",
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
| `request`                                                                                              | [operations.GetTestSuiteExecutionRequest](../../sdk/models/operations/gettestsuiteexecutionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTestSuiteExecutionResponse](../../sdk/models/operations/gettestsuiteexecutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSuiteExecutionArtifacts

Returns test suite execution artifacts with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.getTestSuiteExecutionArtifacts({
    executionID: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetTestSuiteExecutionArtifactsRequest](../../sdk/models/operations/gettestsuiteexecutionartifactsrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetTestSuiteExecutionArtifactsResponse](../../sdk/models/operations/gettestsuiteexecutionartifactsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSuiteExecutionArtifactsByTestsuite

Returns test suite execution artifacts with given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.getTestSuiteExecutionArtifactsByTestsuite({
    executionID: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.GetTestSuiteExecutionArtifactsByTestsuiteRequest](../../sdk/models/operations/gettestsuiteexecutionartifactsbytestsuiterequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.GetTestSuiteExecutionArtifactsByTestsuiteResponse](../../sdk/models/operations/gettestsuiteexecutionartifactsbytestsuiteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestSuiteExecutions

Returns array of all available test suite executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";
import { RFCDate } from "testkube-sdk/dist/sdk/types";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.listTestSuiteExecutions({
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
| `request`                                                                                                  | [operations.ListTestSuiteExecutionsRequest](../../sdk/models/operations/listtestsuiteexecutionsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListTestSuiteExecutionsResponse](../../sdk/models/operations/listtestsuiteexecutionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestSuiteTests

List available tests for test suite

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.listTestSuiteTests({
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
| `request`                                                                                        | [operations.ListTestSuiteTestsRequest](../../sdk/models/operations/listtestsuitetestsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListTestSuiteTestsResponse](../../sdk/models/operations/listtestsuitetestsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestSuiteWithExecutions

Returns array of test suite with executions

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { TestSuiteExecutionStatus } from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.listTestSuiteWithExecutions({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ListTestSuiteWithExecutionsRequest](../../sdk/models/operations/listtestsuitewithexecutionsrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ListTestSuiteWithExecutionsResponse](../../sdk/models/operations/listtestsuitewithexecutionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestSuites

Returns array of test suites

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.listTestSuites({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListTestSuitesRequest](../../sdk/models/operations/listtestsuitesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListTestSuitesResponse](../../sdk/models/operations/listtestsuitesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestSuiteJson

Update test based on test suite content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { RunningContextType, TestSuiteExecutionStatus, VariableType } from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.updateTestSuiteJson({
    testSuiteUpdateRequest: {
      after: [
        {
          execute: [
            {
              delay: "1s",
              test: "name",
            },
          ],
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
        },
      ],
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
        executionLabels: {
          "users": "3",
          "prefix": "some-",
        },
        httpProxy: "user:pass@my.proxy.server:8080",
        httpsProxy: "user:pass@my.proxy.server:8081",
        labels: {
          "users": "3",
          "prefix": "some-",
        },
        name: "testing with 1000 users",
        namespace: "testkube",
        number: 1,
        runningContext: {
          type: RunningContextType.UserCLI,
        },
        timeout: 1,
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
      name: "name",
      namespace: "testkube",
      repeats: 1,
      schedule: "* * * * *",
      status: {
        latestExecution: {
          id: "62f395e004109209b50edfc4",
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
        },
      ],
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateTestSuiteJsonRequest](../../sdk/models/operations/updatetestsuitejsonrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateTestSuiteJsonResponse](../../sdk/models/operations/updatetestsuitejsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestSuiteString

Update test based on test suite content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSuites.updateTestSuiteString({
    requestBody: "string",
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
| `request`                                                                                              | [operations.UpdateTestSuiteStringRequest](../../sdk/models/operations/updatetestsuitestringrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateTestSuiteStringResponse](../../sdk/models/operations/updatetestsuitestringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
