/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExecutionStatus } from "./executionstatus";
import { ExecutionStepResult } from "./executionstepresult";
import { Expose, Type } from "class-transformer";

/**
 * output type depends of reporter used in particular tool
 */
export enum OutputType {
    TextPlain = "text/plain",
    ApplicationJunitPlusXml = "application/junit+xml",
    ApplicationJson = "application/json",
}

export class Reports extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "junit" })
    junit?: string;
}

/**
 * execution result returned from executor
 */
export class ExecutionResult extends SpeakeasyBase {
    /**
     * error message when status is error, separate to output as output can be partial in case of error
     */
    @SpeakeasyMetadata()
    @Expose({ name: "errorMessage" })
    errorMessage?: string;

    /**
     * RAW Test execution output, depends of reporter used in particular tool
     */
    @SpeakeasyMetadata()
    @Expose({ name: "output" })
    output?: string;

    /**
     * output type depends of reporter used in particular tool
     */
    @SpeakeasyMetadata()
    @Expose({ name: "outputType" })
    outputType?: OutputType;

    @SpeakeasyMetadata()
    @Expose({ name: "reports" })
    @Type(() => Reports)
    reports?: Reports;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: ExecutionStatus;

    /**
     * execution steps (for collection of requests)
     */
    @SpeakeasyMetadata({ elemType: ExecutionStepResult })
    @Expose({ name: "steps" })
    @Type(() => ExecutionStepResult)
    steps?: ExecutionStepResult[];
}
