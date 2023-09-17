<template>
    <div>
        <form @submit.prevent>
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
            <div class="form-btns">
                <my-button @click="saveJob">
                    Сохранить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        saveJob() {
            this.$emit('save', this.job)
        }
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
