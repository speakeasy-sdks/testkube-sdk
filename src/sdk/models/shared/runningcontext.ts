/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * One of possible context types
 */
export enum RunningContextType {
    UserCLI = "userCLI",
    UserUI = "userUI",
    Testsuite = "testsuite",
    Testtrigger = "testtrigger",
    Scheduler = "scheduler",
}

/**
 * running context for test or test suite execution
 */
export class RunningContext extends SpeakeasyBase {
    /**
     * Context value depending from its type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "context" })
    context?: string;

    /**
     * One of possible context types
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: RunningContextType;
}
