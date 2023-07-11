# GetTestSuiteExecutionByIDResponse


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `problems`                                                             | [shared.Problem](../../models/shared/problem.md)[]                     | :heavy_minus_sign:                                                     | problem with getting test suite execution from storage                 |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `rawResponse`                                                          | [AxiosResponse>](https://axios-http.com/docs/res_schema)               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `testSuiteExecution`                                                   | [shared.TestSuiteExecution](../../models/shared/testsuiteexecution.md) | :heavy_minus_sign:                                                     | successful operation                                                   |