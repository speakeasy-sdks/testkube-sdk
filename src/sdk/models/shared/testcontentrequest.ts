/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RepositoryParameters } from "./repositoryparameters";
import { Expose, Type } from "class-transformer";

/**
 * test content request body
 */
export class TestContentRequest extends SpeakeasyBase {
    /**
     * repository parameters for tests in git repositories
     */
    @SpeakeasyMetadata()
    @Expose({ name: "repository" })
    @Type(() => RepositoryParameters)
    repository?: RepositoryParameters;
}