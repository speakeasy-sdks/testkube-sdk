/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class CreateTestTriggerStringResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    twoHundredTextYamlRes?: string;

    /**
     * problem with test trigger definition - probably some bad input occurs (invalid JSON body or similar)
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fourHundredApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * problem communicating with kubernetes cluster
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
    rawResponse?: AxiosResponse;

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    testTrigger?: shared.TestTrigger;
}
