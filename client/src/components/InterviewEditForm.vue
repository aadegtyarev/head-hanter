<template>
    <div>
        <h1> Интервью на «{{ interview.job_title }}»</h1>
        <h2>{{ interview.applicant_name }}</h2>
        <form @submit.prevent>
            <interview-form
                :interview="interview"
                :users_list="users_list"
            />
            <my-textarea
                v-model="interview.result"
                type="text"
                placeholder="Заключение"
            />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="save"
                >
                    Сохранить
                </my-button>
                <my-button @click="cancel">
                    Отменить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import dateFormat, { masks } from "dateformat";
import useMyFunction from "@/hooks/useMyFunction";
import InterviewForm from "@/components/InterviewForm.vue"

var interview_undo = {}

export default {
    components: {
        InterviewForm,
    },
    methods: {
        save() {
            this.$emit('save', this.interview)
            this.users_list.forEach(element => {
                if (element.value == this.interview.interviewer_id) {
                    this.interview.interviewer_name = element.name
                }
            });
        },
        cancel() {
            this.cloneObj(interview_undo, this.interview)
            this.$emit('cancel')
        },
        changeDateTime() {
            const datetime = this.interview.date_and_time;
            this.interview.date_human = dateFormat(datetime, "dd.mm.yyyy HH:MM");
        }
    },
    props: {
        users_list: {
            type: Array,
            required: true,
        },
        interview: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { cloneObj } = useMyFunction()

        cloneObj(props.interview, interview_undo)
        return {
            cloneObj
        }
    }
}
</script>

<style scoped></style>
