/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateTestSuiteStringRequest extends SpeakeasyBase {
    /**
     * test suite details body
     */
    @SpeakeasyMetadata({ data: "request, media_type=text/yaml" })
    requestBody: string;

    /**
     * unique id of the object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class UpdateTestSuiteStringResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * problem with test suite definition - probably some bad input occurs (invalid JSON body or similar)
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
    @SpeakeasyMetadata()
    testSuite?: shared.TestSuite;
}
