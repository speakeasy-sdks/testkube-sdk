# artifacts

## Overview

Artifact operations

### Available Operations

* [downloadArchive](#downloadarchive) - Download artifact archive
* [downloadFile](#downloadfile) - Download artifact
* [getExecutionArtifacts](#getexecutionartifacts) - Get execution's artifacts by ID

## downloadArchive

Download the artifact archive from the given execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DownloadArchiveResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.artifacts.downloadArchive({
  id: "64b7c15d-fbac-4e18-8b1c-4ee2c8c6ce61",
  mask: "veritatis",
}).then((res: DownloadArchiveResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DownloadArchiveRequest](../../models/operations/downloadarchiverequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DownloadArchiveResponse](../../models/operations/downloadarchiveresponse.md)>**


## downloadFile

Download the artifact file from the given execution

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DownloadFileResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.artifacts.downloadFile({
  filename: "maiores",
  id: "eeb1c7cb-db6e-4ec7-8378-ba25317747dc",
}).then((res: DownloadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DownloadFileRequest](../../models/operations/downloadfilerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DownloadFileResponse](../../models/operations/downloadfileresponse.md)>**


## getExecutionArtifacts

Returns artifacts of the given executionID

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetExecutionArtifactsResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.artifacts.getExecutionArtifacts({
  id: "915ad2ca-f5dd-4672-bdc0-f5ae2f3a6b70",
}).then((res: GetExecutionArtifactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetExecutionArtifactsRequest](../../models/operations/getexecutionartifactsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetExecutionArtifactsResponse](../../models/operations/getexecutionartifactsresponse.md)>**

