import { onMounted, ref } from "vue";
import axios from "axios";

export default function useAuth() {

    const login = async (auth) => {
        try {

            const response = await axios.get("/user-valid-password", {
                params: {
                    login: auth.login,
                    password: auth.password,
                },
            });
            // user.value = response.data;

            if (response.data.isValid) {
                $cookies.set("head-hunter", {
                    "id": response.data.user_id,
                    "role": response.data.role,
                    "token": response.data.token
                })
                return true
            } else {
                return false
            }

        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const logout = async () => {
        try {

            $cookies.remove("head-hunter")

        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    return {
        login,
        logout
    };
}
