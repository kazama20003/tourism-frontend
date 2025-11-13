import { apiClient } from "./api"
import type { User, CreateUserDto, UpdateUserDto, UserNameOnly, UsersResponse } from "@/types/user"

/**
 * Users Service
 * Handles all user-related API calls
 */
class UsersService {
  private readonly basePath = "/users"

  /**
   * Get all users with pagination
   */
  async getUsers(params?: {
    page?: number
    limit?: number
    search?: string
  }): Promise<UsersResponse> {
    const response = await apiClient.get<UsersResponse>(this.basePath, { params })
    return response.data
  }

  /**
   * Get only user IDs and names
   * Endpoint: GET /users/names
   */
  async getUserNames(): Promise<UserNameOnly[]> {
    const response = await apiClient.get<UserNameOnly[]>(`${this.basePath}/names`)
    return response.data
  }

  /**
   * Get current user profile
   * Endpoint: GET /users/profile
   */
  async getProfile(): Promise<User> {
    const response = await apiClient.get<User>(`${this.basePath}/profile`)
    return response.data
  }

  /**
   * Get user by ID
   * Endpoint: GET /users/:id
   */
  async getUserById(id: string): Promise<User> {
    const response = await apiClient.get<User>(`${this.basePath}/${id}`)
    return response.data
  }

  /**
   * Create a new user
   * Endpoint: POST /users
   */
  async createUser(data: CreateUserDto): Promise<User> {
    const response = await apiClient.post<User>(this.basePath, data)
    return response.data
  }

  /**
   * Update user by ID
   * Endpoint: PATCH /users/:id
   */
  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const response = await apiClient.patch<User>(`${this.basePath}/${id}`, data)
    return response.data
  }

  /**
   * Update current user profile
   * Only the authenticated user can update their own profile
   * Endpoint: PATCH /users/profile
   */
  async updateProfile(data: UpdateUserDto): Promise<User> {
    const response = await apiClient.patch<User>(`${this.basePath}/profile`, data)
    return response.data
  }

  /**
   * Delete user by ID
   * Endpoint: DELETE /users/:id
   */
  async deleteUser(id: string): Promise<void> {
    await apiClient.delete<void>(`${this.basePath}/${id}`)
  }

  /**
   * Search users by query
   */
  async searchUsers(query: string): Promise<User[]> {
    const response = await apiClient.get<User[]>(`${this.basePath}/search`, {
      params: { q: query },
    })
    return response.data
  }

  /**
   * Get users by role
   */
  async getUsersByRole(role: string): Promise<User[]> {
    const response = await apiClient.get<User[]>(`${this.basePath}/role/${role}`)
    return response.data
  }

  /**
   * Get users by auth provider
   */
  async getUsersByProvider(provider: string): Promise<User[]> {
    const response = await apiClient.get<User[]>(`${this.basePath}/provider/${provider}`)
    return response.data
  }
}

// Export singleton instance
export const usersService = new UsersService()

// Also export the class for advanced usage
export { UsersService }
