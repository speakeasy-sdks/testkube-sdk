# TestSuiteExecutionSummary

Test execution summary


## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `duration`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | test suite execution duration                                                                                   | 00:00:09                                                                                                        |
| `durationMs`                                                                                                    | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | test suite execution duration in ms                                                                             | 9009                                                                                                            |
| `endTime`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | test suite execution end time                                                                                   |                                                                                                                 |
| `execution`                                                                                                     | [shared.TestSuiteBatchStepExecutionSummary](../../../sdk/models/shared/testsuitebatchstepexecutionsummary.md)[] | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | execution id                                                                                                    | 62f395e004109209b50edfc1                                                                                        |
| `labels`                                                                                                        | Record<string, *string*>                                                                                        | :heavy_minus_sign:                                                                                              | test suite and execution labels                                                                                 | [object Object]                                                                                                 |
| `name`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | execution name                                                                                                  | test-suite1.needlessly-sweet-imp                                                                                |
| `startTime`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | test suite execution start time                                                                                 |                                                                                                                 |
| `status`                                                                                                        | [shared.TestSuiteExecutionStatus](../../../sdk/models/shared/testsuiteexecutionstatus.md)                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `testSuiteName`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | name of the test suite                                                                                          | test-suite1                                                                                                     |