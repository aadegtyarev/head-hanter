import {ref} from "vue";

export default function useCreateJob(jobs) {
    const dialogVisible = ref(false)
    
    const createJob = (job) => {
        try {
            jobs.value.push(job);
            dialogVisible.value = false;
        } catch (e) {
            console.log(e)
        }
    } 
    
    const showDialog = () => {
        try {            
            dialogVisible.value = true;            
        } catch (e) {
            console.log(e)
        }
    }  

    return {
        createJob,
        showDialog,
        dialogVisible
    }
}