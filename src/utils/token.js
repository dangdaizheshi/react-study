// token 的存、取、删
const token_key = 'token_key'
const setToken = (token) => {
    localStorage.setItem(token_key, token)
}
const getToken = () => {
    return localStorage.getItem(token_key)
}
const delToken = () => {
    localStorage.removeItem(token_key)
}
export {
    setToken,
    getToken,
    delToken
}