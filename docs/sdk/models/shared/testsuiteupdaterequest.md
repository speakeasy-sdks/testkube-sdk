# TestSuiteUpdateRequest

test suite update body


## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `after`                                                                                               | [shared.TestSuiteBatchStep](../../../sdk/models/shared/testsuitebatchstep.md)[]                       | :heavy_minus_sign:                                                                                    | Run these batch steps after whole suite                                                               | [object Object]                                                                                       |
| `before`                                                                                              | [shared.TestSuiteBatchStep](../../../sdk/models/shared/testsuitebatchstep.md)[]                       | :heavy_minus_sign:                                                                                    | Run these batch steps before whole suite                                                              | [object Object]                                                                                       |
| `created`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |                                                                                                       |
| `description`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | collection of tests                                                                                   |
| `executionRequest`                                                                                    | [shared.TestSuiteExecutionRequestInput](../../../sdk/models/shared/testsuiteexecutionrequestinput.md) | :heavy_minus_sign:                                                                                    | test suite execution request body                                                                     |                                                                                                       |
| `labels`                                                                                              | Record<string, *string*>                                                                              | :heavy_minus_sign:                                                                                    | test suite labels                                                                                     | [object Object]                                                                                       |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | object name                                                                                           | name                                                                                                  |
| `namespace`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | object kubernetes namespace                                                                           | testkube                                                                                              |
| `repeats`                                                                                             | *number*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   | 1                                                                                                     |
| `schedule`                                                                                            | *string*                                                                                              | :heavy_minus_sign:                                                                                    | schedule to run test suite                                                                            | * * * * *                                                                                             |
| `status`                                                                                              | [shared.TestSuiteStatus](../../../sdk/models/shared/testsuitestatus.md)                               | :heavy_check_mark:                                                                                    | test suite status                                                                                     |                                                                                                       |
| `steps`                                                                                               | [shared.TestSuiteBatchStep](../../../sdk/models/shared/testsuitebatchstep.md)[]                       | :heavy_minus_sign:                                                                                    | Batch steps to run                                                                                    | [object Object]                                                                                       |