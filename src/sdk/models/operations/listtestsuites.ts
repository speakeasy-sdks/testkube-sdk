/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListTestSuitesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selector" })
    selector?: string;

    /**
     * text to search in name and test name
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
    textSearch?: string;
}

export class ListTestSuitesResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.TestSuite })
    twoHundredApplicationJsonClasses?: shared.TestSuite[];

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    twoHundredTextYamlRes?: string;

    /**
     * problem with input for CRD generation
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fourHundredApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * problem with listing test suites from kubernetes cluster
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
