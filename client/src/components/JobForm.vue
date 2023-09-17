<template>
    <div>
        <form @submit.prevent>
            <h4>Создание вакансии</h4>
            <my-input
                v-focus
                v-model="job.job_title"
                type="text"
                placeholder="Название"
            />
            <my-input
                v-model="job.salary_from"
                type="number"
                placeholder="Зарплата от, руб"
            />
            <my-input
                v-model="job.salary_to"
                type="number"
                placeholder="Зарплата до, руб"
            />
            <my-input
                v-model="job.skills"
                type="text"
                placeholder="Навыки"
            />
            <my-input
                v-model="job.education"
                type="text"
                placeholder="Образование"
            />
            <my-input
                v-model="job.experience"
                type="text"
                placeholder="Требуемый опыт"
            />
            <my-input
                v-model="job.test_doc"
                type="text"
                placeholder="Ссылка на тестовое задание"
            />
            <my-textarea
                v-model="job.detail"
                placeholder="Описание"
                type="text"
            />
            <div class="app-btns">
                <my-button @click="createJob">
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
            job: {
                job_title: '',
                detail: '',
            },
        }
    },
    methods: {
        createJob() {
            this.job.id = Date.now()
            this.$emit('create', this.job) // генерация события добавления записи, которое ловится в родителе App.vue
            this.job = {
                job_title: '',
                detail: '',
            }
        },
    },
}
</script>

<style scoped></style>
