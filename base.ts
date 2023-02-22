/* tslint:disable */
/* eslint-disable */
/**
 * VideoEngager SDK API
 * API for VideoEngager SDK
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@videoengager.com
 *
 * NOTE: This module is auto generated usen openapi-generator (https://openapi-generator.tech).
 * MIT License (https://opensource.org/licenses/MIT)
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://prod.leadsecure.com".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}
