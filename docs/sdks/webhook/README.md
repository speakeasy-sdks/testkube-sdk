# Webhook
(*webhook*)

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
    "porro": "Loaf",
  },
  labels: {
    "qui": "Quality",
  },
  name: "webhook1",
  namespace: "testkube",
  payloadObjectField: "Eritrea gray",
  payloadTemplate: "what haptic second",
  selector: "port",
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

sdk.webhook.createWebhookString("henry").then((res: CreateWebhookStringResponse) => {
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
  id: "<ID>",
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
  selector: "Table",
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
  id: "<ID>",
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
  selector: "Ball indigo",
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

