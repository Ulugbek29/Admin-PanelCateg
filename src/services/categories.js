import { request } from "./httpRequest"

export const categoriesServices = {
    get: (props) => request({method: "get", url: "categories?&_limit=10"}),
    post: (data) => request({method: "post", url: "categories", data}),
    delete: (id) => request({method: "delete", url: `categories/${id}`})
}