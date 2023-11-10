# ExecutionsResult

the result for a page of executions


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `filtered`                                                                  | [shared.ExecutionsTotals](../../../sdk/models/shared/executionstotals.md)   | :heavy_minus_sign:                                                          | various execution counters                                                  |
| `results`                                                                   | [shared.ExecutionSummary](../../../sdk/models/shared/executionsummary.md)[] | :heavy_check_mark:                                                          | N/A                                                                         |
| `totals`                                                                    | [shared.ExecutionsTotals](../../../sdk/models/shared/executionstotals.md)   | :heavy_check_mark:                                                          | various execution counters                                                  |