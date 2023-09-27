# Keymap
(*keymap*)

## Overview

Keymap for fields in a form

### Available Operations

* [getKeyMap](#getkeymap) - Test triggers keymap

## getKeyMap

Returns a keymap (supported/allowed fields) for the test trigger UI screen

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetKeyMapResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.keymap.getKeyMap().then((res: GetKeyMapResponse) => {
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

**Promise<[operations.GetKeyMapResponse](../../models/operations/getkeymapresponse.md)>**

