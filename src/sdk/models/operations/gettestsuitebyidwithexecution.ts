/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetTestSuiteByIDWithExecutionRequest extends SpeakeasyBase {
    /**
     * unique id of the object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class GetTestSuiteByIDWithExecutionResponse extends SpeakeasyBase {
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
    testSuiteWithExecution?: shared.TestSuiteWithExecution;

    /**
     * problem with getting test suite with execution from storage
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    classes?: shared.Problem[];

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    res?: string;
}
