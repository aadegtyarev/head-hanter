import axios from "axios";
import {ref, computed} from "vue";

export default function useSortedAndSearchedJobs(sortedJobs) {
    const searchQuery = ref('')

    const sortedAndSearchedJobs = computed(() => {
        return sortedJobs.value.filter(job => job.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedJobs
    }    
}