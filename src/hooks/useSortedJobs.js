import {ref, computed} from "vue";

export default function useSortedJobs(jobs) {
    const selectedSort = ref('')
    
    const sortedJobs = computed(() => {
        return [...jobs.value].sort((job1, job2) => {
            // разворачиваем исходный массив в другой и сортируем его
            return job1[selectedSort.value]?.localeCompare(
                job2[selectedSort.value]
            );
        });
    })

    return {
        selectedSort, sortedJobs
    }
}