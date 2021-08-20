/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
    Callback,
    PayableTransactionObject,
    NonPayableTransactionObject,
    BlockType,
    ContractEventLog,
    BaseContract,
} from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export type BeforeAwardListenerSet = ContractEventLog<{
    beforeAwardListener: string
    0: string
}>
export type ExternalErc20AwardAdded = ContractEventLog<{
    externalErc20: string
    0: string
}>
export type ExternalErc20AwardRemoved = ContractEventLog<{
    externalErc20Award: string
    0: string
}>
export type ExternalErc721AwardAdded = ContractEventLog<{
    externalErc721: string
    tokenIds: string[]
    0: string
    1: string[]
}>
export type ExternalErc721AwardRemoved = ContractEventLog<{
    externalErc721Award: string
    0: string
}>
export type Initialized = ContractEventLog<{
    prizePeriodStart: string
    prizePeriodSeconds: string
    prizePool: string
    ticket: string
    sponsorship: string
    rng: string
    externalErc20Awards: string[]
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string[]
}>
export type NoWinners = ContractEventLog<{}>
export type NumberOfWinnersSet = ContractEventLog<{
    numberOfWinners: string
    0: string
}>
export type OwnershipTransferred = ContractEventLog<{
    previousOwner: string
    newOwner: string
    0: string
    1: string
}>
export type PeriodicPrizeStrategyListenerSet = ContractEventLog<{
    periodicPrizeStrategyListener: string
    0: string
}>
export type PrizePeriodSecondsUpdated = ContractEventLog<{
    prizePeriodSeconds: string
    0: string
}>
export type PrizePoolAwardCancelled = ContractEventLog<{
    operator: string
    prizePool: string
    rngRequestId: string
    rngLockBlock: string
    0: string
    1: string
    2: string
    3: string
}>
export type PrizePoolAwardStarted = ContractEventLog<{
    operator: string
    prizePool: string
    rngRequestId: string
    rngLockBlock: string
    0: string
    1: string
    2: string
    3: string
}>
export type PrizePoolAwarded = ContractEventLog<{
    operator: string
    randomNumber: string
    0: string
    1: string
}>
export type PrizePoolOpened = ContractEventLog<{
    operator: string
    prizePeriodStartedAt: string
    0: string
    1: string
}>
export type RngRequestFailed = ContractEventLog<{}>
export type RngRequestTimeoutSet = ContractEventLog<{
    rngRequestTimeout: string
    0: string
}>
export type RngServiceUpdated = ContractEventLog<{
    rngService: string
    0: string
}>
export type SplitExternalErc20AwardsSet = ContractEventLog<{
    splitExternalErc20Awards: boolean
    0: boolean
}>
export type TokenListenerUpdated = ContractEventLog<{
    tokenListener: string
    0: string
}>

