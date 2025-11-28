import { http } from "../utils/http";

export function getLoginApi(formData) {
    return http({
        url: '/api/login',
        method: 'POST',
        data: formData
    })
}

export function getUserInfoApi() {
    return http({
        url: '/my/userinfo',
        method: 'GET'
    })
}