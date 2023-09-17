import { onMounted, ref } from "vue";
import axios from "axios";

export default function useGetJob(id) {
  const job = ref([]);

  const loadOneJob = async () => {
    try {
      const response = await axios.get("/job", {
        params: {
          id: id,
        },
      });
      job.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  onMounted(loadOneJob);

  return {
    job,
    loadOneJob,
  };
}
