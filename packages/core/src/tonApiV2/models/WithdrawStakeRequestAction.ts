/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PoolImplementationType } from './PoolImplementationType';
import {
    PoolImplementationTypeFromJSON,
    PoolImplementationTypeFromJSONTyped,
    PoolImplementationTypeToJSON,
} from './PoolImplementationType';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * validator's participation in elections
 * @export
 * @interface WithdrawStakeRequestAction
 */
export interface WithdrawStakeRequestAction {
    /**
     * 
     * @type {number}
     * @memberof WithdrawStakeRequestAction
     */
    amount?: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof WithdrawStakeRequestAction
     */
    staker: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof WithdrawStakeRequestAction
     */
    pool: AccountAddress;
    /**
     * 
     * @type {PoolImplementationType}
     * @memberof WithdrawStakeRequestAction
     */
    implementation: PoolImplementationType;
}



/**
 * Check if a given object implements the WithdrawStakeRequestAction interface.
 */
export function instanceOfWithdrawStakeRequestAction(value: object): value is WithdrawStakeRequestAction {
    if (!('staker' in value) || value['staker'] === undefined) return false;
    if (!('pool' in value) || value['pool'] === undefined) return false;
    if (!('implementation' in value) || value['implementation'] === undefined) return false;
    return true;
}

export function WithdrawStakeRequestActionFromJSON(json: any): WithdrawStakeRequestAction {
    return WithdrawStakeRequestActionFromJSONTyped(json, false);
}

export function WithdrawStakeRequestActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WithdrawStakeRequestAction {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'staker': AccountAddressFromJSON(json['staker']),
        'pool': AccountAddressFromJSON(json['pool']),
        'implementation': PoolImplementationTypeFromJSON(json['implementation']),
    };
}

export function WithdrawStakeRequestActionToJSON(value?: WithdrawStakeRequestAction | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'amount': value['amount'],
        'staker': AccountAddressToJSON(value['staker']),
        'pool': AccountAddressToJSON(value['pool']),
        'implementation': PoolImplementationTypeToJSON(value['implementation']),
    };
}

