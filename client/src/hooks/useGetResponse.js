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
