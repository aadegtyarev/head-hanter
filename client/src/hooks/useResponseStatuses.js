import { onMounted, ref } from "vue";
import axios from "axios";

export default function useResponseStatuses() {
  const response_statuses = ref([]);
  const response_statuses_list = ref([]);
  const isResponseStatusesLoading = ref(false);
  const page = ref(1);
  const searchQuery = ref("");

  const fetchingResponseStatuses = async () => {
    try {
      isResponseStatusesLoading.value = true;
      const response = await axios.get("/response-statuses", {});
      response_statuses.value = response.data;
      fillResponseStatusesArray();
    } catch (error) {
      console.log(error);
    } finally {
      isResponseStatusesLoading.value = false;
    }
  };

  const fillResponseStatusesArray = async () => {
    try {
      response_statuses.value.forEach((element) => {
        response_statuses_list.value.push({
          value: String(element.id),
          name: element.name,
        });
      });
    } catch (error) {}
  };

  onMounted(fetchingResponseStatuses);

  return {
    response_statuses,
    response_statuses_list,
    isResponseStatusesLoading,
    fetchingResponseStatuses,
  };
}
