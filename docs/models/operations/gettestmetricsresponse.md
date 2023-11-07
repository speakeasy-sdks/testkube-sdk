# GetTestMetricsResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `fiveHundredApplicationProblemPlusJsonClasses`                       | [shared.Problem](../../models/shared/problem.md)[]                   | :heavy_minus_sign:                                                   | problem with getting metrics                                         |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`                 | [shared.Problem](../../models/shared/problem.md)[]                   | :heavy_minus_sign:                                                   | problem with read information from storage                           |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | HTTP response content type for this operation                        |
| `executionsMetrics`                                                  | [shared.ExecutionsMetrics](../../models/shared/executionsmetrics.md) | :heavy_minus_sign:                                                   | successful operation                                                 |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP response status code for this operation                         |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | Raw HTTP response; suitable for custom response parsing              |