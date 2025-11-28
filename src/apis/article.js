import { http } from "../utils/http";

export function getChannelsApi() {
    return http({
        url: '/article/foodsChannel',
        method: 'GET'
    })
}

// 提交文章数据
export function addArticleApi() {
    return http({
        url: '/article/add',
        method: 'POST',
        data: null
    })
}