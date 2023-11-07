# GetTestSuiteExecutionArtifactsResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `artifact`                                              | [shared.Artifact](../../models/shared/artifact.md)      | :heavy_minus_sign:                                      | successful operation                                    |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `classes`                                               | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with getting test suite executions from storage |