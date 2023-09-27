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
import { CreateExecutorJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutorUpsertRequestFeatures } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.executor.createExecutorJson({
  args: [
    "deleniti",
  ],
  command: [
    "expedita",
  ],
  contentTypes: [
    "hic",
  ],
  executorType: "excepturi",
  features: [
    ExecutorUpsertRequestFeatures.Artifacts,
  ],
  image: "sed",
  imagePullSecrets: [
    {
      name: "Marguerite Jast",
    },
  ],
  jobTemplate: "tenetur",
  labels: {
    "dignissimos": "esse",
  },
  meta: {
    docsURI: "https://docs.testkube.io/test-types/executor-k6",
    iconURI: "/assets/k6.jpg",
    tooltips: {
      "animi": "laudantium",
    },
  },
  name: "name",
  namespace: "testkube",
  types: [
    "esse",
  ],
  uri: "https://virtuous-defendant.org",
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

sdk.executor.createExecutorString("eius").then((res: CreateExecutorStringResponse) => {
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


## deleteExecutor

Deletes executor by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteExecutorResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executor.deleteExecutor({
  id: "be752c65-b344-418e-bbb9-1c8d975e0e84",
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

sdk.executor.deleteExecutors({
  selector: "quae",
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


## getExecutor

Returns executors data with executions passed to executor

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutorResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executor.getExecutor({
  id: "9d8f84f1-44f3-4e07-adcc-4aa5f3cabd90",
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


## listExecutors

List executors available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListExecutorsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.executor.listExecutors({
  selector: "ipsam",
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


## updateExecutorJson

Update new executor based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateExecutorJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { ExecutorUpdateRequestFeatures } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.executor.updateExecutorJson({
  executorUpdateRequest: {
    args: [
      "officia",
    ],
    command: [
      "cupiditate",
    ],
    contentTypes: [
      "reprehenderit",
    ],
    executorType: "quia",
    features: [
      ExecutorUpdateRequestFeatures.JunitReport,
    ],
    image: "accusantium",
    imagePullSecrets: [
      {
        name: "Sue Krajcik",
      },
    ],
    jobTemplate: "sed",
    labels: {
      "odit": "iusto",
    },
    meta: {
      docsURI: "https://docs.testkube.io/test-types/executor-k6",
      iconURI: "/assets/k6.jpg",
      tooltips: {
        "expedita": "eos",
      },
    },
    name: "name",
    namespace: "testkube",
    types: [
      "repellendus",
    ],
    uri: "http://awkward-mood.biz",
  },
  id: "70bf7a4f-a87c-4f53-9a6f-ae54ebf60c32",
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

sdk.executor.updateExecutorString({
  requestBody: "vitae",
  id: "f023b75d-2367-4fe1-a0cc-8df79f0a396d",
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

