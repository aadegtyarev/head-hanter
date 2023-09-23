<template>
    <label class="label-top">Вакансия</label>
    <my-select
        v-focus
        v-model="response.job_id"
        :options="jobs_list"
    />
    <label class="label-top">Имя соискателя</label>
    <my-input
        v-model="response.applicant_name"
        type="text"
        placeholder="Иванов Иван"
    />
    <label class="label-top">Email</label>
    <my-input
        v-model="response.email"
        type="email"
        placeholder="ivanov@mail.ru"
    />
    <label class="label-top">Ссылка на резюме</label>
    <my-input
        v-model="response.resume_url"
        type="text"
        placeholder="http://hh.ru/resume/ivanov"
    />
    <label class="label-top">Образование</label>
    <my-input
        v-model="response.education"
        type="text"
        placeholder="Высшее, инженер-электронщик"
    />
    <label class="label-top">Опыт работы</label>
    <my-input
        v-model="response.experience"
        type="text"
        placeholder="1 год радиоинженером"
    />
    <label class="label-top">Навыки</label>
    <my-input
        v-model="response.skills"
        type="text"
        placeholder="Проектирование плат, KiCAD, общение с людьми"
    />
    <label class="label-top">Хочет денег в рублях</label>
    <my-input
        v-model="response.salary_desired"
        type="number"
        placeholder="60000"
    />
    <label class="label-top">Результат теста</label>
    <my-input
        v-model="response.questionnaire_result"
        type="number"
        placeholder="82"
    />
    <label class="label-top">Заметки</label>
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
