/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExecutionsTotals } from "./executionstotals";
import { TestSuiteExecutionSummary } from "./testsuiteexecutionsummary";
import { Expose, Type } from "class-transformer";

/**
 * the result for a page of executions
 */
export class TestSuiteExecutionsResult extends SpeakeasyBase {
    /**
     * various execution counters
     */
    @SpeakeasyMetadata()
    @Expose({ name: "filtered" })
    @Type(() => ExecutionsTotals)
    filtered?: ExecutionsTotals;

    @SpeakeasyMetadata({ elemType: TestSuiteExecutionSummary })
    @Expose({ name: "results" })
    @Type(() => TestSuiteExecutionSummary)
    results: TestSuiteExecutionSummary[];

    /**
     * various execution counters
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totals" })
    @Type(() => ExecutionsTotals)
    totals: ExecutionsTotals;
}