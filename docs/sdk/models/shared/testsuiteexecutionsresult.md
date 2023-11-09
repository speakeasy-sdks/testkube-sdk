# TestSuiteExecutionsResult

the result for a page of executions


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `filtered`                                                                                    | [shared.ExecutionsTotals](../../../sdk/models/shared/executionstotals.md)                     | :heavy_minus_sign:                                                                            | various execution counters                                                                    |
| `results`                                                                                     | [shared.TestSuiteExecutionSummary](../../../sdk/models/shared/testsuiteexecutionsummary.md)[] | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totals`                                                                                      | [shared.ExecutionsTotals](../../../sdk/models/shared/executionstotals.md)                     | :heavy_check_mark:                                                                            | various execution counters                                                                    |