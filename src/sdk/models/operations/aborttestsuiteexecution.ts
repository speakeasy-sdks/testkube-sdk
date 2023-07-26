/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AbortTestSuiteExecutionRequest extends SpeakeasyBase {
    /**
     * unique id of the object execution
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionID" })
    executionID: string;

    /**
     * unique id of the object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class AbortTestSuiteExecutionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * test suite not found
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    problems?: shared.Problem[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
