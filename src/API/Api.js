import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2691d226-036f-4dc5-8002-13d2b9e2bc4d"
    }

});
export const userApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {})
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {})
    },


    getProfile(userId) {
        console.warn('Obsolete method. Please profile object  ')
        return profileApi.getProfile(userId)


    }
}


export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)

    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status:status})
    }
}
export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}








