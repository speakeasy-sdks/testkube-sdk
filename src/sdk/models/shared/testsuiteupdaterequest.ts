/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestSuiteBatchStep } from "./testsuitebatchstep";
import { TestSuiteExecutionRequestInput } from "./testsuiteexecutionrequest";
import { TestSuiteStatus } from "./testsuitestatus";
import { Expose, Transform, Type } from "class-transformer";

/**
 * test suite update body
 */
export class TestSuiteUpdateRequest extends SpeakeasyBase {
    /**
     * Run these batch steps after whole suite
     */
    @SpeakeasyMetadata({ elemType: TestSuiteBatchStep })
    @Expose({ name: "after" })
    @Type(() => TestSuiteBatchStep)
    after?: TestSuiteBatchStep[];

    /**
     * Run these batch steps before whole suite
     */
    @SpeakeasyMetadata({ elemType: TestSuiteBatchStep })
    @Expose({ name: "before" })
    @Type(() => TestSuiteBatchStep)
    before?: TestSuiteBatchStep[];

    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    created?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * test suite execution request body
     */
    @SpeakeasyMetadata()
    @Expose({ name: "executionRequest" })
    @Type(() => TestSuiteExecutionRequestInput)
    executionRequest?: TestSuiteExecutionRequestInput;

    /**
     * test suite labels
     */
    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    /**
     * object name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * object kubernetes namespace
     */
    @SpeakeasyMetadata()
    @Expose({ name: "namespace" })
    namespace?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "repeats" })
    repeats?: number;

    /**
     * schedule to run test suite
     */
    @SpeakeasyMetadata()
    @Expose({ name: "schedule" })
    schedule?: string;

    /**
     * test suite status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => TestSuiteStatus)
    status: TestSuiteStatus;

    /**
     * Batch steps to run
     */
    @SpeakeasyMetadata({ elemType: TestSuiteBatchStep })
    @Expose({ name: "steps" })
    @Type(() => TestSuiteBatchStep)
    steps?: TestSuiteBatchStep[];
}
