/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestSuiteExecutionStatus } from "./testsuiteexecutionstatus";
import { Expose, Transform } from "class-transformer";

/**
 * test suite execution core
 */
export class TestSuiteExecutionCore extends SpeakeasyBase {
    /**
     * test suite execution end time
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    endTime?: Date;

    /**
     * execution id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * test suite execution start time
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: TestSuiteExecutionStatus;
}
