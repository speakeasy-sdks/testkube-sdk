# executor

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
    "aspernatur",
    "dolores",
    "laborum",
    "vero",
  ],
  command: [
    "voluptatem",
  ],
  contentTypes: [
    "id",
    "quae",
    "commodi",
    "a",
  ],
  executorType: "minus",
  features: [
    ExecutorUpsertRequestFeatures.JunitReport,
  ],
  image: "quia",
  imagePullSecrets: [
    {
      name: "Sandy Cormier",
    },
    {
      name: "Dan Kreiger",
    },
  ],
  jobTemplate: "nemo",
  labels: {
    "recusandae": "omnis",
    "ipsa": "aliquam",
  },
  meta: {
    docsURI: "https://docs.testkube.io/test-types/executor-k6",
    iconURI: "/assets/k6.jpg",
    tooltips: {
      "occaecati": "quibusdam",
    },
  },
  name: "name",
  namespace: "testkube",
  types: [
    "consequuntur",
  ],
  uri: "http://failing-hate.info",
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

sdk.executor.createExecutorString("vel").then((res: CreateExecutorStringResponse) => {
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
  id: "94624070-84f7-4ab3-bcef-02225194db55",
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
  selector: "modi",
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
  id: "10adc669-af90-4a26-87cd-c981f068981d",
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
  selector: "ea",
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
      "nam",
      "amet",
      "adipisci",
    ],
    command: [
      "hic",
      "similique",
      "fuga",
      "consectetur",
    ],
    contentTypes: [
      "laudantium",
      "cumque",
    ],
    executorType: "adipisci",
    features: [
      ExecutorUpdateRequestFeatures.JunitReport,
    ],
    image: "voluptatibus",
    imagePullSecrets: [
      {
        name: "Dora Watsica",
      },
      {
        name: "Miss Guillermo Williamson",
      },
    ],
    jobTemplate: "aspernatur",
    labels: {
      "nihil": "voluptatum",
      "reiciendis": "vitae",
      "ullam": "nisi",
    },
    meta: {
      docsURI: "https://docs.testkube.io/test-types/executor-k6",
      iconURI: "/assets/k6.jpg",
      tooltips: {
        "voluptas": "ratione",
      },
    },
    name: "name",
    namespace: "testkube",
    types: [
      "corrupti",
      "est",
      "perferendis",
    ],
    uri: "https://snarling-lamp.info",
  },
  id: "6324ccb0-6c8c-4a12-9025-29270b8d5722",
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
  requestBody: "at",
  id: "d895b8bc-f24d-4b95-9693-352f74533994",
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

