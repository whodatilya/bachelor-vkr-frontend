import {defineStore} from "pinia";
import {AuthUserData, RegisterUserData} from "../../types";
import request from "../api/requests.ts";

export const useAuthStore = defineStore('authnetication', () => {
    async function registerUser (userData: RegisterUserData) {
        return request({
            url: '/users',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: userData
        }).then(response => response.data)
    }

    async function loginUser (userData: AuthUserData) {
        return request({
            url: '/auth/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            data: {
                ...userData,
                grant_type: 'password',
                scope: '',
                client_id: 'string',
                client_secret: 'string'
            }
        }).then(response => response.data)
            .then(responseData => {
                if (responseData.access_token) {
                    localStorage.setItem('token', responseData.access_token)
                    return responseData
                }
                return responseData
            })
    }

    async function logout () {
        localStorage.removeItem('token')
        location.reload()
    }

    return {
        registerUser,
        loginUser,
        logout
    }
})