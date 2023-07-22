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
  data: "eveniet",
  labels: {
    "ea": "asperiores",
  },
  name: "testsource1",
  namespace: "testkube",
  repository: {
    authType: RepositoryAuthType.Basic,
    branch: "main",
    certificateSecret: "quidem",
    commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
    path: "test/perf",
    token: "asperiores",
    tokenSecret: {
      key: "eum",
      name: "Phil Hilll MD",
      namespace: "quisquam",
    },
    type: RepositoryType.Git,
    uri: "https://github.com/kubeshop/testkube",
    username: "Joe_Quigley98",
    usernameSecret: {
      key: "ipsum",
      name: "Jean Corkery",
      namespace: "neque",
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

sdk.testSources.createTestSourceString("eos").then((res: CreateTestSourceStringResponse) => {
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
  id: "05fda840-774a-468a-9a35-d086b6f66fef",
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
  selector: "consequatur",
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
  id: "20e9f443-b425-47b9-92c8-dbda6a61efa2",
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
  selector: "inventore",
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
      data: "atque",
      labels: {
        "ullam": "atque",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Header,
        branch: "main",
        certificateSecret: "pariatur",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "aut",
        tokenSecret: {
          key: "similique",
          name: "Ramiro Reilly",
          namespace: "voluptate",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Waylon.Konopelski91",
        usernameSecret: {
          key: "a",
          name: "Bertha Marks",
          namespace: "voluptatem",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.Git,
      uri: "https://github.com/kubeshop/testkube",
    },
    {
      data: "laboriosam",
      labels: {
        "dicta": "atque",
        "ratione": "vitae",
        "quisquam": "atque",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "culpa",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "temporibus",
        tokenSecret: {
          key: "a",
          name: "Mae Hoppe",
          namespace: "delectus",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Annamarie_OConner20",
        usernameSecret: {
          key: "quam",
          name: "Miss Doyle Lesch DDS",
          namespace: "architecto",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.GitFile,
      uri: "https://github.com/kubeshop/testkube",
    },
    {
      data: "eligendi",
      labels: {
        "quis": "tempore",
        "officia": "iste",
        "unde": "quas",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        authType: RepositoryAuthType.Basic,
        branch: "main",
        certificateSecret: "ducimus",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        token: "voluptatum",
        tokenSecret: {
          key: "sapiente",
          name: "Rodney Weissnat",
          namespace: "autem",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        username: "Leta68",
        usernameSecret: {
          key: "a",
          name: "Jennie MacGyver",
          namespace: "eaque",
        },
        workingDir: "/",
      },
      type: TestSourceUpsertRequestType.FileUri,
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
    data: "autem",
    labels: {
      "numquam": "incidunt",
    },
    name: "testsource1",
    namespace: "testkube",
    repository: {
      authType: RepositoryAuthType.Basic,
      branch: "main",
      certificateSecret: "quos",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      token: "minus",
      tokenSecret: {
        key: "voluptate",
        name: "Ron Kessler DVM",
        namespace: "delectus",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      username: "Christopher.Windler",
      usernameSecret: {
        key: "laboriosam",
        name: "Jane Lehner",
        namespace: "itaque",
      },
      workingDir: "/",
    },
    type: TestSourceUpdateRequestType.Git,
    uri: "https://github.com/kubeshop/testkube",
  },
  id: "f934152e-d7e2-453f-8c15-7deaa7170f44",
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
  requestBody: "nemo",
  id: "accf667a-af9b-4bad-985f-e431d6bf5c83",
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

