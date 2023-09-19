import { onMounted, ref } from "vue";
import axios from "axios";

export default function useInterviews(limit) {
  const interviews = ref([]);
  const isInterviewsLoading = ref(false);
  const page = ref(1);
  const searchQuery = ref("");
  const jobId = ref(0);

  const fetchingInterviews = async () => {
    try {
      isInterviewsLoading.value = true;
      page.value = 1;
      const response = await axios.get("/interviews", {
        params: {
          offset: (page.value - 1) * limit,
          limit: limit,
          search: searchQuery.value,
          job_id: jobId.value,
        },
      });
      interviews.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isInterviewsLoading.value = false;
    }
  };

  const loadMoreInterviews = async () => {
    try {
      page.value += 1;
      const response = await axios.get("/interviews", {
        params: {
          offset: (page.value - 1) * limit,
          limit: limit,
          search: searchQuery.value,
        },
      });
      interviews.value = [...interviews.value, ...response.data]; // добавляем новую порцию к существующему массиву
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(fetchingInterviews);

  return {
    interviews,
    isInterviewsLoading,
    loadMoreInterviews,
    searchQuery,
    jobId,
    fetchingInterviews,
  };
}
