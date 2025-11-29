const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002/api"

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  body?: unknown
  headers?: Record<string, string>
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, headers = {} } = options

  const config: RequestInit = {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config)

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || `Error: ${response.status}`)
  }

  const text = await response.text()
  return (text ? JSON.parse(text) : null) as T
}

export function apiGet<T>(endpoint: string, headers?: Record<string, string>) {
  return apiClient<T>(endpoint, { method: "GET", headers })
}

export function apiPost<T>(endpoint: string, body?: unknown, headers?: Record<string, string>) {
  return apiClient<T>(endpoint, { method: "POST", body, headers })
}

export function apiPut<T>(endpoint: string, body?: unknown, headers?: Record<string, string>) {
  return apiClient<T>(endpoint, { method: "PUT", body, headers })
}

export function apiPatch<T>(endpoint: string, body?: unknown, headers?: Record<string, string>) {
  return apiClient<T>(endpoint, { method: "PATCH", body, headers })
}

export function apiDelete<T>(endpoint: string, headers?: Record<string, string>) {
  return apiClient<T>(endpoint, { method: "DELETE", headers })
}
