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
import { ListLabelsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.labels.listLabels().then((res: ListLabelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListLabelsResponse](../../models/operations/listlabelsresponse.md)>**

