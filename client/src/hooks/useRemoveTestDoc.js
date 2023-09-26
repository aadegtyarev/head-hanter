import axios from "axios";

export default function useRemoveTestDoc() {

    const removeTestDoc = async (test_doc) => {
        try {
            const response = await axios.delete(
                "/test-doc", {
                params: {
                    id: test_doc.id
                }
            }
            );
        } catch (error) {
            console.log(error)
        }
    }

    return {
        removeTestDoc
    }
}