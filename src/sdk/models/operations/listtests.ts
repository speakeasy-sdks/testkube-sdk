/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListTestsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selector" })
    selector?: string;

    /**
     * text to search in name and test name
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
    textSearch?: string;
}

export class ListTestsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.Test })
    twoHundredApplicationJsonClasses?: shared.Test[];

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    twoHundredTextYamlRes?: string;

    /**
     * invalid parameters
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    fourHundredApplicationProblemPlusJsonClasses?: shared.Problem[];

    /**
     * problem with read information from kubernetes cluster
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
