<!-- Start SDK Example Usage -->


```typescript
import { TestkubeSDK } from "testkube-sdk";

(async () => {
    const sdk = new TestkubeSDK();

    const res = await sdk.api.abortExecution({
        executionID: "string",
        id: "<ID>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->