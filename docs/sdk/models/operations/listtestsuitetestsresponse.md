# ListTestSuiteTestsResponse


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `twoHundredApplicationJsonClasses`                        | [shared.Test](../../../sdk/models/shared/test.md)[]       | :heavy_minus_sign:                                        | successful operation                                      |
| `twoHundredTextYamlRes`                                   | *string*                                                  | :heavy_minus_sign:                                        | successful operation                                      |
| `fourHundredAndFourApplicationProblemPlusJsonClasses`     | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | test suite not found                                      |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`      | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | problem with read information from kubernetes cluster     |
| `contentType`                                             | *string*                                                  | :heavy_check_mark:                                        | HTTP response content type for this operation             |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | HTTP response status code for this operation              |
| `rawResponse`                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)   | :heavy_minus_sign:                                        | Raw HTTP response; suitable for custom response parsing   |