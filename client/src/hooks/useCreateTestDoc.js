import { ref } from "vue";
import axios from "axios";

export default function useCreateTestDoc() {
  const createTestDoc = async (test_doc) => {
    try {
      const response = await axios.post("/test-doc", {
        id: test_doc.id,
        name: test_doc.name,
        remark: test_doc.remark,
        text: test_doc.text,
        user_id: 7,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createTestDoc,
  };
}
