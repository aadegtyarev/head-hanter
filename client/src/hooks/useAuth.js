import { onMounted, ref } from "vue";
import axios from "axios";
import useToken from "./useToken";

export default function useAuth() {
    const { createToken, deleteToken, checkToken } = useToken()

    const login = (auth) => {
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

    return {
        login,
        logout,
        createToken,
        deleteToken,
        checkToken
    };
}
