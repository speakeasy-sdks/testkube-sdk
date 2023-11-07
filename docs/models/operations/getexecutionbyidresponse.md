# GetExecutionByIDResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `fourHundredAndFourApplicationProblemPlusJsonClasses`   | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | execution not found                                     |
| `fiveHundredApplicationProblemPlusJsonClasses`          | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with getting test executions from storage       |
| `fiveHundredAndTwoApplicationProblemPlusJsonClasses`    | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with reading secrets from kubernetes cluster    |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `execution`                                             | [shared.Execution](../../models/shared/execution.md)    | :heavy_minus_sign:                                      | successful operation                                    |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |