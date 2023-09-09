# testSources

### Available Operations

* [createTestSourceJson](#createtestsourcejson) - Create new test source
* [createTestSourceString](#createtestsourcestring) - Create new test source
* [deleteTestSource](#deletetestsource) - Delete test source
* [deleteTestSources](#deletetestsources) - Delete test sources
* [getTestSource](#gettestsource) - Get test source data
* [listTestSources](#listtestsources) - List test sources
* [processTestSourceBatch](#processtestsourcebatch) - Process test source batch (create, update, delete)
* [updateTestSourceJson](#updatetestsourcejson) - Update test source
* [updateTestSourceString](#updatetestsourcestring) - Update test source

## createTestSourceJson

Create new test source based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSourceJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSources.createTestSourceJson({
  data: "accusamus",
  labels: {
    "et": "quas",
  },
  name: "testsource1",
  namespace: "testkube",
  repository: {
    authType: RepositoryAuthType.Header,
    branch: "main",
    certificateSecret: "cum",
    commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
    path: "test/perf",
    token: "dicta",
    tokenSecret: {
      key: "impedit",
      name: "Laverne Waelchi",
      namespace: "quas",
    },
    type: RepositoryType.Git,
    uri: "https://github.com/kubeshop/testkube",
    username: "Olin_Keebler40",
    usernameSecret: {
      key: "beatae",
      name: "Ebony Waters",
      namespace: "illo",
    },
    workingDir: "/",
  },
  type: TestSourceUpsertRequestType.GitDir,
  uri: "https://github.com/kubeshop/testkube",
}).then((res: CreateTestSourceJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.TestSourceUpsertRequest](../../models/shared/testsourceupsertrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateTestSourceJsonResponse](../../models/operations/createtestsourcejsonresponse.md)>**


## createTestSourceString

Create new test source based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { CreateTestSourceStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSources.createTestSourceString("dignissimos").then((res: CreateTestSourceStringResponse) => {
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

**Promise<[operations.CreateTestSourceStringResponse](../../models/operations/createtestsourcestringresponse.md)>**


## deleteTestSource

Deletes test source by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSourceResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSources.deleteTestSource({
  id: "cbdb6eec-7437-48ba-a531-7747dc915ad2",
}).then((res: DeleteTestSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteTestSourceRequest](../../models/operations/deletetestsourcerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteTestSourceResponse](../../models/operations/deletetestsourceresponse.md)>**


## deleteTestSources

Deletes labeled test sources

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { DeleteTestSourcesResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSources.deleteTestSources({
  selector: "maxime",
}).then((res: DeleteTestSourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteTestSourcesRequest](../../models/operations/deletetestsourcesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteTestSourcesResponse](../../models/operations/deletetestsourcesresponse.md)>**


## getTestSource

Returns test sources data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { GetTestSourceResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSources.getTestSource({
  id: "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
}).then((res: GetTestSourceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetTestSourceRequest](../../models/operations/gettestsourcerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetTestSourceResponse](../../models/operations/gettestsourceresponse.md)>**


## listTestSources

List test sources available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ListTestSourcesResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSources.listTestSources({
  selector: "ab",
}).then((res: ListTestSourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListTestSourcesRequest](../../models/operations/listtestsourcesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListTestSourcesResponse](../../models/operations/listtestsourcesresponse.md)>**


## processTestSourceBatch

Process test source batch based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ProcessTestSourceBatchResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSources.processTestSourceBatch({
  batch: [
    {
      data: "quaerat",
      labels: {
        "amet": "sapiente",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "est",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "iure",
        tokenSecret: {
          key: "quisquam",
          name: "Armando Reichert",
          namespace: "ipsam",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Ernest54",
        usernameSecret: {
          key: "doloremque",
          name: "Jesus Batz",
          namespace: "similique",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.GitDir,
      uri: "https://github.com/kubeshop/testkube",
    },
  ],
}).then((res: ProcessTestSourceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.TestSourceBatchRequest](../../models/shared/testsourcebatchrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ProcessTestSourceBatchResponse](../../models/operations/processtestsourcebatchresponse.md)>**


## updateTestSourceJson

Update test source based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSourceJsonResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType, TestSourceUpdateRequestType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.testSources.updateTestSourceJson({
  testSourceUpdateRequest: {
    data: "impedit",
    labels: {
      "nisi": "cumque",
    },
    name: "testsource1",
    namespace: "testkube",
    repository: {
      authType: RepositoryAuthType.Header,
      branch: "main",
      certificateSecret: "fugiat",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "laboriosam",
      tokenSecret: {
        key: "nam",
        name: "Shawna Feil",
        namespace: "cupiditate",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Alessia3",
      usernameSecret: {
        key: "magnam",
        name: "Arturo Cole",
        namespace: "id",
      },
      workingDir: "/",
    },
    type: TestSourceUpdateRequestType.Git,
    uri: "https://github.com/kubeshop/testkube",
  },
  id: "2553819b-474b-40ed-a0e5-6248fff639a9",
}).then((res: UpdateTestSourceJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateTestSourceJsonRequest](../../models/operations/updatetestsourcejsonrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateTestSourceJsonResponse](../../models/operations/updatetestsourcejsonresponse.md)>**


## updateTestSourceString

Update test source based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { UpdateTestSourceStringResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.testSources.updateTestSourceString({
  requestBody: "beatae",
  id: "0abdcab6-2676-4696-a1ec-00221b335d89",
}).then((res: UpdateTestSourceStringResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateTestSourceStringRequest](../../models/operations/updatetestsourcestringrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateTestSourceStringResponse](../../models/operations/updatetestsourcestringresponse.md)>**

