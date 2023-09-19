<template>
    <div>
        <form @submit.prevent>
            <h4>Пригласить на вакансию «{{ response.job_title }}»</h4>
            <my-input
                v-focus
                v-model="interview.date_and_time"
                type="datetime-local"
                placeholder="Дата и время"
            />
            <my-input
                v-model="interview.detail"
                type="text"
                placeholder="Заметки"
            />
            <div class="app-btns">
                <my-button @click="create">
                    Создать
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            interview: {}
        }
    },
    //date_and_time:Tue Sep 19 2023 11:01:08 GMT+0400 (GMT+04:00)
    //"2023-09-19T12:00"
    props: {
        response: {
            type: Object,
            required: true,
        },
    },
    methods: {
        create() {
            this.interview.job_id = this.response.job_id
            this.interview.response_id = this.response.id
            this.$emit('create', this.interview)
        },
    },
}
</script>

<style scoped></style>
