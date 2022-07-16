/* tslint:disable */
/* eslint-disable */
/**
 * Goovi ID
 * GOOVI ID Website spec
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VideoInfo
 */
export interface VideoInfo {
    /**
     * 
     * @type {boolean}
     * @memberof VideoInfo
     */
    isHdr?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VideoInfo
     */
    isMultiChannelAudio?: boolean;
    /**
     * 
     * @type {number}
     * @memberof VideoInfo
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoInfo
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoInfo
     */
    fps?: number;
    /**
     * 
     * @type {string}
     * @memberof VideoInfo
     */
    codecName?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoInfo
     */
    codecType?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoInfo
     */
    resolutionHuman?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoInfo
     */
    bitrate?: string;
    /**
     * 
     * @type {string}
     * @memberof VideoInfo
     */
    displayAspectRatio?: string;
    /**
     * 
     * @type {number}
     * @memberof VideoInfo
     */
    aspectRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof VideoInfo
     */
    duration?: number;
}

/**
 * Check if a given object implements the VideoInfo interface.
 */
export function instanceOfVideoInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VideoInfoFromJSON(json: any): VideoInfo {
    return VideoInfoFromJSONTyped(json, false);
}

export function VideoInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VideoInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isHdr': !exists(json, 'is_hdr') ? undefined : json['is_hdr'],
        'isMultiChannelAudio': !exists(json, 'is_multi_channel_audio') ? undefined : json['is_multi_channel_audio'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'fps': !exists(json, 'fps') ? undefined : json['fps'],
        'codecName': !exists(json, 'codec_name') ? undefined : json['codec_name'],
        'codecType': !exists(json, 'codec_type') ? undefined : json['codec_type'],
        'resolutionHuman': !exists(json, 'resolution_human') ? undefined : json['resolution_human'],
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'displayAspectRatio': !exists(json, 'display_aspect_ratio') ? undefined : json['display_aspect_ratio'],
        'aspectRatio': !exists(json, 'aspect_ratio') ? undefined : json['aspect_ratio'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
    };
}

export function VideoInfoToJSON(value?: VideoInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_hdr': value.isHdr,
        'is_multi_channel_audio': value.isMultiChannelAudio,
        'width': value.width,
        'height': value.height,
        'fps': value.fps,
        'codec_name': value.codecName,
        'codec_type': value.codecType,
        'resolution_human': value.resolutionHuman,
        'bitrate': value.bitrate,
        'display_aspect_ratio': value.displayAspectRatio,
        'aspect_ratio': value.aspectRatio,
        'duration': value.duration,
    };
}

