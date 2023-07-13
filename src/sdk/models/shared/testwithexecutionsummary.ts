/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExecutionSummary } from "./executionsummary";
import { Test } from "./test";
import { Expose, Type } from "class-transformer";

/**
 * Test with latest Execution result summary
 */
export class TestWithExecutionSummary extends SpeakeasyBase {
    /**
     * Execution summary
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latestExecution" })
    @Type(() => ExecutionSummary)
    latestExecution?: ExecutionSummary;

    @SpeakeasyMetadata()
    @Expose({ name: "test" })
    @Type(() => Test)
    test: Test;
}