export interface PoolTogetherPrizeStrategy extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): PoolTogetherPrizeStrategy
    clone(): PoolTogetherPrizeStrategy
    methods: {
        addExternalErc20Award(_externalErc20: string): NonPayableTransactionObject<void>

        addExternalErc20Awards(_externalErc20s: string[]): NonPayableTransactionObject<void>

        addExternalErc721Award(
            _externalErc721: string,
            _tokenIds: (number | string | BN)[],
        ): NonPayableTransactionObject<void>

        beforeAwardListener(): NonPayableTransactionObject<string>

        beforeTokenMint(
            to: string,
            amount: number | string | BN,
            controlledToken: string,
            referrer: string,
        ): NonPayableTransactionObject<void>

        beforeTokenTransfer(
            from: string,
            to: string,
            amount: number | string | BN,
            controlledToken: string,
        ): NonPayableTransactionObject<void>

        calculateNextPrizePeriodStartTime(currentTime: number | string | BN): NonPayableTransactionObject<string>

        canCompleteAward(): NonPayableTransactionObject<boolean>

        canStartAward(): NonPayableTransactionObject<boolean>

        cancelAward(): NonPayableTransactionObject<void>

        completeAward(): NonPayableTransactionObject<void>

        currentPrize(): NonPayableTransactionObject<string>

        estimateRemainingBlocksToPrize(
            secondsPerBlockMantissa: number | string | BN,
        ): NonPayableTransactionObject<string>

        getExternalErc20Awards(): NonPayableTransactionObject<string[]>

        getExternalErc721AwardTokenIds(_externalErc721: string): NonPayableTransactionObject<string[]>

        getExternalErc721Awards(): NonPayableTransactionObject<string[]>

        getLastRngLockBlock(): NonPayableTransactionObject<string>

        getLastRngRequestId(): NonPayableTransactionObject<string>

        initialize(
            _prizePeriodStart: number | string | BN,
            _prizePeriodSeconds: number | string | BN,
            _prizePool: string,
            _ticket: string,
            _sponsorship: string,
            _rng: string,
            externalErc20Awards: string[],
        ): NonPayableTransactionObject<void>

        initializeMultipleWinners(
            _prizePeriodStart: number | string | BN,
            _prizePeriodSeconds: number | string | BN,
            _prizePool: string,
            _ticket: string,
            _sponsorship: string,
            _rng: string,
            _numberOfWinners: number | string | BN,
        ): NonPayableTransactionObject<void>

        isPrizePeriodOver(): NonPayableTransactionObject<boolean>

        isRngCompleted(): NonPayableTransactionObject<boolean>

        isRngRequested(): NonPayableTransactionObject<boolean>

        isRngTimedOut(): NonPayableTransactionObject<boolean>

        numberOfWinners(): NonPayableTransactionObject<string>

        owner(): NonPayableTransactionObject<string>

        periodicPrizeStrategyListener(): NonPayableTransactionObject<string>

        prizePeriodEndAt(): NonPayableTransactionObject<string>

        prizePeriodRemainingSeconds(): NonPayableTransactionObject<string>

        prizePeriodSeconds(): NonPayableTransactionObject<string>

        prizePeriodStartedAt(): NonPayableTransactionObject<string>

        prizePool(): NonPayableTransactionObject<string>

        removeExternalErc20Award(_externalErc20: string, _prevExternalErc20: string): NonPayableTransactionObject<void>

        removeExternalErc721Award(
            _externalErc721: string,
            _prevExternalErc721: string,
        ): NonPayableTransactionObject<void>

        renounceOwnership(): NonPayableTransactionObject<void>

        rng(): NonPayableTransactionObject<string>

        rngRequestTimeout(): NonPayableTransactionObject<string>

        setBeforeAwardListener(_beforeAwardListener: string): NonPayableTransactionObject<void>

        setNumberOfWinners(count: number | string | BN): NonPayableTransactionObject<void>

        setPeriodicPrizeStrategyListener(_periodicPrizeStrategyListener: string): NonPayableTransactionObject<void>

        setPrizePeriodSeconds(_prizePeriodSeconds: number | string | BN): NonPayableTransactionObject<void>

        setRngRequestTimeout(_rngRequestTimeout: number | string | BN): NonPayableTransactionObject<void>

        setRngService(rngService: string): NonPayableTransactionObject<void>

        setSplitExternalErc20Awards(_splitExternalErc20Awards: boolean): NonPayableTransactionObject<void>

        setTokenListener(_tokenListener: string): NonPayableTransactionObject<void>

        splitExternalErc20Awards(): NonPayableTransactionObject<boolean>

        sponsorship(): NonPayableTransactionObject<string>

        startAward(): NonPayableTransactionObject<void>

        supportsInterface(interfaceId: string | number[]): NonPayableTransactionObject<boolean>

        ticket(): NonPayableTransactionObject<string>

        tokenListener(): NonPayableTransactionObject<string>

        transferOwnership(newOwner: string): NonPayableTransactionObject<void>
    }
    events: {
        BeforeAwardListenerSet(cb?: Callback<BeforeAwardListenerSet>): EventEmitter
        BeforeAwardListenerSet(options?: EventOptions, cb?: Callback<BeforeAwardListenerSet>): EventEmitter

        ExternalErc20AwardAdded(cb?: Callback<ExternalErc20AwardAdded>): EventEmitter
        ExternalErc20AwardAdded(options?: EventOptions, cb?: Callback<ExternalErc20AwardAdded>): EventEmitter

        ExternalErc20AwardRemoved(cb?: Callback<ExternalErc20AwardRemoved>): EventEmitter
        ExternalErc20AwardRemoved(options?: EventOptions, cb?: Callback<ExternalErc20AwardRemoved>): EventEmitter

        ExternalErc721AwardAdded(cb?: Callback<ExternalErc721AwardAdded>): EventEmitter
        ExternalErc721AwardAdded(options?: EventOptions, cb?: Callback<ExternalErc721AwardAdded>): EventEmitter

        ExternalErc721AwardRemoved(cb?: Callback<ExternalErc721AwardRemoved>): EventEmitter
        ExternalErc721AwardRemoved(options?: EventOptions, cb?: Callback<ExternalErc721AwardRemoved>): EventEmitter

        Initialized(cb?: Callback<Initialized>): EventEmitter
        Initialized(options?: EventOptions, cb?: Callback<Initialized>): EventEmitter

        NoWinners(cb?: Callback<NoWinners>): EventEmitter
        NoWinners(options?: EventOptions, cb?: Callback<NoWinners>): EventEmitter

        NumberOfWinnersSet(cb?: Callback<NumberOfWinnersSet>): EventEmitter
        NumberOfWinnersSet(options?: EventOptions, cb?: Callback<NumberOfWinnersSet>): EventEmitter

        OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter
        OwnershipTransferred(options?: EventOptions, cb?: Callback<OwnershipTransferred>): EventEmitter

        PeriodicPrizeStrategyListenerSet(cb?: Callback<PeriodicPrizeStrategyListenerSet>): EventEmitter
        PeriodicPrizeStrategyListenerSet(
            options?: EventOptions,
            cb?: Callback<PeriodicPrizeStrategyListenerSet>,
        ): EventEmitter

        PrizePeriodSecondsUpdated(cb?: Callback<PrizePeriodSecondsUpdated>): EventEmitter
        PrizePeriodSecondsUpdated(options?: EventOptions, cb?: Callback<PrizePeriodSecondsUpdated>): EventEmitter

        PrizePoolAwardCancelled(cb?: Callback<PrizePoolAwardCancelled>): EventEmitter
        PrizePoolAwardCancelled(options?: EventOptions, cb?: Callback<PrizePoolAwardCancelled>): EventEmitter

        PrizePoolAwardStarted(cb?: Callback<PrizePoolAwardStarted>): EventEmitter
        PrizePoolAwardStarted(options?: EventOptions, cb?: Callback<PrizePoolAwardStarted>): EventEmitter

        PrizePoolAwarded(cb?: Callback<PrizePoolAwarded>): EventEmitter
        PrizePoolAwarded(options?: EventOptions, cb?: Callback<PrizePoolAwarded>): EventEmitter

        PrizePoolOpened(cb?: Callback<PrizePoolOpened>): EventEmitter
        PrizePoolOpened(options?: EventOptions, cb?: Callback<PrizePoolOpened>): EventEmitter

        RngRequestFailed(cb?: Callback<RngRequestFailed>): EventEmitter
        RngRequestFailed(options?: EventOptions, cb?: Callback<RngRequestFailed>): EventEmitter

        RngRequestTimeoutSet(cb?: Callback<RngRequestTimeoutSet>): EventEmitter
        RngRequestTimeoutSet(options?: EventOptions, cb?: Callback<RngRequestTimeoutSet>): EventEmitter

        RngServiceUpdated(cb?: Callback<RngServiceUpdated>): EventEmitter
        RngServiceUpdated(options?: EventOptions, cb?: Callback<RngServiceUpdated>): EventEmitter

        SplitExternalErc20AwardsSet(cb?: Callback<SplitExternalErc20AwardsSet>): EventEmitter
        SplitExternalErc20AwardsSet(options?: EventOptions, cb?: Callback<SplitExternalErc20AwardsSet>): EventEmitter

        TokenListenerUpdated(cb?: Callback<TokenListenerUpdated>): EventEmitter
        TokenListenerUpdated(options?: EventOptions, cb?: Callback<TokenListenerUpdated>): EventEmitter

        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
    }

    once(event: 'BeforeAwardListenerSet', cb: Callback<BeforeAwardListenerSet>): void
    once(event: 'BeforeAwardListenerSet', options: EventOptions, cb: Callback<BeforeAwardListenerSet>): void

    once(event: 'ExternalErc20AwardAdded', cb: Callback<ExternalErc20AwardAdded>): void
    once(event: 'ExternalErc20AwardAdded', options: EventOptions, cb: Callback<ExternalErc20AwardAdded>): void

    once(event: 'ExternalErc20AwardRemoved', cb: Callback<ExternalErc20AwardRemoved>): void
    once(event: 'ExternalErc20AwardRemoved', options: EventOptions, cb: Callback<ExternalErc20AwardRemoved>): void

    once(event: 'ExternalErc721AwardAdded', cb: Callback<ExternalErc721AwardAdded>): void
    once(event: 'ExternalErc721AwardAdded', options: EventOptions, cb: Callback<ExternalErc721AwardAdded>): void

    once(event: 'ExternalErc721AwardRemoved', cb: Callback<ExternalErc721AwardRemoved>): void
    once(event: 'ExternalErc721AwardRemoved', options: EventOptions, cb: Callback<ExternalErc721AwardRemoved>): void

    once(event: 'Initialized', cb: Callback<Initialized>): void
    once(event: 'Initialized', options: EventOptions, cb: Callback<Initialized>): void

    once(event: 'NoWinners', cb: Callback<NoWinners>): void
    once(event: 'NoWinners', options: EventOptions, cb: Callback<NoWinners>): void

    once(event: 'NumberOfWinnersSet', cb: Callback<NumberOfWinnersSet>): void
    once(event: 'NumberOfWinnersSet', options: EventOptions, cb: Callback<NumberOfWinnersSet>): void

    once(event: 'OwnershipTransferred', cb: Callback<OwnershipTransferred>): void
    once(event: 'OwnershipTransferred', options: EventOptions, cb: Callback<OwnershipTransferred>): void

    once(event: 'PeriodicPrizeStrategyListenerSet', cb: Callback<PeriodicPrizeStrategyListenerSet>): void
    once(
        event: 'PeriodicPrizeStrategyListenerSet',
        options: EventOptions,
        cb: Callback<PeriodicPrizeStrategyListenerSet>,
    ): void

    once(event: 'PrizePeriodSecondsUpdated', cb: Callback<PrizePeriodSecondsUpdated>): void
    once(event: 'PrizePeriodSecondsUpdated', options: EventOptions, cb: Callback<PrizePeriodSecondsUpdated>): void

    once(event: 'PrizePoolAwardCancelled', cb: Callback<PrizePoolAwardCancelled>): void
    once(event: 'PrizePoolAwardCancelled', options: EventOptions, cb: Callback<PrizePoolAwardCancelled>): void

    once(event: 'PrizePoolAwardStarted', cb: Callback<PrizePoolAwardStarted>): void
    once(event: 'PrizePoolAwardStarted', options: EventOptions, cb: Callback<PrizePoolAwardStarted>): void

    once(event: 'PrizePoolAwarded', cb: Callback<PrizePoolAwarded>): void
    once(event: 'PrizePoolAwarded', options: EventOptions, cb: Callback<PrizePoolAwarded>): void

    once(event: 'PrizePoolOpened', cb: Callback<PrizePoolOpened>): void
    once(event: 'PrizePoolOpened', options: EventOptions, cb: Callback<PrizePoolOpened>): void

    once(event: 'RngRequestFailed', cb: Callback<RngRequestFailed>): void
    once(event: 'RngRequestFailed', options: EventOptions, cb: Callback<RngRequestFailed>): void

    once(event: 'RngRequestTimeoutSet', cb: Callback<RngRequestTimeoutSet>): void
    once(event: 'RngRequestTimeoutSet', options: EventOptions, cb: Callback<RngRequestTimeoutSet>): void

    once(event: 'RngServiceUpdated', cb: Callback<RngServiceUpdated>): void
    once(event: 'RngServiceUpdated', options: EventOptions, cb: Callback<RngServiceUpdated>): void

    once(event: 'SplitExternalErc20AwardsSet', cb: Callback<SplitExternalErc20AwardsSet>): void
    once(event: 'SplitExternalErc20AwardsSet', options: EventOptions, cb: Callback<SplitExternalErc20AwardsSet>): void

    once(event: 'TokenListenerUpdated', cb: Callback<TokenListenerUpdated>): void
    once(event: 'TokenListenerUpdated', options: EventOptions, cb: Callback<TokenListenerUpdated>): void
}
