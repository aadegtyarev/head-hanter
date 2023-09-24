import { ref } from "vue";
import axios from "axios";

export default function useCreateResponse() {
  const createResponse = async (response) => {
    try {
      const resp = await axios.post("/response", {
        applicant_name: response.applicant_name,
        email: response.email,
        resume_url: response.resume_url,
        education: response.education,
        experience: response.experience,
        salary_desired: response.salary_desired,
        questionnaire_result: response.questionnaire_result,
        description: response.description,
        skills: response.skills,
        result: response.result,
        job_id: response.job_id,
        user_id: 7,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createResponse,
  };
}
