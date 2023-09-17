import { onMounted, ref } from "vue";
import axios from "axios";

export default function useResponses(limit) {
  const responses = ref([]);
  const isResponsesLoading = ref(false);
  const page = ref(1);
  const searchQuery = ref("");

  const fetchingResponses = async () => {
    try {
      isResponsesLoading.value = true;
      page.value = 1;
      const response = await axios.get("/responses", {
        params: {
          offset: (page.value - 1) * limit,
          limit: limit,
          search: searchQuery.value,
        },
      });
      responses.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isResponsesLoading.value = false;
    }
  };

  const loadMoreResponses = async () => {
    try {
      page.value += 1;
      const response = await axios.get("/job", {
        params: {
          offset: (page.value - 1) * limit,
          limit: limit,
          search: searchQuery.value,
        },
      });
      responses.value = [...responses.value, ...response.data]; // добавляем новую порцию к существующему массиву
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(fetchingResponses);

  return {
    responses,
    isResponsesLoading,
    loadMoreResponses,
    searchQuery,
    fetchingResponses,
  };
}
