# GetExecutorResponse


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `contentType`                                                    | *string*                                                         | :heavy_check_mark:                                               | HTTP response content type for this operation                    |
| `executorDetails`                                                | [shared.ExecutorDetails](../../models/shared/executordetails.md) | :heavy_minus_sign:                                               | successful operation                                             |
| `problems`                                                       | [shared.Problem](../../models/shared/problem.md)[]               | :heavy_minus_sign:                                               | problem with input for CRD generation                            |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | HTTP response status code for this operation                     |
| `rawResponse`                                                    | [AxiosResponse](https://axios-http.com/docs/res_schema)          | :heavy_minus_sign:                                               | Raw HTTP response; suitable for custom response parsing          |
| `getExecutor200TextYamlString`                                   | *string*                                                         | :heavy_minus_sign:                                               | successful operation                                             |