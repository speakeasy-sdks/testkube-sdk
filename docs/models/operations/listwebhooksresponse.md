# ListWebhooksResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `problems`                                              | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with input for CRD generation                   |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `webhooks`                                              | [shared.Webhook](../../models/shared/webhook.md)[]      | :heavy_minus_sign:                                      | successful operation                                    |
| `listWebhooks200TextYamlString`                         | *string*                                                | :heavy_minus_sign:                                      | successful operation                                    |