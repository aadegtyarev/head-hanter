import { onMounted, ref } from "vue";
import axios from "axios";

export default function useTestDocs() {
  const test_docs = ref([]);
  const test_docs_list = ref([]);
  const isTestDocsLoading = ref(false);
  const searchQuery = ref("");

  const fetchingTestDocs = async () => {
    try {
      isTestDocsLoading.value = true;
      const response = await axios.get("/test-docs", {
        params: {
          search: searchQuery.value,
        },
      });
      test_docs.value = response.data;
      fillTestDocsArray();
    } catch (error) {
      console.log(error);
    } finally {
      isTestDocsLoading.value = false;
    }
  };

  const fillTestDocsArray = async () => {
    try {
      test_docs.value.forEach((element) => {
        if (!element.closed) {
          test_docs_list.value.push({
            value: String(element.id),
            name: element.name,
          });
        }
      });
    } catch (error) {}
  };

  onMounted(fetchingTestDocs);

  return {
    test_docs,
    test_docs_list,
    isTestDocsLoading,
    searchQuery,
    fetchingTestDocs,
  };
}
