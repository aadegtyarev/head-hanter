import { ref } from "vue";
import axios from "axios";

export default function useCreateJob(jobs) {
  const dialogVisible = ref(false);

  const createJob = async (job) => {
    try {
      const response = await axios.post("/job", {
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

  const hideDialog = () => {
    try {
      dialogVisible.value = false;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createJob,
    showDialog,
    hideDialog,
    dialogVisible,
  };
}
