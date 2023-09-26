# ListTestSourcesResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | HTTP response content type for this operation            |
| `problems`                                               | [shared.Problem](../../models/shared/problem.md)[]       | :heavy_minus_sign:                                       | problem with input for CRD generation                    |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | HTTP response status code for this operation             |
| `rawResponse`                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)  | :heavy_minus_sign:                                       | Raw HTTP response; suitable for custom response parsing  |
| `testSources`                                            | [shared.TestSource](../../models/shared/testsource.md)[] | :heavy_minus_sign:                                       | successful operation                                     |
| `listTestSources200TextYamlString`                       | *string*                                                 | :heavy_minus_sign:                                       | successful operation                                     |