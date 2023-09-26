import axios from "axios";

export default function useRemoveResponse() {

    const removeResponse = async (response) => {
        try {
            const res = await axios.delete(
                "/response", {
                params: {
                    id: response.id
                }
            }
            );
        } catch (error) {
            console.log(error)
        }
    }

    return {
        removeResponse
    }
}