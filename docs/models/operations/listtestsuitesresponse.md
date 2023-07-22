# ListTestSuitesResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `problems`                                               | [shared.Problem](../../models/shared/problem.md)[]       | :heavy_minus_sign:                                       | problem with input for CRD generation                    |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |
| `testSuites`                                             | [shared.TestSuite](../../models/shared/testsuite.md)[]   | :heavy_minus_sign:                                       | successful operation                                     |
| `listTestSuites200TextYamlString`                        | *string*                                                 | :heavy_minus_sign:                                       | successful operation                                     |