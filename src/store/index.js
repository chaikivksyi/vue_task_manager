import {createStore} from "vuex";
import router from "@/router";

const store = createStore({
    state: {
        isAuthenticated: !!localStorage.getItem('token'),
        loginFieldError: false
    },
    mutations: {
        login: async (state, payload) => {
            const { email, password } = payload;

            if(email === 'admin' && password === 'admin') {
                localStorage.setItem('token', '1')
                state.isAuthenticated = true;
                router.push({name: 'Dashboard'})
                state.loginFieldError = false;
            }else {
                state.loginFieldError = true;
            }
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            router.push({name: 'Login'})
        },
    }
})
export default store;