<!-- Start SDK Example Usage -->


```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortExecution({
  executionID: "corrupti",
  id: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
}).then((res: AbortExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->