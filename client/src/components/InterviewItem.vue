<template>
    <tr>
        <td>{{ interview.id }}</td>
        <td>{{ interview.date_human }}</td>
        <td>{{ interview.job_title }}</td>
        <td>{{ interview.applicant_name }}</td>
        <td>{{ interview.detail }}</td>
        <td>{{ interview.interviewer_name }}</td>
        <td>{{ interview.user_name }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    @click="$router.push(`/interview/${interview.id}`)"
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
    props: {
        interview: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
