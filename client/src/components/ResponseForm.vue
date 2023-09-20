<template>
    <my-select
        v-focus
        v-model="response.job_id"
        :options="jobs_list"
        placeholder="Вакансия"
    />
    <my-input
        v-model="response.applicant_name"
        type="text"
        placeholder="Имя соискателя"
    />
    <my-input
        v-model="response.email"
        type="email"
        placeholder="Email"
    />
    <my-input
        v-model="response.resume_url"
        type="text"
        placeholder="Ссылка на резюме"
    />
    <my-input
        v-model="response.education"
        type="text"
        placeholder="Образование"
    />
    <my-input
        v-model="response.experience"
        type="text"
        placeholder="Опыт работы"
    />
    <my-input
        v-model="response.skills"
        type="text"
        placeholder="Навыки"
    />
    <my-input
        v-model="response.salary_desired"
        type="number"
        placeholder="Желаема зарплата, руб"
    />
    <my-input
        v-model="response.questionnaire_result"
        type="text"
        placeholder="Результат теста"
    />
    <my-textarea
        v-model="response.description"
        placeholder="Заметки"
        type="text"
    />
</template>

<script>
import useJobs from "@/hooks/useJobs"
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    props: {
        response: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { jobs_list } = useJobs(50);

        return {
            jobs_list
        }
    }
}
</script>

<style scoped></style>
