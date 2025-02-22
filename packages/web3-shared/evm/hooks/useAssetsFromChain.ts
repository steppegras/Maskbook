import { useMemo } from 'react'
import { first } from 'lodash-unified'
import { EMPTY_LIST } from '@masknet/shared-base'
import { Asset, ChainId, EthereumTokenType, FungibleTokenDetailed } from '../types'
import { useTokensBalance } from './useTokensBalance'
import { useChainDetailed } from './useChainDetailed'
import { getChainDetailed } from '../utils'
import { useBalance } from './useBalance'

export function useAssetsFromChain(tokens: FungibleTokenDetailed[], chainId?: ChainId) {
    const { value: balance = '0' } = useBalance(chainId)
    const chainDetailed = useChainDetailed()
    const passedChainDetailed = getChainDetailed(chainId)

    const chain = passedChainDetailed?.shortName.toLowerCase() ?? chainDetailed?.shortName.toLowerCase() ?? 'unknown'
    const nativeToken = first(tokens.filter((x) => x.type === EthereumTokenType.Native))
    const erc20Tokens = useMemo(() => tokens.filter((x) => x.type === EthereumTokenType.ERC20), [tokens])
    const erc20TokenAddresses = useMemo(() => erc20Tokens.map((x) => x.address), [erc20Tokens])

    const { value: listOfBalance = EMPTY_LIST, loading, error, retry } = useTokensBalance(erc20TokenAddresses, chainId)

    const assets = useMemo(() => {
        return [
            ...(nativeToken
                ? [
                      {
                          chain,
                          token: nativeToken,
                          balance,
                      },
                  ]
                : []),

            // the length not matched in case of error occurs
            ...(listOfBalance.length === erc20Tokens.length
                ? listOfBalance.map(
                      (balance, idx): Asset => ({
                          chain,
                          token: erc20Tokens[idx],
                          balance,
                      }),
                  )
                : []),
        ]
    }, [nativeToken, chain, balance, listOfBalance, erc20Tokens])

    return {
        value: assets,
        loading,
        error,
        retry,
    }
}
