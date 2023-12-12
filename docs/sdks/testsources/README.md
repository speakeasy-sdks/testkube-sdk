# TestSources
(*testSources*)

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
import { AuthType, RepositoryType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.createTestSourceJson({
    labels: {
      "key": "string",
    },
    name: "testsource1",
    namespace: "testkube",
    repository: {
      branch: "main",
      commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
      path: "test/perf",
      tokenSecret: {
        key: "<key>",
        name: "string",
      },
      type: RepositoryType.Git,
      uri: "https://github.com/kubeshop/testkube",
      usernameSecret: {
        key: "<key>",
        name: "string",
      },
      workingDir: "/",
    },
    uri: "https://github.com/kubeshop/testkube",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.TestSourceUpsertRequest](../../sdk/models/shared/testsourceupsertrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateTestSourceJsonResponse](../../sdk/models/operations/createtestsourcejsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTestSourceString

Create new test source based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.createTestSourceString("string");

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [string](../../models/.md)                                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateTestSourceStringResponse](../../sdk/models/operations/createtestsourcestringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTestSource

Deletes test source by its name

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.deleteTestSource({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteTestSourceRequest](../../sdk/models/operations/deletetestsourcerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteTestSourceResponse](../../sdk/models/operations/deletetestsourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteTestSources

Deletes labeled test sources

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.deleteTestSources({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteTestSourcesRequest](../../sdk/models/operations/deletetestsourcesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteTestSourcesResponse](../../sdk/models/operations/deletetestsourcesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTestSource

Returns test sources data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.getTestSource({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetTestSourceRequest](../../sdk/models/operations/gettestsourcerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetTestSourceResponse](../../sdk/models/operations/gettestsourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listTestSources

List test sources available in cluster

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.listTestSources({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListTestSourcesRequest](../../sdk/models/operations/listtestsourcesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListTestSourcesResponse](../../sdk/models/operations/listtestsourcesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## processTestSourceBatch

Process test source batch based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AuthType, RepositoryType, TestSourceUpsertRequestType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.processTestSourceBatch({
    batch: [
      {
        labels: {
          "key": "string",
        },
        name: "testsource1",
        namespace: "testkube",
        repository: {
          branch: "main",
          commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
          path: "test/perf",
          tokenSecret: {
            key: "<key>",
            name: "string",
          },
          type: RepositoryType.Git,
          uri: "https://github.com/kubeshop/testkube",
          usernameSecret: {
            key: "<key>",
            name: "string",
          },
          workingDir: "/",
        },
        uri: "https://github.com/kubeshop/testkube",
      },
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.TestSourceBatchRequest](../../sdk/models/shared/testsourcebatchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ProcessTestSourceBatchResponse](../../sdk/models/operations/processtestsourcebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestSourceJson

Update test source based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AuthType, RepositoryType, TestSourceUpdateRequestType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.updateTestSourceJson({
    testSourceUpdateRequest: {
      labels: {
        "key": "string",
      },
      name: "testsource1",
      namespace: "testkube",
      repository: {
        branch: "main",
        commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
        path: "test/perf",
        tokenSecret: {
          key: "<key>",
          name: "string",
        },
        type: RepositoryType.Git,
        uri: "https://github.com/kubeshop/testkube",
        usernameSecret: {
          key: "<key>",
          name: "string",
        },
        workingDir: "/",
      },
      uri: "https://github.com/kubeshop/testkube",
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateTestSourceJsonRequest](../../sdk/models/operations/updatetestsourcejsonrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateTestSourceJsonResponse](../../sdk/models/operations/updatetestsourcejsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateTestSourceString

Update test source based on test content or git based data

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.testSources.updateTestSourceString({
    requestBody: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateTestSourceStringRequest](../../sdk/models/operations/updatetestsourcestringrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateTestSourceStringResponse](../../sdk/models/operations/updatetestsourcestringresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
