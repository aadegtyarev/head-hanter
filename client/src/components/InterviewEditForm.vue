<template>
    <div>
        <h1> Интервью на вакансию «{{ interview.job_title }}»</h1>
        <h2>{{ interview.applicant_name }}</h2>
        <form @submit.prevent>
            <my-input
                v-model="interview.date_and_time"
                type="datetime-local"
                placeholder="Дата и время"
                @input="changeDateTime"
            />
            <my-textarea
                v-model="interview.detail"
                type="text"
                placeholder="Заметки"
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

var interview_undo = {}

export default {
    methods: {
        save() {
            this.$emit('save', this.interview)
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
