<template>
    <span class="label-top">Вакансия</span>
    <my-select
        v-focus
        v-model="response.job_id"
        :options="jobs_list"
    />
    <span class="label-top">Имя соискателя</span>
    <my-input
        v-model="response.applicant_name"
        type="text"
        placeholder="Иванов Иван"
    />
    <span class="label-top">Email</span>
    <my-input
        v-model="response.email"
        type="email"
        placeholder="ivanov@mail.ru"
    />
    <span class="label-top">Ссылка на резюме</span>
    <my-input
        v-model="response.resume_url"
        type="text"
        placeholder="http://hh.ru/resume/ivanov"
    />
    <span class="label-top">Образование</span>
    <my-input
        v-model="response.education"
        type="text"
        placeholder="Высшее, инженер-электронщик"
    />
    <span class="label-top">Опыт работы</span>
    <my-input
        v-model="response.experience"
        type="text"
        placeholder="1 год радиоинженером"
    />
    <span class="label-top">Навыки</span>
    <my-input
        v-model="response.skills"
        type="text"
        placeholder="Проектирование плат, KiCAD, общение с людьми"
    />
    <span class="label-top">Хочет денег в рублях</span>
    <my-input
        v-model="response.salary_desired"
        type="number"
        placeholder="60000"
    />
    <span class="label-top">Результат теста</span>
    <my-input
        v-model="response.questionnaire_result"
        type="number"
        placeholder="82"
    />
    <span class="label-top">Заметки</span>
    <my-textarea
        v-model="response.description"
        class="editor"
        placeholder="Работал в Яндексе над колонкой."
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
