<template>
    <div>
        <form @submit.prevent>
            <h4>Записать на интервью «{{ response.job_title }}»</h4>
            <interview-form
                :interview="interview"
                :users_list="users_list"
            />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="create"
                >
                    Записать
                </my-button>
                <my-button @click="cancel">
                    Отменить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import InterviewForm from "@/components/InterviewForm.vue"

export default {
    components: {
        InterviewForm,
    },
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
        users_list: {
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
        cancel() {
            this.$emit('cancel')
        },
    },
}
</script>

<style scoped></style>
