# ListTestTriggersResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `twoHundredApplicationJsonClasses`                                | [shared.TestTrigger](../../../sdk/models/shared/testtrigger.md)[] | :heavy_minus_sign:                                                | successful list operation                                         |
| `twoHundredTextYamlRes`                                           | *string*                                                          | :heavy_minus_sign:                                                | successful list operation                                         |
| `fourHundredApplicationProblemPlusJsonClasses`                    | [shared.Problem](../../../sdk/models/shared/problem.md)[]         | :heavy_minus_sign:                                                | problem with selector parsing - probably some bad input occurs    |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`              | [shared.Problem](../../../sdk/models/shared/problem.md)[]         | :heavy_minus_sign:                                                | problem communicating with kubernetes cluster                     |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_check_mark:                                                | Raw HTTP response; suitable for custom response parsing           |