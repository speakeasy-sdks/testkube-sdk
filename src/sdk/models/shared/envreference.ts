/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
import { Expose, Type } from "class-transformer";

/**
 * Reference to env resource
 */
export class EnvReference extends SpeakeasyBase {
    /**
     * whether we shoud map to variables from resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mapToVariables" })
    mapToVariables?: boolean;

    /**
     * whether we shoud mount resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mount" })
    mount?: boolean;

    /**
     * where we shoud mount resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mountPath" })
    mountPath?: string;

    /**
     * Reference to Kubernetes object
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reference" })
    @Type(() => LocalObjectReference)
    reference: LocalObjectReference;
}