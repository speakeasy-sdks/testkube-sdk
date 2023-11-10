/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ObjectRef } from "./objectref";
import { RunningContext } from "./runningcontext";
import { TestSuiteBatchStepExecutionResult } from "./testsuitebatchstepexecutionresult";
import { TestSuiteExecutionStatus } from "./testsuiteexecutionstatus";
import { TestSuiteStepExecutionResultV2 } from "./testsuitestepexecutionresultv2";
import { Variable } from "./variable";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Test suite executions data
 */
export class TestSuiteExecution extends SpeakeasyBase {
    /**
     * test duration
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration?: string;

    /**
     * test duration in ms
     */
    @SpeakeasyMetadata()
    @Expose({ name: "durationMs" })
    durationMs?: number;

    /**
     * test end time
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endTime?: Date;

    /**
     * Environment variables passed to executor. Deprecated: use Basic Variables instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "envs" })
    envs?: Record<string, string>;

    /**
     * batch steps execution results
     */
    @SpeakeasyMetadata({ elemType: TestSuiteBatchStepExecutionResult })
    @Expose({ name: "executeStepResults" })
    @Type(() => TestSuiteBatchStepExecutionResult)
    executeStepResults?: TestSuiteBatchStepExecutionResult[];

    /**
     * execution id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * test suite labels
     */
    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    /**
     * execution name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * running context for test or test suite execution
     */
    @SpeakeasyMetadata()
    @Expose({ name: "runningContext" })
    @Type(() => RunningContext)
    runningContext?: RunningContext;

    /**
     * secret uuid
     */
    @SpeakeasyMetadata()
    @Expose({ name: "secretUUID" })
    secretUUID?: string;

    /**
     * test start time
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TestSuiteExecutionStatus;

    /**
     * steps execution results
     */
    @SpeakeasyMetadata({ elemType: TestSuiteStepExecutionResultV2 })
    @Expose({ name: "stepResults" })
    @Type(() => TestSuiteStepExecutionResultV2)
    stepResults?: TestSuiteStepExecutionResultV2[];

    @SpeakeasyMetadata()
    @Expose({ name: "testSuite" })
    @Type(() => ObjectRef)
    testSuite: ObjectRef;

    /**
     * execution variables passed to executor converted to vars for usage in tests
     */
    @SpeakeasyMetadata({ elemType: Variable })
    @Expose({ name: "variables" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, Variable> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], Variable);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    variables?: Record<string, Variable>;
}
