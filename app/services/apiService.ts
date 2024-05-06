import { getAccessToken } from "../lib/actions"

require('dotenv').config();


const apiService = {
    get: async function (url: string): Promise<any> {
        const token = await getAccessToken()

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then((json):any => {
                resolve(json)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },

    post: async function (url: string, data: any): Promise<any> {
        const token = await getAccessToken()

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            })
            .then(response => response.json())
            .then((json):any => {
                console.log('Resp:', json)
                resolve(json)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },

    postWithoutToken: async function (url: string, data: any): Promise<any> {

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: data
            })
            .then(response => response.json())
            .then((json):any => {
                console.log('Resp:', json)
                resolve(json)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}

export default apiService;
