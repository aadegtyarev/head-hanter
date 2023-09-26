import axios from "axios";

export default function useToken() {

    const createToken = (user_id) => {
        return new Promise((resolve, reject) => {
            axios.post("/token",
                {
                    user_id: user_id
                }
            ).then(response => {
                console.log(response)
                resolve(response.data.value);
            }, error => {
                reject(error);
            })
        })
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
        console.log("deleteToken", user_id)
        try {
            await axios.delete("/token", {
                params: {
                    user_id: user_id
                },
            });

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
