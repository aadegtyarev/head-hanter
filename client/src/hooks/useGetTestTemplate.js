import { onMounted, ref } from "vue";
import axios from "axios";

export default function useGetTestTemplate(id) {
  const test_template = ref([]);

  const TestTemplate = async () => {
    try {
      const response = await axios.get("/test-template", {
        params: {
          id: id,
        },
      });
      test_template.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  onMounted(TestTemplate);

  return {
    test_template,
    TestTemplate,
  };
}
