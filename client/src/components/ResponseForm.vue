<template>
    <div>
        <form @submit.prevent>
            <h4>Добавление отклика</h4>
            <my-select
                v-focus
                v-model="response.job_id"
                :options="jobs_list"
                placeholder="Вакансия"
            />
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
            response: {
                id: ''
            }
        }
    },
    methods: {
        create() {
            this.$emit('create', this.response)
            // this.response = {
            //     id: ''
            // }
        },
    },
    props: {
        jobs_list: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped></style>
