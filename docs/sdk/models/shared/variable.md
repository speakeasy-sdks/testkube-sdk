# Variable


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `configMapRef`                                                       | [shared.ConfigMapRef](../../../sdk/models/shared/configmapref.md)    | :heavy_minus_sign:                                                   | Testkube internal reference for data in Kubernetes config maps       |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `secretRef`                                                          | [shared.SecretRef](../../../sdk/models/shared/secretref.md)          | :heavy_minus_sign:                                                   | Testkube internal reference for secret storage in Kubernetes secrets |
| `type`                                                               | [shared.VariableType](../../../sdk/models/shared/variabletype.md)    | :heavy_minus_sign:                                                   | N/A                                                                  |
| `value`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |