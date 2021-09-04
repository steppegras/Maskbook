import { useAsyncRetry } from 'react-use'
import { PluginITO_RPC } from '../../messages'
import type { PoolSubgraph } from '../../types'
import { useBlockNumber } from '@masknet/web3-shared'
import { useRef } from 'react'

export function useAllPoolsAsSeller(address: string, page: number) {
    const allPoolsRef = useRef<PoolSubgraph[]>([])
    const blockNumber = useBlockNumber()
    return useAsyncRetry(async () => {
        const pools = await PluginITO_RPC.getAllPoolsAsSeller(address, page, blockNumber)
        allPoolsRef.current = allPoolsRef.current.concat(pools)
        return { pools: allPoolsRef.current, loadMore: pools.length > 0 }
    }, [address, page, blockNumber])
}
