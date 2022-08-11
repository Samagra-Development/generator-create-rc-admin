import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'https://dev-shiksha.uniteframework.io/registry/api/v1';
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}/search`;
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify({
                "filters": {}
            }),
        }).then(({ json, headers }) => {

            json.map(d => {
                return d["id"] = d["osid"];
            });
            return { data: json, total: json.length }
        })
    },

    getOne: (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        return httpClient(url).then(({ json }) => {
            json.id = params.id;
            return { data: json }
        })
    },

    create: (resource, params) => {
        const url = `${apiUrl}/${resource}/invite`;
        console.log(url, params);
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            json.id = json.osid;
            return { data: { ...params.data, id: json.id }}
        })
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    delete: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) =>{
            json.id = params.id;
            return { data: json }})
    },

};
