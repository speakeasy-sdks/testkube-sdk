/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Executor operations
 */
export enum CreateExecutorJsonAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
    textYaml = "text/yaml",
}

export enum CreateExecutorStringAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
    textYaml = "text/yaml",
}

export enum GetExecutorAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
    textYaml = "text/yaml",
}

export enum ListExecutorsAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
    textYaml = "text/yaml",
}

export enum UpdateExecutorJsonAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
}

export enum UpdateExecutorStringAcceptEnum {
    applicationJson = "application/json",
    applicationProblemPlusJson = "application/problem+json",
}

export class Executor {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create new executor
     *
     * @remarks
     * Create new executor based on variables passed in request
     */
    async createExecutorJson(
        req: shared.ExecutorUpsertRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: CreateExecutorJsonAcceptEnum
    ): Promise<operations.CreateExecutorJsonResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.ExecutorUpsertRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/executors";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null) throw new Error("request body is required");
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] =
                "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateExecutorJsonResponse =
            new operations.CreateExecutorJsonResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.twoHundredTextYamlRes = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.executorDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExecutorDetails
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
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = utils.objectToClass(
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

    /**
     * Create new executor
     *
     * @remarks
     * Create new executor based on variables passed in request
     */
    async createExecutorString(
        req: string,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: CreateExecutorStringAcceptEnum
    ): Promise<operations.CreateExecutorStringResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/executors";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null) throw new Error("request body is required");
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] =
                "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateExecutorStringResponse =
            new operations.CreateExecutorStringResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.twoHundredTextYamlRes = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.executorDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExecutorDetails
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
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = utils.objectToClass(
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

    /**
     * Delete executor
     *
     * @remarks
     * Deletes executor by its name
     */
    async deleteExecutor(
        req: operations.DeleteExecutorRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteExecutorResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteExecutorRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/executors/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...config?.headers };
        headers["Accept"] = "application/problem+json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteExecutorResponse = new operations.DeleteExecutorResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 204:
                break;
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.classes = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.classes = utils.objectToClass(
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

    /**
     * Delete executors
     *
     * @remarks
     * Deletes labeled executors
     */
    async deleteExecutors(
        req: operations.DeleteExecutorsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteExecutorsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteExecutorsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/executors";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/problem+json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteExecutorsResponse = new operations.DeleteExecutorsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 204:
                break;
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.classes = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.classes = utils.objectToClass(
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

    /**
     * Get executor details
     *
     * @remarks
     * Returns executors data with executions passed to executor
     */
    async getExecutor(
        req: operations.GetExecutorRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetExecutorAcceptEnum
    ): Promise<operations.GetExecutorResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetExecutorRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/executors/{id}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...config?.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] =
                "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

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

        const res: operations.GetExecutorResponse = new operations.GetExecutorResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.executorDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExecutorDetails
                    );
                } else if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.twoHundredTextYamlRes = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = utils.objectToClass(
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

    /**
     * List executors
     *
     * @remarks
     * List executors available in cluster
     */
    async listExecutors(
        req: operations.ListExecutorsRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: ListExecutorsAcceptEnum
    ): Promise<operations.ListExecutorsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListExecutorsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/executors";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] =
                "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ListExecutorsResponse = new operations.ListExecutorsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.twoHundredApplicationJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.twoHundredApplicationJsonClasses = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Executor,
                        resFieldDepth
                    );
                } else if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.twoHundredTextYamlRes = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = utils.objectToClass(
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

    /**
     * Update executor
     *
     * @remarks
     * Update new executor based on variables passed in request
     */
    async updateExecutorJson(
        req: operations.UpdateExecutorJsonRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: UpdateExecutorJsonAcceptEnum
    ): Promise<operations.UpdateExecutorJsonResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateExecutorJsonRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/executors/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "executorUpdateRequest",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null) throw new Error("request body is required");
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/problem+json;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateExecutorJsonResponse =
            new operations.UpdateExecutorJsonResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.executorDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExecutorDetails
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
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredAndFourApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredAndFourApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = utils.objectToClass(
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

    /**
     * Update executor
     *
     * @remarks
     * Update new executor based on variables passed in request
     */
    async updateExecutorString(
        req: operations.UpdateExecutorStringRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: UpdateExecutorStringAcceptEnum
    ): Promise<operations.UpdateExecutorStringResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateExecutorStringRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/executors/{id}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        const headers: RawAxiosRequestHeaders = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null) throw new Error("request body is required");
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/problem+json;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "patch",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateExecutorStringResponse =
            new operations.UpdateExecutorStringResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.executorDetails = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ExecutorDetails
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
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 404:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fourHundredAndFourApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fourHundredAndFourApplicationProblemPlusJsonClasses = utils.objectToClass(
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
            case httpRes?.status == 502:
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.fiveHundredAndTwoApplicationProblemPlusJsonClasses = utils.objectToClass(
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
