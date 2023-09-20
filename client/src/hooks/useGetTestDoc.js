import { onMounted, ref } from "vue";
import axios from "axios";

export default function useGetTestDoc(id) {
  const test_doc = ref([]);

  const loadOneTestDoc = async () => {
    try {
      const response = await axios.get("/test-doc", {
        params: {
          id: id,
        },
      });
      test_doc.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  onMounted(loadOneTestDoc);

  return {
    test_doc,
    loadOneTestDoc,
  };
}
