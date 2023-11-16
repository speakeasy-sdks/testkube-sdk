# GetExecutionLogsResponse


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `twoHundredApplicationJsonClasses`                                      | [shared.ExecutorOutput](../../../sdk/models/shared/executoroutput.md)[] | :heavy_minus_sign:                                                      | successful operation                                                    |
| `fiveHundredApplicationProblemPlusJsonClasses`                          | [shared.Problem](../../../sdk/models/shared/problem.md)[]               | :heavy_minus_sign:                                                      | problem with getting execution's logs                                   |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [AxiosResponse](https://axios-http.com/docs/res_schema)                 | :heavy_check_mark:                                                      | Raw HTTP response; suitable for custom response parsing                 |