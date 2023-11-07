# GetTestSourceResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `twoHundredTextYamlRes`                                 | *string*                                                | :heavy_minus_sign:                                      | successful operation                                    |
| `fourHundredApplicationProblemPlusJsonClasses`          | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with input for CRD generation                   |
| `fourHundredAndFourApplicationProblemPlusJsonClasses`   | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | test source not found                                   |
| `fiveHundredApplicationProblemPlusJsonClasses`          | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with getting test source data                   |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`    | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with communicating with kubernetes cluster      |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `testSource`                                            | [shared.TestSource](../../models/shared/testsource.md)  | :heavy_minus_sign:                                      | successful operation                                    |