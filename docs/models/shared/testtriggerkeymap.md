# TestTriggerKeyMap

successful get operation


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `actions`                                      | *string*[]                                     | :heavy_check_mark:                             | list of supported values for resources         |
| `conditions`                                   | *string*[]                                     | :heavy_minus_sign:                             | list of supported values for conditions        |
| `events`                                       | Record<string, *string*[]>                     | :heavy_check_mark:                             | mapping between resources and supported events |
| `executions`                                   | *string*[]                                     | :heavy_check_mark:                             | list of supported values for resources         |
| `resources`                                    | *string*[]                                     | :heavy_check_mark:                             | list of supported values for resources         |