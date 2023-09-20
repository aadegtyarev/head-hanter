<template>
    <tr :class="{ 'gray-text': response.closed }">
        <td>{{ response.id }}</td>
        <td>{{ response.job_title }}</td>
        <td>{{ response.salary_desired }}</td>
        <td>{{ response.questionnaire_result }}</td>
        <td>{{ response.experience }}</td>
        <td>{{ response.education }}</td>
        <td>{{ response.applicant_name }}</td>
        <td>{{ response.status_name }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    :class="{ 'btn-secondary': response.closed }"
                    @click="$router.push(`/response/${response.id}`)"
                >Смотреть</my-button>
                <my-button
                    v-if="!response.closed"
                    @click="close"
                >В архив</my-button>
                <my-button
                    v-if="response.closed"
                    @click="open"
                >Вернуть</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close', this.response)
        },
        open() {
            this.$emit('open', this.response)
        },
    },
    props: {
        response: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
