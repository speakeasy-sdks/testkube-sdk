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
import { EventType } from "testkube-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.webhook.createWebhookJson({
    events: [
      EventType.EndTestTimeout,
    ],
    headers: {
      "Content-Type": "application/xml",
    },
    labels: {
      "env": "prod",
      "app": "backend",
    },
    name: "webhook1",
    namespace: "testkube",
    uri: "https://hooks.app.com/services/1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.WebhookCreateRequest](../../sdk/models/shared/webhookcreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateWebhookJsonResponse](../../sdk/models/operations/createwebhookjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createWebhookString

Create new webhook based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.webhook.createWebhookString("string");

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

**Promise<[operations.CreateWebhookStringResponse](../../sdk/models/operations/createwebhookstringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteWebhook

Deletes webhook by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.webhook.deleteWebhook({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteWebhookRequest](../../sdk/models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteWebhookResponse](../../sdk/models/operations/deletewebhookresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteWebhooks

Deletes labeled webhooks

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.webhook.deleteWebhooks({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteWebhooksRequest](../../sdk/models/operations/deletewebhooksrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteWebhooksResponse](../../sdk/models/operations/deletewebhooksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getWebhook

Returns webhook

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.webhook.getWebhook({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetWebhookRequest](../../sdk/models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetWebhookResponse](../../sdk/models/operations/getwebhookresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listWebhooks

List webhooks available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

(async() => {
  const sdk = new TestkubeSDK();

  const res = await sdk.webhook.listWebhooks({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListWebhooksRequest](../../sdk/models/operations/listwebhooksrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListWebhooksResponse](../../sdk/models/operations/listwebhooksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
