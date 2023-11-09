# GetExecutorResponse


## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `twoHundredTextYamlRes`                                                 | *string*                                                                | :heavy_minus_sign:                                                      | successful operation                                                    |
| `fourHundredApplicationProblemPlusJsonClasses`                          | [shared.Problem](../../../sdk/models/shared/problem.md)[]               | :heavy_minus_sign:                                                      | problem with input for CRD generation                                   |
| `fiveHundredApplicationProblemPlusJsonClasses`                          | [shared.Problem](../../../sdk/models/shared/problem.md)[]               | :heavy_minus_sign:                                                      | problem with getting executor data                                      |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`                    | [shared.Problem](../../../sdk/models/shared/problem.md)[]               | :heavy_minus_sign:                                                      | problem with communicating with kubernetes cluster                      |
| `contentType`                                                           | *string*                                                                | :heavy_check_mark:                                                      | HTTP response content type for this operation                           |
| `executorDetails`                                                       | [shared.ExecutorDetails](../../../sdk/models/shared/executordetails.md) | :heavy_minus_sign:                                                      | successful operation                                                    |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP response status code for this operation                            |
| `rawResponse`                                                           | [AxiosResponse](https://axios-http.com/docs/res_schema)                 | :heavy_minus_sign:                                                      | Raw HTTP response; suitable for custom response parsing                 |