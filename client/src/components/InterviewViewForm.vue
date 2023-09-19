<template>
    <div>
        <h1>Интервью на «{{ job.job_title }}»</h1>
        <h2>Подробности</h2>
        <p><strong>Дата и время: </strong>{{ interview.date_human }}</p>
        <p><strong>Проводит: </strong>{{ interview.interviewer_name }}</p>
        <p><strong>Назначил: </strong>{{ interview.user_name }}</p>
        <p><strong>Заметки: </strong>{{ interview.detail }}</p>
        <p><strong>Заключение: </strong>{{ interview.result }}</p>
        <div class="app-btns">
            <my-button
                class="btn-primary"
                @click="edit"
            >Редактировать</my-button>
            <my-button @click="$router.go(-1)">Назад</my-button>
        </div>
        <h2>{{ response.applicant_name }} [<a :href="`${response.resume_url}`">резюме</a>]</h2>
        <p><a :href="`mailo:${response.email}`">{{ response.email }}</a></p>
        <p><strong>Результат теста: </strong>{{ response.questionnaire_result }}</p>
        <p><strong>Заметки: </strong>{{ response.description }}</p>
        <response-requirements-table
            :response="response"
            :job="job"
        />
    </div>
</template>

<script>
import useGetResponse from "@/hooks/useGetResponse"
import useGetJob from "@/hooks/useGetJob"
import ResponseRequirementsTable from "@/components/ResponseRequirementsTable"

export default {
    components: {
        ResponseRequirementsTable,
    },
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
