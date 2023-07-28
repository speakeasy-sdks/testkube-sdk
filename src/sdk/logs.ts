/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Log operations
 */
export enum GetExecutionLogsAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
}

export class Logs {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get execution's logs by ID
     *
     * @remarks
     * Returns logs of the given executionID
     */
    async getExecutionLogs(
        req: operations.GetExecutionLogsRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetExecutionLogsAcceptEnum
    ): Promise<operations.GetExecutionLogsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetExecutionLogsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/executions/{id}/logs", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/problem+json;q=0";
        }

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetExecutionLogsResponse = new operations.GetExecutionLogsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.executorOutputs = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.executorOutputs = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExecutorOutput,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
