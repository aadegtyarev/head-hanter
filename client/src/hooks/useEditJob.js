import { ref } from "vue";
import axios from "axios";

export default function useEditJob() {
  const formEditVisible = ref(false);

  const editJob = async (job) => {
    try {
      const response = await axios.put("/job", {
        id: job.id,
        job_title: job.job_title,
        salary_from: job.salary_from,
        salary_to: job.salary_to,
        skills: job.skills,
        education: job.education,
        experience: job.experience,
        test_doc: job.test_doc,
        detail: job.detail,
        closed: job.closed,
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
    editJob,
    showEditForm,
    hideEditForm,
    formEditVisible,
  };
}
