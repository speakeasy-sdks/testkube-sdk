/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Executor meta data
 */
export class ExecutorMeta extends SpeakeasyBase {
    /**
     * URI for executor docs
     */
    @SpeakeasyMetadata()
    @Expose({ name: "docsURI" })
    docsURI?: string;

    /**
     * URI for executor icon
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iconURI" })
    iconURI?: string;

    /**
     * executor tooltips
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tooltips" })
    tooltips?: Record<string, string>;
}
