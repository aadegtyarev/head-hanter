import { ref } from "vue";
import axios from "axios";

export default function useEditTestTemplate() {
  const formEditVisible = ref(false);

  const editTestTemplate = async (test_template) => {
    try {
      const response = await axios.put("/test-template", {
        id: test_template.id,
        name: test_template.name,
        remark: test_template.remark,
        text: test_template.text,
        closed: test_template.closed,
        user_id: 7,
      });
      formEditVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const showEditForm = () => {
    try {
      formEditVisible.value = true;
    } catch (e) {
      console.log(e);
    }
  };
  const hideEditForm = () => {
    try {
      formEditVisible.value = false;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    editTestTemplate,
    showEditForm,
    hideEditForm,
    formEditVisible,
  };
}
