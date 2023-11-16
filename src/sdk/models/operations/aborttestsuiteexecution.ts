/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
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
    /**
     * test suite not found
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fourHundredAndFourApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * problem with read information from storage
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fiveHundredApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
