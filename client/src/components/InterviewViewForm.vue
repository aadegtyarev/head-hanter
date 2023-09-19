<template>
    <div>
        <div>
            <div>
                <h1> Интервью</h1>
                <h2>Вакансия «{{ interview.job_title }}»</h2>
                <div>
                    <p><strong>Зарплата </strong>от {{ job.salary_from }} до {{ job.salary_to }} руб</p>
                    <p><strong>Образование: </strong>{{ job.education }}</p>
                    <p><strong>Требуемый опыт: </strong>{{ job.experience }}</p>
                    <p><strong>Нужные навыки: </strong>{{ job.skills }}</p>
                    <p><strong>Ссылка на тестовое задание: </strong>{{ job.test_doc }}</p>
                    <p><strong>Описание: </strong>{{ job.detail }}</p>
                </div>
                <h2> {{ interview.applicant_name }} [<a :href="`${response.resume_url}`">резюме</a>]</h2>
                <div>
                    <p><strong>Зарплата: </strong>{{ response.salary_desired }} руб</p>
                    <p><strong>Образование: </strong>{{ response.education }}</p>
                    <p><strong>Опыт работы: </strong>{{ response.experience }}</p>
                    <p><strong>Результат теста: </strong>{{ response.questionnaire_result }}</p>
                    <p><strong>Заметки: </strong>{{ response.description }}</p>
                    <a :href="`mailo:${response.email}`">{{ response.email }}</a>
                </div>
                <h2>Интервью</h2>
                <p><strong>Дата и время: </strong>{{ interview.date_human }}</p>
                <p><strong>Проводит: </strong>{{ interview.interviewer_name }}</p>
                <p><strong>Назначил: </strong>{{ interview.user_name }}</p>
                <p><strong>Заметки: </strong>{{ interview.detail }}</p>
                <p><strong>Заключение: </strong>{{ interview.result }}</p>
            </div>
        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                class="btn-primary"
                @click="$router.go(-1)"
            >Назад</my-button>
        </div>
    </div>
</template>

<script>
import useGetResponse from "@/hooks/useGetResponse"
import useGetJob from "@/hooks/useGetJob"

export default {
    methods: {
        edit() {
            this.$emit('edit', this.interview)
        }
    },
    props: {
        interview: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { response } = useGetResponse(props.interview.response_id)
        const { job } = useGetJob(props.interview.job_id)

        return {
            response,
            job
        }
    }
}
</script>

<style scoped></style>
