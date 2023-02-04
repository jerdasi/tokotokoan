import { defineStore } from "pinia";

export const useProfileStore = defineStore('profile', {
    state: () => {
        return {
            profile: {},
            token: ""
        }
    },
    getters: {
        getProfile() {
            return state.profile
        },
        getToken() {
            return state.token
        }
    },
    actions: {
        setProfile(data) {
            state.profile = {
                ...data
            }
        },
        setToken(data) {
            state.token = data
        }
    }
})