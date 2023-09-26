<template>
    <div>
        <form @submit="checkForm">
            <h4>Записать на интервью «{{ response.job_title }}»</h4>
            <interview-form
                :interview="interview"
                :users_list="users_list"
            />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    type="submit"
                    @click="create"
                >
                    Записать
                </my-button>
                <my-button @click="cancel">
                    Отменить
                </my-button>
            </div>
            <my-error-message :errors="errors" />
        </form>
    </div>
</template>

<script>
import InterviewForm from "@/components/InterviewForm.vue"
import MyErrorMessage from "./UI/MyErrorMessage.vue"

export default {
    components: {
        InterviewForm,
        MyErrorMessage
    },
    data() {
        return {
            interview: {},
            errors: []
        }
    },
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
            // this.$emit('create', this.interview)
        },
        cancel() {
            this.$emit('cancel')
        },
        checkForm(e) {
            if (this.interview.interviewer_id
                && this.interview.date_and_time
                && this.interview.detail) {
                return true
            }

            this.errors = [];

            if (!this.interview.interviewer_id) {
                this.errors.push('Выберите интервьювера.');
            }
            if (!this.interview.date_and_time) {
                this.errors.push('Укажите дату и время.');
            }

            if (!this.interview.detail) {
                this.errors.push('Напишите место проведения в поле Заметки.');
            }

            e.preventDefault();
        }
    },
}
</script>

<style scoped></style>
