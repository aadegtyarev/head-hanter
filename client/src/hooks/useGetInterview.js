import { onMounted, ref } from "vue";
import axios from "axios";
import dateFormat, { masks } from "dateformat";

export default function useGetInterview(id) {
  const interview = ref([]);

  const loadOneInterview = async () => {
    try {
      const response = await axios.get("/interview", {
        params: {
          id: id,
        },
      });
      interview.value = response.data;

      interview.value.date_and_time = dateFormat(
        interview.value.date_and_time,
        'yyyy-mm-dd"T"HH:MM'
      );
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  onMounted(loadOneInterview);

  return {
    interview,
    loadOneInterview,
  };
}
