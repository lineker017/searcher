import ky from "ky"

const prefixUrl = 'http://45.172.145.250:8079/Transparencia/VersaoJson'

export const api = ky.create({
  prefixUrl,
})