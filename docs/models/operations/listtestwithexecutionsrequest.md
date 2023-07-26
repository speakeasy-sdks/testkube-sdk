# ListTestWithExecutionsRequest


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `page`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | the page index to start at                                            |
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | the number of executions to get, setting to 0 will return only totals |
| `selector`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `status`                                                              | [shared.ExecutionStatus](../../models/shared/executionstatus.md)      | :heavy_minus_sign:                                                    | optional status filter containing multiple values separated by comma  |
| `textSearch`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | text to search in name and test name                                  |