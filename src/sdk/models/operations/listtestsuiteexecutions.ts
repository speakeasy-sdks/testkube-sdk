/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { AxiosResponse } from "axios";

export class ListTestSuiteExecutionsRequest extends SpeakeasyBase {
    /**
     * endDate for filtering
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
    endDate?: RFCDate;

    /**
     * unique id of the object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * the page index to start at
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * the number of executions to get, setting to 0 will return only totals
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
    pageSize?: number;

    /**
     * startDate for filtering in ISO-8601 format, i.e. "yyyy-mm-dd"
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
    startDate?: RFCDate;

    /**
     * optional status filter containing multiple values separated by comma
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: shared.TestSuiteExecutionStatus;
}

export class ListTestSuiteExecutionsResponse extends SpeakeasyBase {
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

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    testSuiteExecutionsResult?: shared.TestSuiteExecutionsResult;

    /**
     * problem with getting test suite executions from storage
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    classes?: shared.Problem[];
}
