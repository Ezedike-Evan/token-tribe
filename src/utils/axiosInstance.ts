import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pro-api.solscan.io/v2.0',
  headers: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3NDYwNDY0OTA5MzUsImVtYWlsIjoiZWd3b21ldmFuMzIzQGdtYWlsLmNvbSIsImFjdGlvbiI6InRva2VuLWFwaSIsImFwaVZlcnNpb24iOiJ2MiIsImlhdCI6MTc0NjA0NjQ5MH0.RXYklTBfaY7uze5vbQ6iGA_K3pzXRurT8KWB_SHILcs'
  },
})