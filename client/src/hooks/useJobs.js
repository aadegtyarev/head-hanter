import { onMounted, ref } from "vue";
import axios from "axios";

export default function useJobs(limit) {
  const jobs = ref([]);
  const jobs_list = ref([]);
  const isJobsLoading = ref(false);
  const page = ref(1);
  const searchQuery = ref("");

  const fetchingJobs = async () => {
    try {
      isJobsLoading.value = true;
      page.value = 1;
      const response = await axios.get("/jobs", {
        params: {
          offset: (page.value - 1) * limit,
          limit: limit,
          search: searchQuery.value,
        },
      });
      jobs.value = response.data;
      fillJobsArray();
    } catch (error) {
      console.log(error);
    } finally {
      isJobsLoading.value = false;
    }
  };

  const loadMoreJobs = async () => {
    try {
      page.value += 1;
      const response = await axios.get("/jobs", {
        params: {
          offset: (page.value - 1) * limit,
          limit: limit,
          search: searchQuery.value,
        },
      });
      jobs.value = [...jobs.value, ...response.data]; // добавляем новую порцию к существующему массиву
    } catch (error) {
      console.log(error);
    }
  };

  const fillJobsArray = async () => {
    // jobs_list = [];
    try {
      jobs.value.forEach((element) => {
        jobs_list.value.push({ value: element.id, name: element.job_title });
      });

      //   console.log(jobs_list);
    } catch (error) {}
  };

  onMounted(fetchingJobs);

  return {
    jobs,
    jobs_list,
    isJobsLoading,
    loadMoreJobs,
    searchQuery,
    fetchingJobs,
  };
}
