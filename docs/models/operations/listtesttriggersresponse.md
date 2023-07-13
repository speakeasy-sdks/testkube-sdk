# ListTestTriggersResponse


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `contentType`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `problems`                                                     | [shared.Problem](../../models/shared/problem.md)[]             | :heavy_minus_sign:                                             | problem with selector parsing - probably some bad input occurs |
| `statusCode`                                                   | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `rawResponse`                                                  | [AxiosResponse>](https://axios-http.com/docs/res_schema)       | :heavy_minus_sign:                                             | N/A                                                            |
| `testTriggers`                                                 | [shared.TestTrigger](../../models/shared/testtrigger.md)[]     | :heavy_minus_sign:                                             | successful list operation                                      |
| `listTestTriggers200TextYamlString`                            | *string*                                                       | :heavy_minus_sign:                                             | successful list operation                                      |