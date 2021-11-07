import axios from 'axios'
import { getNetworkId } from 'src/config'
import { CONFIG_SERVICE_URL } from 'src/utils/constants'
import { NetworkConfig } from '../config/model/networkConfig'

export type RemoteAppData = {
  id: number
  url: string
  name: string
  iconUrl: string
  description: string
  chainIds: number[]
}

enum Endpoints {
  SAFE_APPS = '/safe-apps/',
}

export const fetchSafeConfig = async (networkId: string): Promise<NetworkConfig> => {

/* constants.ts
export const CONFIG_SERVICE_URL =
  process.env.CONFIG_SERVICE_URL || IS_PRODUCTION
    ? 'https://safe-config.gnosis.io/api/v1'
    : 'https://safe-config.staging.gnosisdev.com/api/v1'
*/

  const url = `${CONFIG_SERVICE_URL}/chains/${networkId}`

  return axios.post(url).then(({ data }) => data)
}

export const fetchSafeAppsList = async (): Promise<RemoteAppData[]> => {
  const networkId = getNetworkId()

  const data = axios.get(`${CONFIG_SERVICE_URL}jupisky-apps/main/appListChain${networkId}.json`).then(({ data }) => data)

  return data
}
