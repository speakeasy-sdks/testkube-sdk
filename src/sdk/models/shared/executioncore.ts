/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExecutionStatus } from "./executionstatus";
import { Expose, Transform } from "class-transformer";

/**
 * test execution core
 */
export class ExecutionCore extends SpeakeasyBase {
    /**
     * test end time
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
     * execution number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number?: number;

    /**
     * test start time
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startTime?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ExecutionStatus;
}
