# ListTestExecutionsRequest


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `endDate`                                                             | [RFCDate](../../types/rfcdate.md)                                     | :heavy_minus_sign:                                                    | endDate for filtering                                                 |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | unique id of the object                                               |
| `last`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | last N days to show                                                   |
| `page`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | the page index to start at                                            |
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | the number of executions to get, setting to 0 will return only totals |
| `startDate`                                                           | [RFCDate](../../types/rfcdate.md)                                     | :heavy_minus_sign:                                                    | startDate for filtering in ISO-8601 format, i.e. "yyyy-mm-dd"         |
| `status`                                                              | [shared.ExecutionStatus](../../models/shared/executionstatus.md)      | :heavy_minus_sign:                                                    | optional status filter containing multiple values separated by comma  |