/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Testkube debug info
 */
export class DebugInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "apiLogs" })
    apiLogs?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "clientVersion" })
    clientVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clusterVersion" })
    clusterVersion?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "executionLogs" })
    executionLogs?: Record<string, string[]>;

    @SpeakeasyMetadata()
    @Expose({ name: "operatorLogs" })
    operatorLogs?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "serverVersion" })
    serverVersion?: string;
}