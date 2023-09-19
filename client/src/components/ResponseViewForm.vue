<template>
    <div>
        <div>
            <div>
                <p><strong>Имя соискателя: </strong>{{ response.applicant_name }}</p>
                <p><strong>Email: </strong>{{ response.email }}</p>
                <p><strong>Ссылка на резюме: </strong>{{ response.resume_url }}</p>
                <p><strong>Образование: </strong>{{ response.education }}</p>
                <p><strong>Опыт работы: </strong>{{ response.experience }}</p>
                <p><strong>Желаема зарплата, руб: </strong>{{ response.salary_desired }}</p>
                <p><strong>Результат теста: </strong>{{ response.questionnaire_result }}</p>
                <p><strong>Заметки: </strong>{{ response.description }}</p>
            </div>
        </div>
        <div v-if="response.interview_id > 0">
            <p class="green-text">Назначено интервью {{ response.interview_date_human }}, детали: {{
                response.interview_detail
            }}</p>

        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                v-if="!response.interview_id > 0"
                @click="interview"
            >Пригласить на интервью</my-button>
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
            this.$emit('edit', this.response)
        },
        interview() {
            this.$emit('interview', this.response)
        }
    },
    props: {
        response: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
