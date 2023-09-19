<template>
    <tr>
        <td>{{ response.id }}</td>
        <td>{{ response.job_title }}</td>
        <td>{{ response.salary_desired }}</td>
        <td>{{ response.questionnaire_result }}</td>
        <td>{{ response.experience }}</td>
        <td>{{ response.education }}</td>
        <td>{{ response.applicant_name }}</td>
        <td>{{ getStatus(response) }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    @click="$router.push(`/response/${response.id}`)"
                >Смотреть</my-button>
                <my-button>Отказать</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    // refuse() {
    //     this.$emit('refuse', this.response)
    // },
    methods: {
        getStatus(response) {
            switch (response.status) {
                case 1:
                    return "интервью"
                    break;

                default:
                    return ""
                    break;
            }
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
