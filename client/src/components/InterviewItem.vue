<template>
    <tr :class="{ 'gray-text': interview.closed }">
        <td>{{ interview.id }}</td>
        <td>{{ interview.date_human }}</td>
        <td>{{ interview.job_title }}</td>
        <td>{{ interview.applicant_name }}</td>
        <td>{{ interview.detail }}</td>
        <td>{{ interview.interviewer_name }}</td>
        <td>{{ interview.result }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    :class="{ 'btn-secondary': interview.closed }"
                    @click="$router.push(`/interview/${interview.id}`)"
                >Смотреть</my-button>
                <my-button
                    v-if="!interview.closed"
                    @click="close"
                >Завершить</my-button>
                <my-button
                    v-if="interview.closed"
                    @click="open"
                >Возобновить</my-button>
                <my-button>Удалить</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close', this.interview)
        },
        open() {
            this.$emit('open', this.interview)
        },
    },
    props: {
        interview: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
