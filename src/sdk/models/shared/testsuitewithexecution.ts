/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestSuite } from "./testsuite";
import { TestSuiteExecution } from "./testsuiteexecution";
import { Expose, Type } from "class-transformer";

/**
 * Test suite with latest execution result
 */
export class TestSuiteWithExecution extends SpeakeasyBase {
    /**
     * Test suite executions data
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latestExecution" })
    @Type(() => TestSuiteExecution)
    latestExecution?: TestSuiteExecution;

    @SpeakeasyMetadata()
    @Expose({ name: "testSuite" })
    @Type(() => TestSuite)
    testSuite: TestSuite;
}
