import { request } from "./httpRequest"

export const categoriesServices = {
    get: (props) => request({method: "get", url: "categories?&_limit=10"}),
    getSingleId: (id) => request({method: "get", url: `categories/${id}`}),
    post: (data) => request({method: "post", url: "categories", data}),
    delete: (id) => request({method: "delete", url: `categories/${id}`}),
    update: (data, id) => request({method: "put",url: `categories/${id}`, data})
}