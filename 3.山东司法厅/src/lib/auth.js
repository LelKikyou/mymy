import Cookies from 'js-cookie'

const TokenKey = 'Sdcm-Token'
const expiresDate = 1

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, {expires: expiresDate})
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
