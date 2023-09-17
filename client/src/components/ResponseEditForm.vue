<template>
    <div>
        <form @submit.prevent>
            <my-input
                v-model="response.applicant_name"
                type="text"
                placeholder="Имя соискателя"
            />
            <my-input
                v-model="response.email"
                type="email"
                placeholder="Email"
            />
            <my-input
                v-model="response.resume_url"
                type="text"
                placeholder="Ссылка на резюме"
            />
            <my-input
                v-model="response.education"
                type="text"
                placeholder="Образование"
            />
            <my-input
                v-model="response.experience"
                type="text"
                placeholder="Опыт работы"
            />
            <my-input
                v-model="response.salary_desired"
                type="number"
                placeholder="Желаема зарплата, руб"
            />
            <my-input
                v-model="response.questionnaire_result"
                type="text"
                placeholder="Результат теста"
            />
            <my-textarea
                v-model="response.description"
                placeholder="Заметки"
                type="text"
            />
            <my-input
                v-model="response.result"
                placeholder="Решение"
                type="text"
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
export default {
    methods: {
        save() {
            this.$emit('save', this.response)
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
