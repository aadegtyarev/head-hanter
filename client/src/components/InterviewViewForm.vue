<template>
    <div>
        <h1>Интервью на «{{ job.job_title }}»</h1>
        <h2>Подробности</h2>
        <p><strong>Дата и время: </strong>{{ interview.date_human }}</p>
        <p><strong>Проводит: </strong>{{ interview.interviewer_name }}</p>
        <p><strong>Назначил: </strong>{{ interview.user_name }}</p>
        <p><strong>Заметки: </strong>{{ interview.detail }}</p>
        <p><strong>Заключение: </strong>{{ interview.result }}</p>
        <response-change-status-form :response="response" />
        <div class="app-btns">
            <my-button
                class="btn-primary"
                @click="edit"
            >Редактировать</my-button>
            <my-button @click="sendMail">Создать письмо с тестовым заданием</my-button>
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
import useSendEmails from "@/hooks/useSendEmails"
import useGetJob from "@/hooks/useGetJob"
import useGetTestDoc from "@/hooks/useGetTestDoc"
import ResponseRequirementsTable from "@/components/ResponseRequirementsTable.vue"
import ResponseChangeStatusForm from "@/components/ResponseChangeStatusForm"

export default {
    components: {
        ResponseRequirementsTable,
        ResponseChangeStatusForm
    },
    methods: {
        edit() {
            this.$emit('edit', this.interview)
        },
        sendMail() {
            this.sendTestDoc(this.response.email, this.job.job_title, this.test_doc.text)
        }
    },
    props: {
        interview: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { job } = useGetJob(props.interview.job_id)
        const { response } = useGetResponse(props.interview.response_id)
        const { test_doc } = useGetTestDoc(props.interview.test_doc_id)
        const { sendTestDoc } = useSendEmails()

        return {
            response,
            job,
            test_doc,
            sendTestDoc
        }
    }
}
</script>

<style scoped></style>
