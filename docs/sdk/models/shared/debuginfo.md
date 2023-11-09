# DebugInfo

Testkube debug info


## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `apiLogs`                  | *string*[]                 | :heavy_minus_sign:         | N/A                        | logline1,logline2,logline3 |
| `clientVersion`            | *string*                   | :heavy_minus_sign:         | N/A                        | 1.4.9                      |
| `clusterVersion`           | *string*                   | :heavy_minus_sign:         | N/A                        | v1.23.4                    |
| `executionLogs`            | Record<string, *string*[]> | :heavy_minus_sign:         | N/A                        | logline1,logline2,logline3 |
| `operatorLogs`             | *string*[]                 | :heavy_minus_sign:         | N/A                        | logline1,logline2,logline3 |
| `serverVersion`            | *string*                   | :heavy_minus_sign:         | N/A                        | v1.4.9                     |