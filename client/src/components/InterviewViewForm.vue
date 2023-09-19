<template>
    <div>
        <div>
            <div>
                <h1> Интервью на вакансию «{{ interview.job_title }}»</h1>
                <h2>{{ interview.applicant_name }}</h2>
                <p><strong>Дата и время: </strong>{{ interview.date_human }}</p>
                <p><strong>Заметки: </strong>{{ interview.detail }}</p>
                <p><strong>Заключение: </strong>{{ interview.result }}</p>
            </div>
        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                class="btn-primary"
                @click="$router.go(-1)"
            >Назад</my-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        edit() {
            this.$emit('edit', this.interview)
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
