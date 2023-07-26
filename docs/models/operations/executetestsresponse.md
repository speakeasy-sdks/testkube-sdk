# ExecuteTestsResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `contentType`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `executionResults`                                                 | [shared.ExecutionResult](../../models/shared/executionresult.md)[] | :heavy_minus_sign:                                                 | successful operation                                               |
| `problems`                                                         | [shared.Problem](../../models/shared/problem.md)[]                 | :heavy_minus_sign:                                                 | problem with request body                                          |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `rawResponse`                                                      | [AxiosResponse>](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                 | N/A                                                                |