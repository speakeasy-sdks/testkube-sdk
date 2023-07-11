# GetTestTriggerByIDResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `problems`                                               | [shared.Problem](../../models/shared/problem.md)[]       | :heavy_minus_sign:                                       | test trigger not found                                   |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `testTrigger`                                            | [shared.TestTrigger](../../models/shared/testtrigger.md) | :heavy_minus_sign:                                       | successful operation                                     |
| `getTestTriggerByID200TextYamlString`                    | *string*                                                 | :heavy_minus_sign:                                       | successful operation                                     |