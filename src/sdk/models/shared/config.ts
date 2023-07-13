/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Testkube API config data structure
 */
export class Config extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clusterId" })
    clusterId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "enableTelemetry" })
    enableTelemetry: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}