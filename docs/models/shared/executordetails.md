# ExecutorDetails

Executor details with Executor data and additional information like list of executions


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `executions`                                                | [ExecutionsResult](../../models/shared/executionsresult.md) | :heavy_minus_sign:                                          | the result for a page of executions                         |
| `executor`                                                  | [Executor](../../models/shared/executor.md)                 | :heavy_minus_sign:                                          | CRD based executor data                                     |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Executor name                                               |