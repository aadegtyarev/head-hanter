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
            this.$emit('edit', this.response)
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
