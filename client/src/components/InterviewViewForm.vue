<template>
    <div>
        <div>
            <div>
                <div>
                    <h1>Интервью на «{{ job.job_title }}»</h1>
                    <h2>Интервью</h2>
                    <p><strong>Дата и время: </strong>{{ interview.date_human }}</p>
                    <p><strong>Проводит: </strong>{{ interview.interviewer_name }}</p>
                    <p><strong>Назначил: </strong>{{ interview.user_name }}</p>
                    <p><strong>Заметки: </strong>{{ interview.detail }}</p>
                    <p><strong>Заключение: </strong>{{ interview.result }}</p>
                    <h2>{{ response.applicant_name }} [<a :href="`${response.resume_url}`">резюме</a>]</h2>
                    <p><a :href="`mailo:${response.email}`">{{ response.email }}</a></p>
                    <p><strong>Результат теста: </strong>{{ response.questionnaire_result }}</p>
                    <p><strong>Заметки: </strong>{{ response.description }}</p>
                    <h3>Зарплата</h3>
                    <p><strong>Предлагаем </strong>от {{ job.salary_from }} до {{ job.salary_to }} руб</p>
                    <p><strong>Хочет: </strong>{{ response.salary_desired }} руб</p>
                    <h3>Образование</h3>
                    <p><strong>Надо: </strong>{{ job.education }}</p>
                    <p><strong>Есть: </strong>{{ response.education }}</p>
                    <h3>Опыт</h3>
                    <p><strong>Надо: </strong>{{ job.experience }}</p>
                    <p><strong>Есть: </strong>{{ response.experience }}</p>
                    <h3>Навыки</h3>
                    <p><strong>Надо: </strong>{{ job.skills }}</p>
                    <p><strong>Есть: </strong>{{ response.skills }}</p>
                </div>
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
