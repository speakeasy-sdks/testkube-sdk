/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TestSuiteStepDelayV2 extends SpeakeasyBase {
    /**
     * delay duration in milliseconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration?: number;
}
