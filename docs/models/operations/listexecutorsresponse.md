# ListExecutorsResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `executors`                                              | [shared.Executor](../../models/shared/executor.md)[]     | :heavy_minus_sign:                                       | successful operation                                     |
| `problems`                                               | [shared.Problem](../../models/shared/problem.md)[]       | :heavy_minus_sign:                                       | problem with input for CRD generation                    |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `listExecutors200TextYamlString`                         | *string*                                                 | :heavy_minus_sign:                                       | successful operation                                     |