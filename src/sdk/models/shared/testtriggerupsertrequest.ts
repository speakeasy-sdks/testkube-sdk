/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestTriggerActions } from "./testtriggeractions";
import { TestTriggerConditionSpec } from "./testtriggerconditionspec";
import { TestTriggerExecutions } from "./testtriggerexecutions";
import { TestTriggerProbeSpec } from "./testtriggerprobespec";
import { TestTriggerResources } from "./testtriggerresources";
import { TestTriggerSelector } from "./testtriggerselector";
import { Expose, Type } from "class-transformer";

/**
 * test trigger create or update request body
 */
export class TestTriggerUpsertRequest extends SpeakeasyBase {
    /**
     * supported actions for test triggers
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action: TestTriggerActions;

    @SpeakeasyMetadata()
    @Expose({ name: "conditionSpec" })
    @Type(() => TestTriggerConditionSpec)
    conditionSpec?: TestTriggerConditionSpec;

    /**
     * listen for event for selected resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event: string;

    /**
     * supported test resources for test triggers
     */
    @SpeakeasyMetadata()
    @Expose({ name: "execution" })
    execution: TestTriggerExecutions;

    /**
     * test trigger labels
     */
    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    /**
     * object name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * object kubernetes namespace
     */
    @SpeakeasyMetadata()
    @Expose({ name: "namespace" })
    namespace?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "probeSpec" })
    @Type(() => TestTriggerProbeSpec)
    probeSpec?: TestTriggerProbeSpec;

    /**
     * supported kubernetes resources for test triggers
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource" })
    resource: TestTriggerResources;

    @SpeakeasyMetadata()
    @Expose({ name: "resourceSelector" })
    @Type(() => TestTriggerSelector)
    resourceSelector: TestTriggerSelector;

    @SpeakeasyMetadata()
    @Expose({ name: "testSelector" })
    @Type(() => TestTriggerSelector)
    testSelector: TestTriggerSelector;
}
