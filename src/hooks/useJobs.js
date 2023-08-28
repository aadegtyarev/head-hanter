import axios from "axios";
import {onMounted, ref} from "vue";

export default function useJobs(limit) {
    const jobs = ref([])
    const totalPages = ref(0)
    const isJobsLoading = ref(false)
    const page = ref(1)

    const fetchingJobs = async () => {
        try {
            isJobsLoading.value = true;
            const response = await axios.get(
                "http://jsonplaceholder.typicode.com/posts", {
                params: {
                    _page: page.value,
                    _limit: limit
                }
            }
            );
            totalPages.value = Math.ceil(response.headers["x-total-count"] / limit)
            jobs.value = response.data;
        } catch (error) {
            alert("Ошибка");
        } finally {
            isJobsLoading.value = false;
        } 
    }

    const loadMoreJobs = async () => {
        try {
            page.value += 1;
            const response = await axios.get(
                "http://jsonplaceholder.typicode.com/posts", {
                params: {
                    _page: page.value,
                    _limit: limit
                }
            }
            );
            totalPages.value = Math.ceil(response.headers["x-total-count"] / limit)
            jobs.value = [...jobs.value, ...response.data]; // добавляем новую порцию к существующему массиву
        } catch (error) {
            alert("Ошибка");
        }
    }
    
    onMounted(fetchingJobs)

    return {
        jobs, isJobsLoading, totalPages, loadMoreJobs
    }
}