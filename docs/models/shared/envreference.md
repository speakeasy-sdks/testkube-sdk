# EnvReference

Reference to env resource


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `mapToVariables`                                                    | *boolean*                                                           | :heavy_minus_sign:                                                  | whether we shoud map to variables from resource                     |                                                                     |
| `mount`                                                             | *boolean*                                                           | :heavy_minus_sign:                                                  | whether we shoud mount resource                                     | /etc/data                                                           |
| `mountPath`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | where we shoud mount resource                                       |                                                                     |
| `reference`                                                         | [LocalObjectReference](../../models/shared/localobjectreference.md) | :heavy_check_mark:                                                  | Reference to Kubernetes object                                      |                                                                     |