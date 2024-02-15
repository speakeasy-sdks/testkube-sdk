<!-- Start SDK Example Usage [usage] -->
```typescript
import { TestkubeSDK } from "testkube-sdk";

async function run() {
    const sdk = new TestkubeSDK();

    const res = await sdk.api.abortExecution({
        executionID: "<value>",
        id: "<id>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->