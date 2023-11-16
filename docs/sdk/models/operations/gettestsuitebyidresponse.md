# GetTestSuiteByIDResponse


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `twoHundredTextYamlRes`                                     | *string*                                                    | :heavy_minus_sign:                                          | successful operation                                        |
| `fourHundredAndFourApplicationProblemPlusJsonClasses`       | [shared.Problem](../../../sdk/models/shared/problem.md)[]   | :heavy_minus_sign:                                          | test suite not found                                        |
| `fiveHundredApplicationProblemPlusJsonClasses`              | [shared.Problem](../../../sdk/models/shared/problem.md)[]   | :heavy_minus_sign:                                          | could not get execution result from the database            |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`        | [shared.Problem](../../../sdk/models/shared/problem.md)[]   | :heavy_minus_sign:                                          | problem with communicating with kubernetes cluster          |
| `contentType`                                               | *string*                                                    | :heavy_check_mark:                                          | HTTP response content type for this operation               |
| `statusCode`                                                | *number*                                                    | :heavy_check_mark:                                          | HTTP response status code for this operation                |
| `rawResponse`                                               | [AxiosResponse](https://axios-http.com/docs/res_schema)     | :heavy_check_mark:                                          | Raw HTTP response; suitable for custom response parsing     |
| `testSuite`                                                 | [shared.TestSuite](../../../sdk/models/shared/testsuite.md) | :heavy_minus_sign:                                          | successful operation                                        |