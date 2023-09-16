import { ref } from "vue";
import axios from "axios";

export default function useEditJob() {
  const dialogEditVisible = ref(false);

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
        user_id: 7,
      });
      dialogEditVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const showEditDialog = () => {
    try {
      dialogEditVisible.value = true;
    } catch (e) {
      console.log(e);
    }
  };

  const hideEditDialog = () => {
    try {
      dialogEditVisible.value = false;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    editJob,
    showEditDialog,
    hideEditDialog,
    dialogEditVisible,
  };
}
