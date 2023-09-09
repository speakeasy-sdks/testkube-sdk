/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TestTriggerKeyMap extends SpeakeasyBase {
    /**
     * list of supported values for resources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actions" })
    actions: string[];

    /**
     * list of supported values for conditions
     */
    @SpeakeasyMetadata()
    @Expose({ name: "conditions" })
    conditions?: string[];

    /**
     * mapping between resources and supported events
     */
    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    events: Record<string, string[]>;

    /**
     * list of supported values for resources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "executions" })
    executions: string[];

    /**
     * list of supported values for resources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resources" })
    resources: string[];
}
