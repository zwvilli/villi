import { request } from 'umi'

export const stuGet = () => {
    return request('/api/getStu', {
        method: 'GET'
    })
}