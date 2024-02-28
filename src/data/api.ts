import { env } from "@/env"

export async function api(path: string, init?: RequestInit) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
    const apiKey = env.NEXT_PUBLIC_API_KEY

    const apiKeyPrefix = '?api_key='
   
    const url = new URL(path.concat(apiKeyPrefix).concat(apiKey), baseUrl)

    return fetch(url, init)
}