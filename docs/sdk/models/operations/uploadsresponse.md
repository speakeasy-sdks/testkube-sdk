# UploadsResponse


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `twoHundredApplicationJsonString`                         | *string*                                                  | :heavy_minus_sign:                                        | successful operation                                      |
| `twoHundredTextYamlRes`                                   | *string*                                                  | :heavy_minus_sign:                                        | successful operation                                      |
| `fourHundredApplicationProblemPlusJsonClasses`            | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | problem with the input                                    |
| `fiveHundredApplicationProblemPlusJsonClasses`            | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | could not upload file                                     |
| `contentType`                                             | *string*                                                  | :heavy_check_mark:                                        | HTTP response content type for this operation             |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | HTTP response status code for this operation              |
| `rawResponse`                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)   | :heavy_check_mark:                                        | Raw HTTP response; suitable for custom response parsing   |