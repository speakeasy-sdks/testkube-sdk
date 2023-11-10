/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum ParentType {
    Test = "test",
    Execution = "execution",
}

export class UploadsBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, name=filePath" })
    filePath?: string;

    @SpeakeasyMetadata({ data: "multipart_form, name=parentName" })
    parentName?: string;

    @SpeakeasyMetadata({ data: "multipart_form, name=parentType" })
    parentType?: ParentType;
}
