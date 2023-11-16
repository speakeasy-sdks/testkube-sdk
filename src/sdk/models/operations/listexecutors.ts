/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListExecutorsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selector" })
    selector?: string;
}

export class ListExecutorsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    @SpeakeasyMetadata({ elemType: shared.Executor })
    twoHundredApplicationJsonClasses?: shared.Executor[];

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
