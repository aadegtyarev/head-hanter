<template>
    <div>
        <div>
            <div>
                <h1> Интервью на вакансию «{{ interview.job_title }}»</h1>
                <h2>{{ interview.applicant_name }} [<a :href="`${response.resume_url}`">резюме</a>]</h2>
                <div>
                    <a :href="`mailo:${response.email}`">{{ response.email }}</a>
                    <p><strong>Образование: </strong>{{ response.education }}</p>
                    <p><strong>Опыт работы: </strong>{{ response.experience }}</p>
                    <p><strong>Хочет зарплату: </strong>{{ response.salary_desired }} руб</p>
                    <p><strong>Результат теста: </strong>{{ response.questionnaire_result }}</p>
                    <p><strong>Заметки: </strong>{{ response.description }}</p>
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

        return {
            response
        }
    }
}
</script>

<style scoped></style>
