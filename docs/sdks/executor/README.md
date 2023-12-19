# Executor
(*executor*)

## Overview

Executor operations

### Available Operations

* [createExecutorJson](#createexecutorjson) - Create new executor
* [createExecutorString](#createexecutorstring) - Create new executor
* [deleteExecutor](#deleteexecutor) - Delete executor
* [deleteExecutors](#deleteexecutors) - Delete executors
* [getExecutor](#getexecutor) - Get executor details
* [listExecutors](#listexecutors) - List executors
* [updateExecutorJson](#updateexecutorjson) - Update executor
* [updateExecutorString](#updateexecutorstring) - Update executor

## createExecutorJson

Create new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecutorUpsertRequestFeatures } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.createExecutorJson({
    args: [
      "--repeats",
      "5",
      "--insecure",
    ],
    command: [
      "curl",
    ],
    contentTypes: [
      "string",
    ],
    features: [
      ExecutorUpsertRequestFeatures.JunitReport,
    ],
    imagePullSecrets: [
      {},
    ],
    labels: {
      "env": "prod",
      "app": "backend",
    },
    meta: {
      docsURI: "https://docs.testkube.io/test-types/executor-k6",
      iconURI: "/assets/k6.jpg",
      tooltips: {
        "general": "please provide k6 test script for execution",
      },
    },
    name: "name",
    namespace: "testkube",
    types: [
      "string",
    ],
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
| `request`                                                                        | [shared.ExecutorUpsertRequest](../../sdk/models/shared/executorupsertrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateExecutorJsonResponse](../../sdk/models/operations/createexecutorjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createExecutorString

Create new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.createExecutorString("string");

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

**Promise<[operations.CreateExecutorStringResponse](../../sdk/models/operations/createexecutorstringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteExecutor

Deletes executor by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.deleteExecutor({
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
| `request`                                                                                | [operations.DeleteExecutorRequest](../../sdk/models/operations/deleteexecutorrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteExecutorResponse](../../sdk/models/operations/deleteexecutorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## deleteExecutors

Deletes labeled executors

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.deleteExecutors({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteExecutorsRequest](../../sdk/models/operations/deleteexecutorsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteExecutorsResponse](../../sdk/models/operations/deleteexecutorsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getExecutor

Returns executors data with executions passed to executor

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.getExecutor({
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
| `request`                                                                          | [operations.GetExecutorRequest](../../sdk/models/operations/getexecutorrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetExecutorResponse](../../sdk/models/operations/getexecutorresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listExecutors

List executors available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.listExecutors({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListExecutorsRequest](../../sdk/models/operations/listexecutorsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListExecutorsResponse](../../sdk/models/operations/listexecutorsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateExecutorJson

Update new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ExecutorUpdateRequestFeatures } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.updateExecutorJson({
    executorUpdateRequest: {
      args: [
        "--repeats",
        "5",
        "--insecure",
      ],
      command: [
        "curl",
      ],
      contentTypes: [
        "string",
      ],
      features: [
        ExecutorUpdateRequestFeatures.Artifacts,
      ],
      imagePullSecrets: [
        {},
      ],
      labels: {
        "env": "prod",
        "app": "backend",
      },
      meta: {
        docsURI: "https://docs.testkube.io/test-types/executor-k6",
        iconURI: "/assets/k6.jpg",
        tooltips: {
          "general": "please provide k6 test script for execution",
        },
      },
      name: "name",
      namespace: "testkube",
      types: [
        "string",
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateExecutorJsonRequest](../../sdk/models/operations/updateexecutorjsonrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateExecutorJsonResponse](../../sdk/models/operations/updateexecutorjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateExecutorString

Update new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.executor.updateExecutorString({
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

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateExecutorStringRequest](../../sdk/models/operations/updateexecutorstringrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateExecutorStringResponse](../../sdk/models/operations/updateexecutorstringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
