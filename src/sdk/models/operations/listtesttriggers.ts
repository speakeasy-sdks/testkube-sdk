/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListTestTriggersRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespace" })
    namespace?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=selector" })
    selector?: string;
}

export class ListTestTriggersResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * problem with selector parsing - probably some bad input occurs
     */
    @SpeakeasyMetadata({ elemType: shared.Problem })
    problems?: shared.Problem[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * successful list operation
     */
    @SpeakeasyMetadata({ elemType: shared.TestTrigger })
    testTriggers?: shared.TestTrigger[];

    /**
     * successful list operation
     */
    @SpeakeasyMetadata()
    listTestTriggers200TextYamlString?: string;
}