import {onMounted, ref} from "vue";
import axios from "axios";

export default function useJobs(limit) {
    const jobs = ref([])
    // const totalPages = ref(0)
    const isJobsLoading = ref(false)
    const page = ref(1)

    const fetchingJobs = async () => {
        try {
            isJobsLoading.value = true;
            const response = await axios.get(
                "/job", {
                params: {
                    offset: (page.value-1)*limit,
                    limit: limit
                }
            }
            );
            // totalPages.value = Math.ceil(response.headers["x-total-count"] / limit)
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
                    limit: limit
                }
            }
            );
            // totalPages.value = Math.ceil(response.headers["x-total-count"] / limit)
            jobs.value = [...jobs.value, ...response.data]; // добавляем новую порцию к существующему массиву
        } catch (error) {
            console.log(error)
        }
    }
    
    onMounted(fetchingJobs)

    return {
        jobs, isJobsLoading, loadMoreJobs
    }
}