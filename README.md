# testkube-sdk

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add testkube-sdk
```

### Yarn

```bash
yarn add testkube-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { TestkubeSDK } from "testkube-sdk";
import { AbortExecutionResponse } from "testkube-sdk/dist/sdk/models/operations";

const sdk = new TestkubeSDK();

sdk.api.abortExecution({
  executionID: "corrupti",
  id: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
}).then((res: AbortExecutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [api](docs/sdks/api/README.md)

* [abortExecution](docs/sdks/api/README.md#abortexecution) - Aborts execution
* [abortTestExecutions](docs/sdks/api/README.md#aborttestexecutions) - Abort all executions of a test
* [abortTestSuiteExecution](docs/sdks/api/README.md#aborttestsuiteexecution) - Aborts testsuite execution
* [abortTestSuiteExecutionByID](docs/sdks/api/README.md#aborttestsuiteexecutionbyid) - Aborts testsuite execution
* [abortTestSuiteExecutions](docs/sdks/api/README.md#aborttestsuiteexecutions) - Abort all executions of a test suite
* [bulkUpdateTestTriggers](docs/sdks/api/README.md#bulkupdatetesttriggers) - Bulk update test triggers
* [createExecutorJson](docs/sdks/api/README.md#createexecutorjson) - Create new executor
* [createExecutorString](docs/sdks/api/README.md#createexecutorstring) - Create new executor
* [createTestSourceJson](docs/sdks/api/README.md#createtestsourcejson) - Create new test source
* [createTestSourceString](docs/sdks/api/README.md#createtestsourcestring) - Create new test source
* [createTestSuiteJson](docs/sdks/api/README.md#createtestsuitejson) - Create new test suite
* [createTestSuiteString](docs/sdks/api/README.md#createtestsuitestring) - Create new test suite
* [createTestTriggerJson](docs/sdks/api/README.md#createtesttriggerjson) - Create new test trigger
* [createTestTriggerString](docs/sdks/api/README.md#createtesttriggerstring) - Create new test trigger
* [createTestJson](docs/sdks/api/README.md#createtestjson) - Create new test
* [createTestString](docs/sdks/api/README.md#createteststring) - Create new test
* [createWebhookJson](docs/sdks/api/README.md#createwebhookjson) - Create new webhook
* [createWebhookString](docs/sdks/api/README.md#createwebhookstring) - Create new webhook
* [deleteExecutor](docs/sdks/api/README.md#deleteexecutor) - Delete executor
* [deleteExecutors](docs/sdks/api/README.md#deleteexecutors) - Delete executors
* [deleteTest](docs/sdks/api/README.md#deletetest) - Delete test
* [deleteTestSource](docs/sdks/api/README.md#deletetestsource) - Delete test source
* [deleteTestSources](docs/sdks/api/README.md#deletetestsources) - Delete test sources
* [deleteTestSuite](docs/sdks/api/README.md#deletetestsuite) - Delete test suite
* [deleteTestSuites](docs/sdks/api/README.md#deletetestsuites) - Delete test suites
* [deleteTestTrigger](docs/sdks/api/README.md#deletetesttrigger) - Delete test trigger
* [deleteTestTriggers](docs/sdks/api/README.md#deletetesttriggers) - Delete test triggers
* [deleteTests](docs/sdks/api/README.md#deletetests) - Delete tests
* [deleteWebhook](docs/sdks/api/README.md#deletewebhook) - Delete webhook
* [deleteWebhooks](docs/sdks/api/README.md#deletewebhooks) - Delete webhooks
* [downloadArchive](docs/sdks/api/README.md#downloadarchive) - Download artifact archive
* [downloadFile](docs/sdks/api/README.md#downloadfile) - Download artifact
* [executeTest](docs/sdks/api/README.md#executetest) - Starts new test execution
* [executeTestSuite](docs/sdks/api/README.md#executetestsuite) - Starts new test suite execution
* [executeTestSuites](docs/sdks/api/README.md#executetestsuites) - Starts new test suite executions
* [executeTests](docs/sdks/api/README.md#executetests) - Starts new test executions
* [getConfig](docs/sdks/api/README.md#getconfig) - Get config
* [getDebugInfo](docs/sdks/api/README.md#getdebuginfo) - Get debug information
* [getExecutionArtifacts](docs/sdks/api/README.md#getexecutionartifacts) - Get execution's artifacts by ID
* [getExecutionByID](docs/sdks/api/README.md#getexecutionbyid) - Get test execution by ID
* [getExecutionLogs](docs/sdks/api/README.md#getexecutionlogs) - Get execution's logs by ID
* [getExecutor](docs/sdks/api/README.md#getexecutor) - Get executor details
* [getKeyMap](docs/sdks/api/README.md#getkeymap) - Test triggers keymap
* [getTest](docs/sdks/api/README.md#gettest) - Get test
* [getTestExecution](docs/sdks/api/README.md#gettestexecution) - Get test execution
* [getTestMetrics](docs/sdks/api/README.md#gettestmetrics) - Get test metrics
* [getTestSource](docs/sdks/api/README.md#gettestsource) - Get test source data
* [getTestSuiteByID](docs/sdks/api/README.md#gettestsuitebyid) - Get test suite by ID
* [getTestSuiteByIDWithExecution](docs/sdks/api/README.md#gettestsuitebyidwithexecution) - Get test suite by ID with execution
* [getTestSuiteExecution](docs/sdks/api/README.md#gettestsuiteexecution) - Get test suite execution
* [getTestSuiteExecutionArtifacts](docs/sdks/api/README.md#gettestsuiteexecutionartifacts) - Get test suite execution artifacts
* [getTestSuiteExecutionArtifactsByTestsuite](docs/sdks/api/README.md#gettestsuiteexecutionartifactsbytestsuite) - Get test suite execution artifacts
* [getTestSuiteExecutionByID](docs/sdks/api/README.md#gettestsuiteexecutionbyid) - Get test suite execution by ID
* [getTestSuiteMetrics](docs/sdks/api/README.md#gettestsuitemetrics) - Get test suite metrics
* [getTestTriggerByID](docs/sdks/api/README.md#gettesttriggerbyid) - Get test trigger by ID
* [getTestWithExecution](docs/sdks/api/README.md#gettestwithexecution) - Get test with execution
* [getWebhook](docs/sdks/api/README.md#getwebhook) - Get webhook details
* [listAllTestSuiteExecutions](docs/sdks/api/README.md#listalltestsuiteexecutions) - Get all test suite executions
* [listExecutions](docs/sdks/api/README.md#listexecutions) - Get all test executions
* [listExecutors](docs/sdks/api/README.md#listexecutors) - List executors
* [listTestExecutions](docs/sdks/api/README.md#listtestexecutions) - Get all test executions
* [listTestSources](docs/sdks/api/README.md#listtestsources) - List test sources
* [listTestSuiteExecutions](docs/sdks/api/README.md#listtestsuiteexecutions) - Get all test suite executions
* [listTestSuiteTests](docs/sdks/api/README.md#listtestsuitetests) - List tests for test suite
* [listTestSuiteWithExecutions](docs/sdks/api/README.md#listtestsuitewithexecutions) - Get all test suite with executions
* [listTestSuites](docs/sdks/api/README.md#listtestsuites) - Get all test suites
* [listTestTriggers](docs/sdks/api/README.md#listtesttriggers) - List test triggers
* [listTestWithExecutions](docs/sdks/api/README.md#listtestwithexecutions) - List test with executions
* [listTests](docs/sdks/api/README.md#listtests) - List tests
* [listWebhooks](docs/sdks/api/README.md#listwebhooks) - List webhooks
* [processTestSourceBatch](docs/sdks/api/README.md#processtestsourcebatch) - Process test source batch (create, update, delete)
* [updateConfigKey](docs/sdks/api/README.md#updateconfigkey) - Update config
* [updateExecutorJson](docs/sdks/api/README.md#updateexecutorjson) - Update executor
* [updateExecutorString](docs/sdks/api/README.md#updateexecutorstring) - Update executor
* [updateTestSourceJson](docs/sdks/api/README.md#updatetestsourcejson) - Update test source
* [updateTestSourceString](docs/sdks/api/README.md#updatetestsourcestring) - Update test source
* [updateTestSuiteJson](docs/sdks/api/README.md#updatetestsuitejson) - Update test suite
* [updateTestSuiteString](docs/sdks/api/README.md#updatetestsuitestring) - Update test suite
* [updateTestTriggerJson](docs/sdks/api/README.md#updatetesttriggerjson) - Update test trigger
* [updateTestTriggerString](docs/sdks/api/README.md#updatetesttriggerstring) - Update test trigger
* [updateTestJson](docs/sdks/api/README.md#updatetestjson) - Update test
* [updateTestString](docs/sdks/api/README.md#updateteststring) - Update test
* [uploads](docs/sdks/api/README.md#uploads) - Upload file
* [validateRepository](docs/sdks/api/README.md#validaterepository) - Validate new repository

### [artifacts](docs/sdks/artifacts/README.md)

* [downloadArchive](docs/sdks/artifacts/README.md#downloadarchive) - Download artifact archive
* [downloadFile](docs/sdks/artifacts/README.md#downloadfile) - Download artifact
* [getExecutionArtifacts](docs/sdks/artifacts/README.md#getexecutionartifacts) - Get execution's artifacts by ID

### [executions](docs/sdks/executions/README.md)

* [abortExecution](docs/sdks/executions/README.md#abortexecution) - Aborts execution
* [abortTestSuiteExecution](docs/sdks/executions/README.md#aborttestsuiteexecution) - Aborts testsuite execution
* [abortTestSuiteExecutionByID](docs/sdks/executions/README.md#aborttestsuiteexecutionbyid) - Aborts testsuite execution
* [downloadArchive](docs/sdks/executions/README.md#downloadarchive) - Download artifact archive
* [downloadFile](docs/sdks/executions/README.md#downloadfile) - Download artifact
* [executeTest](docs/sdks/executions/README.md#executetest) - Starts new test execution
* [executeTestSuite](docs/sdks/executions/README.md#executetestsuite) - Starts new test suite execution
* [executeTestSuites](docs/sdks/executions/README.md#executetestsuites) - Starts new test suite executions
* [executeTests](docs/sdks/executions/README.md#executetests) - Starts new test executions
* [getExecutionArtifacts](docs/sdks/executions/README.md#getexecutionartifacts) - Get execution's artifacts by ID
* [getExecutionByID](docs/sdks/executions/README.md#getexecutionbyid) - Get test execution by ID
* [getExecutionLogs](docs/sdks/executions/README.md#getexecutionlogs) - Get execution's logs by ID
* [getTestExecution](docs/sdks/executions/README.md#gettestexecution) - Get test execution
* [getTestSuiteExecution](docs/sdks/executions/README.md#gettestsuiteexecution) - Get test suite execution
* [getTestSuiteExecutionArtifacts](docs/sdks/executions/README.md#gettestsuiteexecutionartifacts) - Get test suite execution artifacts
* [getTestSuiteExecutionArtifactsByTestsuite](docs/sdks/executions/README.md#gettestsuiteexecutionartifactsbytestsuite) - Get test suite execution artifacts
* [getTestSuiteExecutionByID](docs/sdks/executions/README.md#gettestsuiteexecutionbyid) - Get test suite execution by ID
* [listAllTestSuiteExecutions](docs/sdks/executions/README.md#listalltestsuiteexecutions) - Get all test suite executions
* [listExecutions](docs/sdks/executions/README.md#listexecutions) - Get all test executions
* [listTestExecutions](docs/sdks/executions/README.md#listtestexecutions) - Get all test executions
* [listTestSuiteExecutions](docs/sdks/executions/README.md#listtestsuiteexecutions) - Get all test suite executions
* [uploads](docs/sdks/executions/README.md#uploads) - Upload file

### [executor](docs/sdks/executor/README.md)

* [createExecutorJson](docs/sdks/executor/README.md#createexecutorjson) - Create new executor
* [createExecutorString](docs/sdks/executor/README.md#createexecutorstring) - Create new executor
* [deleteExecutor](docs/sdks/executor/README.md#deleteexecutor) - Delete executor
* [deleteExecutors](docs/sdks/executor/README.md#deleteexecutors) - Delete executors
* [getExecutor](docs/sdks/executor/README.md#getexecutor) - Get executor details
* [listExecutors](docs/sdks/executor/README.md#listexecutors) - List executors
* [updateExecutorJson](docs/sdks/executor/README.md#updateexecutorjson) - Update executor
* [updateExecutorString](docs/sdks/executor/README.md#updateexecutorstring) - Update executor

### [keymap](docs/sdks/keymap/README.md)

* [getKeyMap](docs/sdks/keymap/README.md#getkeymap) - Test triggers keymap

### [labels](docs/sdks/labels/README.md)

* [listLabels](docs/sdks/labels/README.md#listlabels) - List labels

### [logs](docs/sdks/logs/README.md)

* [getExecutionLogs](docs/sdks/logs/README.md#getexecutionlogs) - Get execution's logs by ID

### [repository](docs/sdks/repository/README.md)

* [validateRepository](docs/sdks/repository/README.md#validaterepository) - Validate new repository

### [testSources](docs/sdks/testsources/README.md)

* [createTestSourceJson](docs/sdks/testsources/README.md#createtestsourcejson) - Create new test source
* [createTestSourceString](docs/sdks/testsources/README.md#createtestsourcestring) - Create new test source
* [deleteTestSource](docs/sdks/testsources/README.md#deletetestsource) - Delete test source
* [deleteTestSources](docs/sdks/testsources/README.md#deletetestsources) - Delete test sources
* [getTestSource](docs/sdks/testsources/README.md#gettestsource) - Get test source data
* [listTestSources](docs/sdks/testsources/README.md#listtestsources) - List test sources
* [processTestSourceBatch](docs/sdks/testsources/README.md#processtestsourcebatch) - Process test source batch (create, update, delete)
* [updateTestSourceJson](docs/sdks/testsources/README.md#updatetestsourcejson) - Update test source
* [updateTestSourceString](docs/sdks/testsources/README.md#updatetestsourcestring) - Update test source

### [testSuites](docs/sdks/testsuites/README.md)

* [abortTestSuiteExecution](docs/sdks/testsuites/README.md#aborttestsuiteexecution) - Aborts testsuite execution
* [abortTestSuiteExecutions](docs/sdks/testsuites/README.md#aborttestsuiteexecutions) - Abort all executions of a test suite
* [createTestSuiteJson](docs/sdks/testsuites/README.md#createtestsuitejson) - Create new test suite
* [createTestSuiteString](docs/sdks/testsuites/README.md#createtestsuitestring) - Create new test suite
* [deleteTestSuite](docs/sdks/testsuites/README.md#deletetestsuite) - Delete test suite
* [deleteTestSuites](docs/sdks/testsuites/README.md#deletetestsuites) - Delete test suites
* [executeTestSuite](docs/sdks/testsuites/README.md#executetestsuite) - Starts new test suite execution
* [executeTestSuites](docs/sdks/testsuites/README.md#executetestsuites) - Starts new test suite executions
* [getTestSuiteByID](docs/sdks/testsuites/README.md#gettestsuitebyid) - Get test suite by ID
* [getTestSuiteByIDWithExecution](docs/sdks/testsuites/README.md#gettestsuitebyidwithexecution) - Get test suite by ID with execution
* [getTestSuiteExecution](docs/sdks/testsuites/README.md#gettestsuiteexecution) - Get test suite execution
* [getTestSuiteExecutionArtifacts](docs/sdks/testsuites/README.md#gettestsuiteexecutionartifacts) - Get test suite execution artifacts
* [getTestSuiteExecutionArtifactsByTestsuite](docs/sdks/testsuites/README.md#gettestsuiteexecutionartifactsbytestsuite) - Get test suite execution artifacts
* [listTestSuiteExecutions](docs/sdks/testsuites/README.md#listtestsuiteexecutions) - Get all test suite executions
* [listTestSuiteTests](docs/sdks/testsuites/README.md#listtestsuitetests) - List tests for test suite
* [listTestSuiteWithExecutions](docs/sdks/testsuites/README.md#listtestsuitewithexecutions) - Get all test suite with executions
* [listTestSuites](docs/sdks/testsuites/README.md#listtestsuites) - Get all test suites
* [updateTestSuiteJson](docs/sdks/testsuites/README.md#updatetestsuitejson) - Update test suite
* [updateTestSuiteString](docs/sdks/testsuites/README.md#updatetestsuitestring) - Update test suite

### [testTriggers](docs/sdks/testtriggers/README.md)

* [bulkUpdateTestTriggers](docs/sdks/testtriggers/README.md#bulkupdatetesttriggers) - Bulk update test triggers
* [createTestTriggerJson](docs/sdks/testtriggers/README.md#createtesttriggerjson) - Create new test trigger
* [createTestTriggerString](docs/sdks/testtriggers/README.md#createtesttriggerstring) - Create new test trigger
* [deleteTestTrigger](docs/sdks/testtriggers/README.md#deletetesttrigger) - Delete test trigger
* [deleteTestTriggers](docs/sdks/testtriggers/README.md#deletetesttriggers) - Delete test triggers
* [getTestTriggerByID](docs/sdks/testtriggers/README.md#gettesttriggerbyid) - Get test trigger by ID
* [listTestTriggers](docs/sdks/testtriggers/README.md#listtesttriggers) - List test triggers
* [updateTestTriggerJson](docs/sdks/testtriggers/README.md#updatetesttriggerjson) - Update test trigger
* [updateTestTriggerString](docs/sdks/testtriggers/README.md#updatetesttriggerstring) - Update test trigger

### [tests](docs/sdks/tests/README.md)

* [abortExecution](docs/sdks/tests/README.md#abortexecution) - Aborts execution
* [abortTestExecutions](docs/sdks/tests/README.md#aborttestexecutions) - Abort all executions of a test
* [createTestJson](docs/sdks/tests/README.md#createtestjson) - Create new test
* [createTestString](docs/sdks/tests/README.md#createteststring) - Create new test
* [deleteTest](docs/sdks/tests/README.md#deletetest) - Delete test
* [deleteTests](docs/sdks/tests/README.md#deletetests) - Delete tests
* [executeTest](docs/sdks/tests/README.md#executetest) - Starts new test execution
* [executeTests](docs/sdks/tests/README.md#executetests) - Starts new test executions
* [getTest](docs/sdks/tests/README.md#gettest) - Get test
* [getTestExecution](docs/sdks/tests/README.md#gettestexecution) - Get test execution
* [getTestMetrics](docs/sdks/tests/README.md#gettestmetrics) - Get test metrics
* [getTestSuiteMetrics](docs/sdks/tests/README.md#gettestsuitemetrics) - Get test suite metrics
* [getTestWithExecution](docs/sdks/tests/README.md#gettestwithexecution) - Get test with execution
* [listTestExecutions](docs/sdks/tests/README.md#listtestexecutions) - Get all test executions
* [listTestWithExecutions](docs/sdks/tests/README.md#listtestwithexecutions) - List test with executions
* [listTests](docs/sdks/tests/README.md#listtests) - List tests
* [updateTestJson](docs/sdks/tests/README.md#updatetestjson) - Update test
* [updateTestString](docs/sdks/tests/README.md#updateteststring) - Update test
* [uploads](docs/sdks/tests/README.md#uploads) - Upload file

### [webhook](docs/sdks/webhook/README.md)

* [createWebhookJson](docs/sdks/webhook/README.md#createwebhookjson) - Create new webhook
* [createWebhookString](docs/sdks/webhook/README.md#createwebhookstring) - Create new webhook
* [deleteWebhook](docs/sdks/webhook/README.md#deletewebhook) - Delete webhook
* [deleteWebhooks](docs/sdks/webhook/README.md#deletewebhooks) - Delete webhooks
* [getWebhook](docs/sdks/webhook/README.md#getwebhook) - Get webhook details
* [listWebhooks](docs/sdks/webhook/README.md#listwebhooks) - List webhooks
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
