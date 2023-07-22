/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestTriggerProbe } from "./testtriggerprobe";
import { Expose, Type } from "class-transformer";

export class TestTriggerProbeSpec extends SpeakeasyBase {
    /**
     * duration in seconds the test trigger waits between probes
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delay" })
    delay?: number;

    /**
     * list of test trigger probes
     */
    @SpeakeasyMetadata({ elemType: TestTriggerProbe })
    @Expose({ name: "probes" })
    @Type(() => TestTriggerProbe)
    probes?: TestTriggerProbe[];

    /**
     * duration in seconds the test trigger waits for probes, until its stopped
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timeout" })
    timeout?: number;
}
