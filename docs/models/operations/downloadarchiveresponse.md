# DownloadArchiveResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `twoHundredApplicationOctetStreamBytes`                 | *Uint8Array*                                            | :heavy_minus_sign:                                      | successful operation                                    |
| `fourHundredAndFourApplicationProblemPlusJsonClasses`   | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | execution not found                                     |
| `fiveHundredApplicationProblemPlusJsonClasses`          | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | problem with getting artifact archive from storage      |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |