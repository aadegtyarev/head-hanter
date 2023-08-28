import {ref} from "vue";

export default function useRemoveJob(jobs) {
     
    const removeJob = (job) => {
        try {
            console.log(job.id)
            jobs.value = jobs.value.filter((p) => p.id !== job.id);       
        } catch (e) {
            console.log(e)
        }
    }    

    return {
        removeJob
    }
}