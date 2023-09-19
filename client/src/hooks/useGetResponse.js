import { onMounted, ref } from "vue";
import axios from "axios";

export default function useGetResponse(id) {
  const response = ref([]);

  const loadOneResponse = async () => {
    try {
      const resp = await axios.get("/response", {
        params: {
          id: id,
        },
      });
      response.value = resp.data;
      response.value.job_id = String(response.value.job_id);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  onMounted(loadOneResponse);

  return {
    response,
    loadOneResponse,
  };
}
