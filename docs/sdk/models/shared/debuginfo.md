# DebugInfo

Testkube debug info


## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `apiLogs`                              | *string*[]                             | :heavy_minus_sign:                     | N/A                                    | [<br/>"logline1",<br/>"logline2",<br/>"logline3"<br/>] |
| `clientVersion`                        | *string*                               | :heavy_minus_sign:                     | N/A                                    | 1.4.9                                  |
| `clusterVersion`                       | *string*                               | :heavy_minus_sign:                     | N/A                                    | v1.23.4                                |
| `executionLogs`                        | Record<string, *string*[]>             | :heavy_minus_sign:                     | N/A                                    |                                        |
| `operatorLogs`                         | *string*[]                             | :heavy_minus_sign:                     | N/A                                    | [<br/>"logline1",<br/>"logline2",<br/>"logline3"<br/>] |
| `serverVersion`                        | *string*                               | :heavy_minus_sign:                     | N/A                                    | v1.4.9                                 |