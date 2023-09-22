# Webhook

## Overview

Webhook operations

### Available Operations

* [createWebhookJson](#createwebhookjson) - Create new webhook
* [createWebhookString](#createwebhookstring) - Create new webhook
* [deleteWebhook](#deletewebhook) - Delete webhook
* [deleteWebhooks](#deletewebhooks) - Delete webhooks
* [getWebhook](#getwebhook) - Get webhook details
* [listWebhooks](#listwebhooks) - List webhooks

## createWebhookJson

Create new webhook based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateWebhookJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { EventType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.webhook.createWebhookJson({
  events: [
    EventType.EndTestTimeout,
  ],
  headers: {
    "nobis": "debitis",
  },
  labels: {
    "labore": "veritatis",
  },
  name: "webhook1",
  namespace: "testkube",
  payloadObjectField: "minima",
  payloadTemplate: "magni",
  selector: "itaque",
  uri: "https://hooks.app.com/services/1",
}).then((res: CreateWebhookJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.WebhookCreateRequest](../../models/shared/webhookcreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateWebhookJsonResponse](../../models/operations/createwebhookjsonresponse.md)>**


## createWebhookString

Create new webhook based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateWebhookStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.webhook.createWebhookString("error").then((res: CreateWebhookStringResponse) => {
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

**Promise<[operations.CreateWebhookStringResponse](../../models/operations/createwebhookstringresponse.md)>**


## deleteWebhook

Deletes webhook by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteWebhookResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.webhook.deleteWebhook({
  id: "b9cd7e52-24a6-4a0e-923b-7847ec59e1f6",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## deleteWebhooks

Deletes labeled webhooks

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteWebhooksResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.webhook.deleteWebhooks({
  selector: "in",
}).then((res: DeleteWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteWebhooksRequest](../../models/operations/deletewebhooksrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteWebhooksResponse](../../models/operations/deletewebhooksresponse.md)>**


## getWebhook

Returns webhook

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetWebhookResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.webhook.getWebhook({
  id: "f3c4cce4-b6d7-4696-bf3c-5747501357e4",
}).then((res: GetWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWebhookResponse](../../models/operations/getwebhookresponse.md)>**


## listWebhooks

List webhooks available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListWebhooksResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.webhook.listWebhooks({
  selector: "magnam",
}).then((res: ListWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListWebhooksRequest](../../models/operations/listwebhooksrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListWebhooksResponse](../../models/operations/listwebhooksresponse.md)>**

