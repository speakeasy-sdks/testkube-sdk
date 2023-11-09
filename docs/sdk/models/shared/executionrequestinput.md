# ExecutionRequestInput

test execution request body


## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            | Example                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeDeadlineSeconds`                                                                                                                                                                                                | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | duration in seconds the test may be active, until its stopped                                                                                                                                                          | 1                                                                                                                                                                                                                      |
| `args`                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                     | additional executor binary arguments                                                                                                                                                                                   | --repeats,5,--insecure                                                                                                                                                                                                 |
| `argsMode`                                                                                                                                                                                                             | [shared.ExecutionRequestArgsMode](../../../sdk/models/shared/executionrequestargsmode.md)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | usage mode for arguments                                                                                                                                                                                               |                                                                                                                                                                                                                        |
| `artifactRequest`                                                                                                                                                                                                      | [shared.ArtifactRequest](../../../sdk/models/shared/artifactrequest.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                     | artifact request body with test artifacts                                                                                                                                                                              |                                                                                                                                                                                                                        |
| `bucketName`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | minio bucket name to get uploads from                                                                                                                                                                                  | execution-c01d7cf6-ec3f-47f0-9556-a5d6e9009a43                                                                                                                                                                         |
| `command`                                                                                                                                                                                                              | *string*[]                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                     | executor image command                                                                                                                                                                                                 | curl                                                                                                                                                                                                                   |
| `contentRequest`                                                                                                                                                                                                       | [shared.TestContentRequest](../../../sdk/models/shared/testcontentrequest.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                     | test content request body                                                                                                                                                                                              |                                                                                                                                                                                                                        |
| `cronJobTemplate`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | cron job template extensions                                                                                                                                                                                           |                                                                                                                                                                                                                        |
| `envConfigMaps`                                                                                                                                                                                                        | [shared.EnvReference](../../../sdk/models/shared/envreference.md)[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                     | config map references                                                                                                                                                                                                  |                                                                                                                                                                                                                        |
| `envSecrets`                                                                                                                                                                                                           | [shared.EnvReference](../../../sdk/models/shared/envreference.md)[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                     | secret references                                                                                                                                                                                                      |                                                                                                                                                                                                                        |
| ~~`envs`~~                                                                                                                                                                                                             | Record<string, *string*>                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Environment variables passed to executor. Deprecated: use Basic Variables instead     | [object Object]                                                                                                                                                                                                        |
| `executionLabels`                                                                                                                                                                                                      | Record<string, *string*>                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | test execution labels                                                                                                                                                                                                  | [object Object]                                                                                                                                                                                                        |
| `httpProxy`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | http proxy for executor containers                                                                                                                                                                                     | user:pass@my.proxy.server:8080                                                                                                                                                                                         |
| `httpsProxy`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | https proxy for executor containers                                                                                                                                                                                    | user:pass@my.proxy.server:8081                                                                                                                                                                                         |
| `id`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | execution id                                                                                                                                                                                                           | 62f395e004109209b50edfc1                                                                                                                                                                                               |
| `image`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | container image, executor will run inside this image                                                                                                                                                                   | kubeshop/testkube-executor-custom:1.10.11-dev-0a9c91                                                                                                                                                                   |
| `imagePullSecrets`                                                                                                                                                                                                     | [shared.LocalObjectReference](../../../sdk/models/shared/localobjectreference.md)[]                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                     | container image pull secrets                                                                                                                                                                                           |                                                                                                                                                                                                                        |
| `isNegativeTestChangedOnRun`                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | whether negativeTest was changed by user                                                                                                                                                                               | false                                                                                                                                                                                                                  |
| `isVariablesFileUploaded`                                                                                                                                                                                              | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | in case the variables file is too big, it will be uploaded                                                                                                                                                             | false                                                                                                                                                                                                                  |
| `jobTemplate`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | job template extensions                                                                                                                                                                                                |                                                                                                                                                                                                                        |
| `name`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | test execution custom name                                                                                                                                                                                             | testing with 1000 users                                                                                                                                                                                                |
| `namespace`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | test kubernetes namespace ("testkube" when not set)                                                                                                                                                                    | testkube                                                                                                                                                                                                               |
| `negativeTest`                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | whether to run test as negative test                                                                                                                                                                                   | false                                                                                                                                                                                                                  |
| `number`                                                                                                                                                                                                               | *number*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | test execution number                                                                                                                                                                                                  |                                                                                                                                                                                                                        |
| `postRunScript`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | script to run after test execution (not supported for container executors)                                                                                                                                             | sleep 30                                                                                                                                                                                                               |
| `preRunScript`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | script to run before test execution (not supported for container executors)                                                                                                                                            | echo -n '$SECRET_ENV' > ./secret_file                                                                                                                                                                                  |
| `runningContext`                                                                                                                                                                                                       | [shared.RunningContext](../../../sdk/models/shared/runningcontext.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                     | running context for test or test suite execution                                                                                                                                                                       |                                                                                                                                                                                                                        |
| `scraperTemplate`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | scraper template extensions                                                                                                                                                                                            |                                                                                                                                                                                                                        |
| ~~`secretEnvs`~~                                                                                                                                                                                                       | Record<string, *string*>                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Execution variables passed to executor from secrets. Deprecated: use Secret Variables instead | [object Object]                                                                                                                                                                                                        |
| `sync`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | whether to start execution sync or async                                                                                                                                                                               |                                                                                                                                                                                                                        |
| `testSuiteName`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | unique test suite name (CRD Test suite name), if it's run as a part of test suite                                                                                                                                      | test-suite1                                                                                                                                                                                                            |
| `uploads`                                                                                                                                                                                                              | *string*[]                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                     | list of file paths that need to be copied into the test from uploads                                                                                                                                                   | settings/config.txt                                                                                                                                                                                                    |
| `variables`                                                                                                                                                                                                            | Record<string, [shared.Variable](../../../sdk/models/shared/variable.md)>                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                     | execution variables passed to executor converted to vars for usage in tests                                                                                                                                            | [object Object]                                                                                                                                                                                                        |
| `variablesFile`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                     | variables file content - need to be in format for particular executor (e.g. postman envs file)                                                                                                                         |                                                                                                                                                                                                                        |