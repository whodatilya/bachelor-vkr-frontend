import {defineStore} from "pinia";
import request from "../api/requests.ts";

export const useProcessHTMLStore = defineStore('processHTML', () => {
    async function uploadByFile (file: File) {
        const formData = new FormData()
        formData.append('file', file)
        return request({
            url: '/uploadByFile',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            data: formData
        }).then(response => response.data)
            .catch(error => {
                console.error(error);
                throw error;
            })
    }

    async function uploadByDirectInput (rawHTMLContent: string) {
        const data = new URLSearchParams();
        data.append('html_content', rawHTMLContent);
        return request({
            url: '/uploadByRaw',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            data: data
        }).then(response => response.data)
            .catch(error => {
                console.error(error);
                throw error;
            })
    }

    return {
        uploadByFile,
        uploadByDirectInput
    }
})