/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTestMetricsRequest extends SpeakeasyBase {
    /**
     * unique id of the object
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * last N days to show
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last" })
    last?: number;

    /**
     * limit records count same as pageSize
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;
}

export class GetTestMetricsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * successful operation
     */
    @SpeakeasyMetadata()
    executionsMetrics?: shared.ExecutionsMetrics;

    /**
     * problem with getting metrics
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    problems?: shared.Problem[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}