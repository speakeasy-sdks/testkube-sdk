# Repository
(*repository*)

### Available Operations

* [validateRepository](#validaterepository) - Validate new repository

## validateRepository

Validate new repository based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AuthType, RepositoryType } from "testkube-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new TestkubeSDK();

  const res = await sdk.repository.validateRepository({
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
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Repository](../../sdk/models/shared/repository.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateRepositoryResponse](../../sdk/models/operations/validaterepositoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
