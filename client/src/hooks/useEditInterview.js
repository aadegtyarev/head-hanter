import { ref } from "vue";
import axios from "axios";

export default function useEditInterview() {
  const formEditVisible = ref(false);

  const editInterview = async (interview) => {
    try {
      const response = await axios.put("/interview", {
        id: interview.id,
        date_and_time: interview.date_and_time,
        result: interview.result,
        detail: interview.detail,
        user_id: interview.user_id,
        interviewer_id: interview.interviewer_id,
        job_id: interview.job_id,
        closed: interview.closed,
        response_id: interview.response_id,
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
    editInterview,
    showEditForm,
    hideEditForm,
    formEditVisible,
  };
}
