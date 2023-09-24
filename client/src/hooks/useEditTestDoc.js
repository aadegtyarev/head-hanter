import { ref } from "vue";
import axios from "axios";

export default function useEditTestDoc() {
  const formEditVisible = ref(false);

  const editTestDoc = async (test_doc) => {
    try {
      const response = await axios.put("/test-doc", {
        id: test_doc.id,
        name: test_doc.name,
        remark: test_doc.remark,
        text: test_doc.text,
        closed: test_doc.closed,
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
    editTestDoc,
    showEditForm,
    hideEditForm,
    formEditVisible,
  };
}
