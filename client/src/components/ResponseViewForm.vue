<template>
    <div>
        <div>
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
            </div>
        </div>
        <fieldset class="card-item">
            <legend>Изменить статус</legend>
            <response-change-status-form :response="response" />
        </fieldset>

        <fieldset class="card-item">
            <legend>Создать письма</legend>
            <div>
                <my-button @click="testDoc">Тестовое задание</my-button>
                <my-button @click="interview">Пригласить на интервью</my-button>
                <my-button @click="refuse">Отказать</my-button>
            </div>
        </fieldset>
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
import useGetJob from "@/hooks/useGetJob"
import useSendEmails from "@/hooks/useSendEmails"
import ResponseRequirementsTable from "@/components/ResponseRequirementsTable"
import ResponseChangeStatusForm from "@/components/ResponseChangeStatusForm"
import useGetTestDoc from "@/hooks/useGetTestDoc"

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
            this.sendInterviewMail(this.response.email, this.response.job_title)
        },
        refuse() {
            this.sendRefuseMail(this.response.email, this.response.job_title)
        },
        testDoc() {
            this.sendTestDoc(this.response.email, this.response.job_title, this.test_doc.text)
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
        const { sendInterviewMail, sendRefuseMail, sendTestDoc } = useSendEmails()
        const { test_doc } = useGetTestDoc(props.response.test_doc_id)

        return {
            job,
            test_doc,
            sendInterviewMail,
            sendRefuseMail,
            sendTestDoc
        }
    }
}
</script>

<style scoped></style>
