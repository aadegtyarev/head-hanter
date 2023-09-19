import { ref } from "vue";
import axios from "axios";

export default function useCreateInterview() {
  const dialogVisible = ref(false);

  const createInterview = async (interview) => {
    try {
      const response = await axios.post("/interview", {
        date_and_time: interview.date_and_time,
        job_id: interview.job_id,
        response_id: interview.response_id,
        detail: interview.detail,
        user_id: 7,
      });
      dialogVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const showDialog = () => {
    try {
      dialogVisible.value = true;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createInterview,
    showDialog,
    dialogVisible,
  };
}
