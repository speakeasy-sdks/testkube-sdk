/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
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
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * problem with input for CRD generation
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    problems?: shared.Problem[];

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
    @SpeakeasyMetadata({ elemType: shared.TestSuite })
    testSuites?: shared.TestSuite[];

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    listTestSuites200TextYamlString?: string;
}
