import axios from "axios";

export default function useRemoveInterview() {

    const removeInterview = async (interview) => {
        try {
            const response = await axios.delete(
                "/interview", {
                params: {
                    id: interview.id
                }
            }
            );
        } catch (error) {
            console.log(error)
        }
    }

    return {
        removeInterview
    }
}