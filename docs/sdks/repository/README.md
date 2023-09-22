# Repository

### Available Operations

* [validateRepository](#validaterepository) - Validate new repository

## validateRepository

Validate new repository based on variables passed in request

### Example Usage

```typescript
import { TestkubeSDK } from "testkube-sdk";
import { ValidateRepositoryResponse } from "testkube-sdk/dist/sdk/models/operations";
import { RepositoryAuthType, RepositoryType } from "testkube-sdk/dist/sdk/models/shared";

const sdk = new TestkubeSDK();

sdk.repository.validateRepository({
  authType: RepositoryAuthType.Header,
  branch: "main",
  certificateSecret: "recusandae",
  commit: "b928cbb7186944ab9275937ec1ac3d3738ca2e1d",
  path: "test/perf",
  token: "ex",
  tokenSecret: {
    key: "beatae",
    name: "Ebony Waters",
    namespace: "illo",
  },
  type: RepositoryType.Git,
  uri: "https://github.com/kubeshop/testkube",
  username: "Orlando_Kulas82",
  usernameSecret: {
    key: "cum",
    name: "Tricia Weber",
    namespace: "quaerat",
  },
  workingDir: "/",
}).then((res: ValidateRepositoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Repository](../../models/shared/repository.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ValidateRepositoryResponse](../../models/operations/validaterepositoryresponse.md)>**

