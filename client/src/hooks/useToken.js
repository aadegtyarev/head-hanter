import axios from "axios";

export default function useToken() {

    const createToken = async (user_id) => {
        try {

            const response = await axios.post("/token", {
                params: {
                    user_id: user_id
                },
            });
            return response.data.value

        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const checkToken = async (token) => {
        try {

            const response = await axios.get("/token", {
                params: {
                    token: token
                },
            });

            return (response.data.token_valid)
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const deleteToken = async (user_id) => {
        try {

            const response = await axios.delete("/token", {
                params: {
                    user_id: user_id
                },
            });
            return response.data.value

        } catch (error) {
            console.log(error);
        } finally {
        }
    };


    return {
        createToken,
        checkToken,
        deleteToken
    };
}
