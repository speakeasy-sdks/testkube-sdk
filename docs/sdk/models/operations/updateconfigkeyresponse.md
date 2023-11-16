# UpdateConfigKeyResponse


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `fourHundredApplicationProblemPlusJsonClasses`            | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | problem with input                                        |
| `fourHundredAndFourApplicationProblemPlusJsonClasses`     | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | config not found                                          |
| `fiveHundredApplicationProblemPlusJsonClasses`            | [shared.Problem](../../../sdk/models/shared/problem.md)[] | :heavy_minus_sign:                                        | problem with updating key in cluster storage              |
| `config`                                                  | [shared.Config](../../../sdk/models/shared/config.md)     | :heavy_minus_sign:                                        | update successful                                         |
| `contentType`                                             | *string*                                                  | :heavy_check_mark:                                        | HTTP response content type for this operation             |
| `statusCode`                                              | *number*                                                  | :heavy_check_mark:                                        | HTTP response status code for this operation              |
| `rawResponse`                                             | [AxiosResponse](https://axios-http.com/docs/res_schema)   | :heavy_check_mark:                                        | Raw HTTP response; suitable for custom response parsing   |