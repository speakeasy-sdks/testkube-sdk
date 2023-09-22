# GetTestResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `problems`                                              | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | invalid parameters                                      |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `test`                                                  | [shared.Test](../../models/shared/test.md)              | :heavy_minus_sign:                                      | successful operation                                    |
| `getTest200TextYamlString`                              | *string*                                                | :heavy_minus_sign:                                      | successful operation                                    |