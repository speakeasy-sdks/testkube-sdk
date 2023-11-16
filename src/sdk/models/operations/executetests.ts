/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ExecuteTestsRequest extends SpeakeasyBase {
    /**
     * body passed to configure executions
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    executionRequest: shared.ExecutionRequestInput;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=concurrency" })
    concurrency?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=executionSelector" })
    executionSelector?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespace" })
    namespace?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selector" })
    selector?: string;
}

export class ExecuteTestsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.ExecutionResult })
    twoHundredAndOneApplicationJsonClasses?: shared.ExecutionResult[];

    /**
     * problem with request body
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fourHundredApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * test not found
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fourHundredAndFourApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * problem with test executions
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fiveHundredApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * problem with communicating with kubernetes cluster
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fiveHundredAndTwoApplicationProblemPlusJsonClasses?: shared.Problem[];

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
