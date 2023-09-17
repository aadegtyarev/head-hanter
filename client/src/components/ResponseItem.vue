<template>
    <tr>
        <td>{{ response.id }}</td>
        <td>{{ response.job_title }}</td>
        <td>{{ response.salary_desired }}</td>
        <td>{{ response.questionnaire_result }}</td>
        <td>{{ response.experience }}</td>
        <td>{{ response.education }}</td>
        <td>{{ response.applicant_name }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    @click="$router.push(`/response/${response.id}`)"
                >Открыть</my-button>
                <my-button @click="refuse">Отказать</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    refuse() {
        this.$emit('refuse', this.response)
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
