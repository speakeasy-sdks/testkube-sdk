# GetTestWithExecutionResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `problems`                                                           | [shared.Problem](../../models/shared/problem.md)[]                   | :heavy_minus_sign:                                                   | invalid parameters                                                   |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `testWithExecution`                                                  | [shared.TestWithExecution](../../models/shared/testwithexecution.md) | :heavy_minus_sign:                                                   | successful operation                                                 |
| `getTestWithExecution200TextYamlString`                              | *string*                                                             | :heavy_minus_sign:                                                   | successful operation                                                 |