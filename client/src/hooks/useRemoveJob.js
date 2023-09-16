import axios from "axios";

export default function useRemoveJob(jobs) {
     
    const removeJob = async (job) => {
        try {
            const response = await axios.delete(
                "/job", {
                    params: {
                        id: job.id
                    }
            }
            );
            dialogVisible.value = false;
        } catch (error) {            
            console.log(error)
        }        
        // try {
        //     console.log(job.id)
        //     jobs.value = jobs.value.filter((p) => p.id !== job.id);       
        // } catch (e) {
        //     console.log(e)
        // }
    }    

    return {
        removeJob
    }
}