# UpdateConfigKeyResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `config`                                                 | [shared.Config](../../models/shared/config.md)           | :heavy_minus_sign:                                       | update successful                                        |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `problems`                                               | [shared.Problem](../../models/shared/problem.md)[]       | :heavy_minus_sign:                                       | problem with input                                       |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |