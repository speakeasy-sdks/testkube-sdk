# Labels
(*labels*)

## Overview

Listing all available labels

### Available Operations

* [listLabels](#listlabels) - List labels

## listLabels

list all available labels

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.labels.listLabels();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListLabelsResponse](../../sdk/models/operations/listlabelsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
