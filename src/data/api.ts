import { env } from "@/env"

export function api(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
    const apiKey = env.NEXT_PUBLIC_API_KEY

    const apiKeyPrefix = '?api_key='
   
    const url = new URL(path.concat(apiKeyPrefix).concat(apiKey), baseUrl)
    console.log(url)
    return fetch(url, init)
    // https://api.giphy.com/v1/gifs/trending?api_key=0tGjciRm629z4gxEUXhB712BjbKT6mV0
}