import axios from "axios";

export default function useToken() {

    const createToken = (user_id) => {
        return new Promise((resolve, reject) => {
            axios.post("/token",
                {
                    user_id: user_id
                }
            ).then(response => {
                resolve(response.data.value);
            }, error => {
                reject(error);
            })
        })
    };

    const checkToken = (token) => {
        return new Promise((resolve, reject) => {
            axios.get("/token", {
                params: {
                    token: token
                },
            }).then(response => {
                resolve(response.data.token_valid);
            }, error => {
                reject(error);
            })
        })
    };

    const deleteToken = async (user_id) => {
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
