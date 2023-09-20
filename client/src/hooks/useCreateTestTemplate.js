import { ref } from "vue";
import axios from "axios";

export default function useCreateTestTemplate() {
  const createTestTemplate = async (test_template) => {
    try {
      const response = await axios.post("/test-template", {
        id: test_template.id,
        name: test_template.name,
        remark: test_template.remark,
        text: test_template.text,
        user_id: 7,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createTestTemplate,
  };
}
