import api from './apiClient.js'
import apimock from './apimock.js'

const useMock = String(import.meta.env.VITE_USE_MOCK ?? 'true').toLowerCase() === 'true'

const service = useMock ? apimock : api

export default {
  async getAll() {
    return service.getAll()
  },
  async getByAuthor(author) {
    return service.getByAuthor(author)
  },
  async getByAuthorAndName(author, name) {
    return service.getByAuthorAndName(author, name)
  },
  async create(payload) {
    return service.create(payload)
  },
}
