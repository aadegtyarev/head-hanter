import { onMounted, ref } from "vue";
import axios from "axios";

export default function useTestTemplates() {
  const test_templates = ref([]);
  const test_templates_list = ref([]);
  const isTestTemplatesLoading = ref(false);
  const searchQuery = ref("");

  const fetchingTestTemplates = async () => {
    try {
      isTestTemplatesLoading.value = true;
      const response = await axios.get("/test-templates", {
        params: {
          search: searchQuery.value,
        },
      });
      test_templates.value = response.data;
      //   fillTestTemplatesArray();
    } catch (error) {
      console.log(error);
    } finally {
      isTestTemplatesLoading.value = false;
    }
  };

  const fillTestTemplatesArray = async () => {
    try {
      test_templates.value.forEach((element) => {
        if (!element.closed) {
          test_templates_list.value.push({
            value: String(element.id),
            name: element.name,
          });
        }
      });
    } catch (error) {}
  };

  onMounted(fetchingTestTemplates);

  return {
    test_templates,
    test_templates_list,
    isTestTemplatesLoading,
    searchQuery,
    fetchingTestTemplates,
  };
}
