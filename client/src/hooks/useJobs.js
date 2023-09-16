import {onMounted, ref} from "vue";
import axios from "axios";

export default function useJobs(limit) {
    const jobs = ref([])
    const isJobsLoading = ref(false)
    const page = ref(1)
    const searchQuery = ref('')

    const fetchingJobs = async () => {
        try {
            isJobsLoading.value = true;
            page.value = 1
            const response = await axios.get(
                "/jobs", {
                params: {
                    offset: (page.value-1)*limit,
                    limit: limit,
                    search: searchQuery.value

                }
            }
            );
            jobs.value = response.data;
        } catch (error) {
            console.log(error)
        } finally {
            isJobsLoading.value = false;
        } 
    }

    const loadMoreJobs = async () => {
        try {
            page.value += 1;
            const response = await axios.get(
                "/job", {
                params: {
                    offset: (page.value-1)*limit,
                    limit: limit,
                    search: searchQuery.value
                }
            }
            );
            jobs.value = [...jobs.value, ...response.data]; // добавляем новую порцию к существующему массиву
        } catch (error) {
            console.log(error)
        }
    }
    
    onMounted(fetchingJobs)

    return {
        jobs, isJobsLoading, loadMoreJobs, searchQuery, fetchingJobs
    }
}