import ky from "ky"

const prefixUrl = '/api/Transparencia/VersaoJson'

export const api = ky.create({
  prefixUrl,
  credentials: 'include'
})