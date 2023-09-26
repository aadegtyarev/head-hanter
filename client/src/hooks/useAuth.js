import { onMounted, ref } from "vue";
import axios from "axios";
import useToken from "./useToken";
import store from "@/store";
import router from "@/router/router";

export default function useAuth() {
    const showLoginError = ref(false)

    const { createToken, deleteToken, checkToken } = useToken()

    const login = async (auth) => {
        const [response] = await Promise.all([
            checkUser(auth)
        ]);

        if (response.isValid) {
            store.state.auth.isAuth = true
            showLoginError.value = false
            router.push('/')

            const [token] = await Promise.all([
                createToken(response.user_id)
            ]);
            store.state.auth.user_id = response.user_id
            store.state.auth.role = response.role

            const [res] = await Promise.all([
                checkToken(token)
            ]);

            $cookies.set("head-hunter", {
                "id": response.user_id,
                "token": token,
                "role": response.role,
            }, "7d")
        } else {
            store.state.auth.isAuth = false
            showLoginError.value = true
        }
    };

    const logout = async () => {
        try {
            if ($cookies.get("head-hunter")) {
                const user_id = $cookies.get("head-hunter").id
                deleteToken(user_id)
                $cookies.remove("head-hunter")
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const checkUser = (auth) => {
        return new Promise((resolve, reject) => {
            axios.get("/user-valid-password",
                {
                    params: {
                        login: auth.login,
                        password: auth.password,
                    },
                }
            ).then(response => {
                resolve(response.data);
            }, error => {
                reject(error);
            })
        })
    };

    const checkCookie = async () => {
        try {
            const cookie = $cookies.get("head-hunter")
            if (cookie) {
                const [res] = await Promise.all([
                    checkToken(cookie.token)
                ]);
                store.state.auth.isAuth = res
                store.state.auth.user_id = cookie.id
                store.state.auth.role = cookie.role
                if (res.token_valid) {

                    router.push('/')
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    return {
        login,
        logout,
        checkCookie,
        showLoginError
    };
}
