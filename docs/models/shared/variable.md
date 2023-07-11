# Variable


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configMapRef`                                                       | [ConfigMapRef](../../models/shared/configmapref.md)                  | :heavy_minus_sign:                                                   | Testkube internal reference for data in Kubernetes config maps       |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `secretRef`                                                          | [SecretRef](../../models/shared/secretref.md)                        | :heavy_minus_sign:                                                   | Testkube internal reference for secret storage in Kubernetes secrets |
| `type`                                                               | [VariableType](../../models/shared/variabletype.md)                  | :heavy_minus_sign:                                                   | N/A                                                                  |
| `value`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |