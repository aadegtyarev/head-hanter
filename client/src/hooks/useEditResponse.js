import { ref } from "vue";
import axios from "axios";

export default function useEditJob() {
  const formEditVisible = ref(false);

  const editResponse = async (response) => {
    try {
      const resp = await axios.put("/response", {
        id: response.id,
        applicant_name: response.applicant_name,
        email: response.email,
        resume_url: response.resume_url,
        education: response.education,
        experience: response.experience,
        salary_desired: response.salary_desired,
        questionnaire_result: response.questionnaire_result,
        description: response.description,
        skills: response.skills,
        status: Number(response.status),
        result: response.result,
        job_id: response.job_id,
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
    editResponse,
    showEditForm,
    hideEditForm,
    formEditVisible,
  };
}
