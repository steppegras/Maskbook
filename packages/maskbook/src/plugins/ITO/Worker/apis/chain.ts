import { ChainId, getChainConstants, getITOConstants, isSameAddress } from '@masknet/web3-shared'
import { getTransactionReceipt } from '../../../../extension/background-script/EthereumService'
import urlcat from 'urlcat'
import type Web3 from 'web3'

export async function getAllPoolsAsSeller(
    chainId: ChainId,
    startBlock: number,
    endBlock: number,
    sellerAddress: string,
    web3: Web3,
) {
    const { EXPLORER_API, EXPLORER_API_KEY } = getChainConstants(chainId)
    const { ITO2_CONTRACT_ADDRESS } = getITOConstants(chainId)

    if (!EXPLORER_API || !ITO2_CONTRACT_ADDRESS) return null

    const response = await fetch(
        urlcat(EXPLORER_API, {
            apikey: EXPLORER_API_KEY,
            action: 'txlist',
            module: 'account',
            sort: 'asc',
            startBlock,
            endBlock,
            address: ITO2_CONTRACT_ADDRESS,
        }),
    )
    if (!response.ok) return null

    const _result: { hash: string }[] = (await response.json()).result
    const result = _result.filter((v: any) => isSameAddress(v.from, sellerAddress))
    const a = await getTransactionReceipt(result[0].hash)
    console.log({ a })
    return null
}
