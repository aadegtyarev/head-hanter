<template>
    <div>
        <div class="form">
            <h1>Отклик на «{{ job.job_title }}»</h1>
            <h2>{{ response.applicant_name }} [<a :href="`${response.resume_url}`">резюме</a>]</h2>
            <div v-if="response.interview_id > 0">
                <p class="green-text"><b>Назначено <a :href="`/interview/${response.interview_id}`">интервью {{
                    response.interview_date_human }}</a></b></p>
            </div>
            <div>
                <p><strong>Email</strong> <a
                        :href="`mailto:${response.email}?subject=Re: Отклик на вакансию ${job.job_title}`"
                    >{{
                        response.email
                    }}</a></p>
                <p><strong>Результат теста </strong>{{ response.questionnaire_result }}</p>
                <p><strong>Заметки </strong>{{ response.description }}</p>
                <response-requirements-table
                    :response="response"
                    :job="job"
                />
                <response-change-status-form :response="response" />
            </div>
        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                v-if="!response.interview_id > 0"
                @click="interview"
            >Пригласить на интервью</my-button>
            <my-button>Отказать</my-button>
            <my-button
                class="btn-primary"
                @click="$router.go(-1)"
            >Назад</my-button>
        </div>
    </div>
</template>

<script>
import useGetJob from "@/hooks/useGetJob"
import ResponseRequirementsTable from "@/components/ResponseRequirementsTable"
import ResponseChangeStatusForm from "@/components/ResponseChangeStatusForm"

export default {
    components: {
        ResponseRequirementsTable,
        ResponseChangeStatusForm
    },
    methods: {
        edit() {
            this.$emit('edit', this.response)
        },
        interview() {
            this.$emit('interview', this.response)
        }
    },
    props: {
        response: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { job } = useGetJob(props.response.job_id)

        return {
            job
        }
    }
}
</script>

<style scoped></style>
