import { http } from "../utils/http";

export function getLoginApi(formData) {
    return http({
        url: '/authorizations',
        method: 'POST',
        data: formData
    })
}

export function getUserInfoApi() {
    return http({
        url: '/user/profile',
        method: 'GET',
    })
}