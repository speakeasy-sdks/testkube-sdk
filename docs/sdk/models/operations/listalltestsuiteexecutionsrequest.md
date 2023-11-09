# ListAllTestSuiteExecutionsRequest


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `endDate`                                                                                 | [RFCDate](../../types/rfcdate.md)                                                         | :heavy_minus_sign:                                                                        | endDate for filtering                                                                     |
| `last`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | last N days to show                                                                       |
| `page`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | the page index to start at                                                                |
| `pageSize`                                                                                | *number*                                                                                  | :heavy_minus_sign:                                                                        | the number of executions to get, setting to 0 will return only totals                     |
| `selector`                                                                                | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `startDate`                                                                               | [RFCDate](../../types/rfcdate.md)                                                         | :heavy_minus_sign:                                                                        | startDate for filtering in ISO-8601 format, i.e. "yyyy-mm-dd"                             |
| `status`                                                                                  | [shared.TestSuiteExecutionStatus](../../../sdk/models/shared/testsuiteexecutionstatus.md) | :heavy_minus_sign:                                                                        | optional status filter containing multiple values separated by comma                      |
| `test`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | test namespaced name to filter                                                            |
| `textSearch`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | text to search in name and test name                                                      |