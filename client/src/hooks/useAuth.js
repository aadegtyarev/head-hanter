import { onMounted, ref } from "vue";
import axios from "axios";
import useToken from "./useToken";

export default function useAuth() {
    const { createToken, deleteToken, checkToken } = useToken()

    const login = async (auth) => {

        try {

            const response = await axios.get("/user-valid-password", {
                params: {
                    login: auth.login,
                    password: auth.password,
                },
            });
            if (response.data.isValid) {
                $cookies.set("head-hunter", {
                    "id": response.data.user_id,
                    "role": response.data.role,
                    "token": createToken(response.data.user_id)
                }, "1d")
                return true
            } else {
                if ($cookies.get("head-hunter")) {
                    $cookies.remove("head-hunter")
                }
                return false
            }

        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const logout = async () => {
        try {
            const user_id = $cookies.get("head-hunter").id
            deleteToken(user_id)
            $cookies.remove("head-hunter")

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
