# GetDebugInfoResponse


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `fiveHundredApplicationProblemPlusJsonClasses`                      | [shared.Problem](../../../sdk/models/shared/problem.md)[]           | :heavy_minus_sign:                                                  | problem with getting execution logs from storage                    |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`                | [shared.Problem](../../../sdk/models/shared/problem.md)[]           | :heavy_minus_sign:                                                  | problem with getting debug information from the Kuberenetes cluster |
| `contentType`                                                       | *string*                                                            | :heavy_check_mark:                                                  | HTTP response content type for this operation                       |
| `debugInfo`                                                         | [shared.DebugInfo](../../../sdk/models/shared/debuginfo.md)         | :heavy_minus_sign:                                                  | successful operation                                                |
| `statusCode`                                                        | *number*                                                            | :heavy_check_mark:                                                  | HTTP response status code for this operation                        |
| `rawResponse`                                                       | [AxiosResponse](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                  | Raw HTTP response; suitable for custom response parsing             |