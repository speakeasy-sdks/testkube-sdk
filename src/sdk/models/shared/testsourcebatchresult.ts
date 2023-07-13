/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Test source batch result
 */
export class TestSourceBatchResult extends SpeakeasyBase {
    /**
     * created test sources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created?: string[];

    /**
     * deleted test sources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deleted" })
    deleted?: string[];

    /**
     * updated test sources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated" })
    updated?: string[];
}