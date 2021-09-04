import { ChainId, getChainConstants, getITOConstants, isSameAddress } from '@masknet/web3-shared'
import urlcat from 'urlcat'

export async function getAllPoolsAsSeller(
    chainId: ChainId,
    startBlock: number,
    endBlock: number,
    sellerAddress: string,
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

    const data = await response.json()
    const result = data.result.filter((v: any) => isSameAddress(v.from, sellerAddress))
    console.log({ result })
    return null
}
