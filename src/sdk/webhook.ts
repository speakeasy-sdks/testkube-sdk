/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Webhook operations
 */
export class Webhook {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create new webhook
     *
     * @remarks
     * Create new webhook based on variables passed in request
     */
    async createWebhookJson(
        req: shared.WebhookCreateRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateWebhookJsonResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.WebhookCreateRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/webhooks";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.CreateWebhookJsonResponse = new operations.CreateWebhookJsonResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.createWebhookJson200TextYamlString = decodedRes;
                }
                break;
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhook = utils.objectToClass(JSON.parse(decodedRes), shared.Webhook);
                }
                break;
            case [400, 502].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Create new webhook
     *
     * @remarks
     * Create new webhook based on variables passed in request
     */
    async createWebhookString(
        req: string,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateWebhookStringResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/webhooks";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "string");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.CreateWebhookStringResponse =
            new operations.CreateWebhookStringResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.createWebhookString200TextYamlString = decodedRes;
                }
                break;
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhook = utils.objectToClass(JSON.parse(decodedRes), shared.Webhook);
                }
                break;
            case [400, 502].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete webhook
     *
     * @remarks
     * Deletes webhook by its name
     */
    async deleteWebhook(
        req: operations.DeleteWebhookRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteWebhookResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWebhookRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/webhooks/{id}", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/problem+json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.DeleteWebhookResponse = new operations.DeleteWebhookResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 204:
                break;
            case [404, 502].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete webhooks
     *
     * @remarks
     * Deletes labeled webhooks
     */
    async deleteWebhooks(
        req: operations.DeleteWebhooksRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteWebhooksResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteWebhooksRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/webhooks";

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/problem+json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.DeleteWebhooksResponse = new operations.DeleteWebhooksResponse({
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
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get webhook details
     *
     * @remarks
     * Returns webhook
     */
    async getWebhook(
        req: operations.GetWebhookRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetWebhookResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWebhookRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/webhooks/{id}", req);

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
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

        const res: operations.GetWebhookResponse = new operations.GetWebhookResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhook = utils.objectToClass(JSON.parse(decodedRes), shared.Webhook);
                }
                if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.getWebhook200TextYamlString = decodedRes;
                }
                break;
            case [400, 404, 500, 502].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }

    /**
     * List webhooks
     *
     * @remarks
     * List webhooks available in cluster
     */
    async listWebhooks(
        req: operations.ListWebhooksRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.ListWebhooksResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListWebhooksRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/webhooks";

        const client: AxiosInstance = this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/problem+json;q=0.7, text/yaml;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

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

        const res: operations.ListWebhooksResponse = new operations.ListWebhooksResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.webhooks = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.webhooks = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Webhook,
                        resFieldDepth
                    );
                }
                if (utils.matchContentType(contentType, `text/yaml`)) {
                    res.listWebhooks200TextYamlString = decodedRes;
                }
                break;
            case [400, 502].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/problem+json`)) {
                    res.problems = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.problems = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.Problem,
                        resFieldDepth
                    );
                }
                break;
        }

        return res;
    }
}