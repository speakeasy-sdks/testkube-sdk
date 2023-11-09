/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Api } from "./api";
import { Artifacts } from "./artifacts";
import { Executions } from "./executions";
import { Executor } from "./executor";
import { Keymap } from "./keymap";
import { Labels } from "./labels";
import { Logs } from "./logs";
import { Repository } from "./repository";
import { Tests } from "./tests";
import { TestSources } from "./testsources";
import { TestSuites } from "./testsuites";
import { TestTriggers } from "./testtriggers";
import { Webhook } from "./webhook";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Testkube API server
     */
    "https://demo.testkube.io/results/v1",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "2.1.0";
    genVersion = "2.185.0";
    userAgent = "speakeasy-sdk/typescript 2.1.0 2.185.0 1.0.0 testkube-sdk";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Testkube API: Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * @see {@link https://testkube.kubeshop.io/} - Find out more about Testkube
 */
export class TestkubeSDK {
    /**
     * Testkube API operations
     */
    public api: Api;
    /**
     * Tests operations
     */
    public tests: Tests;
    /**
     * Test suites and tests execution operations
     */
    public executions: Executions;
    /**
     * Artifact operations
     */
    public artifacts: Artifacts;
    /**
     * Log operations
     */
    public logs: Logs;
    /**
     * Executor operations
     */
    public executor: Executor;
    /**
     * Keymap for fields in a form
     */
    public keymap: Keymap;
    /**
     * Listing all available labels
     */
    public labels: Labels;
    public repository: Repository;
    public testSources: TestSources;
    /**
     * Test suites orchestration operations
     */
    public testSuites: TestSuites;
    /**
     * Test Triggers CRUD operations
     */
    public testTriggers: TestTriggers;
    /**
     * Webhook operations
     */
    public webhook: Webhook;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.api = new Api(this.sdkConfiguration);
        this.tests = new Tests(this.sdkConfiguration);
        this.executions = new Executions(this.sdkConfiguration);
        this.artifacts = new Artifacts(this.sdkConfiguration);
        this.logs = new Logs(this.sdkConfiguration);
        this.executor = new Executor(this.sdkConfiguration);
        this.keymap = new Keymap(this.sdkConfiguration);
        this.labels = new Labels(this.sdkConfiguration);
        this.repository = new Repository(this.sdkConfiguration);
        this.testSources = new TestSources(this.sdkConfiguration);
        this.testSuites = new TestSuites(this.sdkConfiguration);
        this.testTriggers = new TestTriggers(this.sdkConfiguration);
        this.webhook = new Webhook(this.sdkConfiguration);
    }
}
