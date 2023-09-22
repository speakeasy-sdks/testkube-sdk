# DownloadArchiveResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `problems`                                              | [shared.Problem](../../models/shared/problem.md)[]      | :heavy_minus_sign:                                      | execution not found                                     |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `downloadArchive200ApplicationOctetStreamBinaryString`  | *Uint8Array*                                            | :heavy_minus_sign:                                      | successful operation                                    |