import {ref} from "vue";
import axios from "axios";

export default function useCreateJob(jobs) {
    const dialogVisible = ref(false)
    
    const createJob = async (job) => {
        try {
            const response = await axios.delete(
                "/job", {
                    job_title: job.job_title,
                    salary_from: job.salary_from,
                    salary_to: job.salary_to,
                    skills: job.skills,
                    education: job.education,
                    experience: job.experience,
                    test_doc: job.test_doc,
                    detail: job.detail,
                    user_id: 7
            }
            );
            dialogVisible.value = false;
        } catch (error) {            
            console.log(error)
        }
    } 
    //  {
    //     "id": 2,
    //     "job_title": "Инженер-электронщик",
    //     "salary_from": "120000",
    //     "salary_to": "150000",
    //     "skills": "отличное знание электроники, умение рисовать платы",
    //     "education": "Техническое высшее",
    //     "experience": "от 1 года",
    //     "test_doc": "http://yadisk.ru/doc002.odt",
    //     "detail": "Ищем разработчика плат Modbus-устройств",
    //     "closed": null,
    //     "created_timestamp": "2023-09-04T07:55:36.481Z",
    //     "user_id": 7
    //   },    
    
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