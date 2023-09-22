# Logs

## Overview

Log operations

### Available Operations

* [getExecutionLogs](#getexecutionlogs) - Get execution's logs by ID

## getExecutionLogs

Returns logs of the given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionLogsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.logs.getExecutionLogs({
  id: "90c364b7-c15d-4fba-8e18-8b1c4ee2c8c6",
}).then((res: GetExecutionLogsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetExecutionLogsRequest](../../models/operations/getexecutionlogsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetExecutionLogsResponse](../../models/operations/getexecutionlogsresponse.md)>**

