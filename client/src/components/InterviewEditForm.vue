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
                <my-button @click="save">
                    Сохранить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import dateFormat, { masks } from "dateformat";

export default {
    methods: {
        save() {
            this.$emit('save', this.interview)
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
}
</script>

<style scoped></style>
