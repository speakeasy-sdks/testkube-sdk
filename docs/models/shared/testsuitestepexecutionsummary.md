# TestSuiteStepExecutionSummary

Test suite execution summary


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  | 62f395e004109209b50edfc4                                             |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | execution name                                                       | run:testkube/test1                                                   |
| `status`                                                             | [shared.ExecutionStatus](../../models/shared/executionstatus.md)     | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `testName`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | test name                                                            | test1                                                                |
| `type`                                                               | [shared.TestSuiteStepType](../../models/shared/testsuitesteptype.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |