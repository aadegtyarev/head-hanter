<template>
    <div>
        <h1>{{ job.job_title }}</h1>
        <div>
            <p><strong>Зарплата </strong>от {{ job.salary_from }} до {{ job.salary_to }} руб</p>
            <p><strong>Навыки: </strong>{{ job.skills }}</p>
            <p><strong>Образование: </strong>{{ job.education }}</p>
            <p><strong>Требуемый опыт: </strong>{{ job.experience }}</p>
            <p><strong>Ссылка на тестовое задание: </strong>{{ job.test_doc }}</p>
            <p><strong>Описание: </strong>{{ job.detail }}</p>
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
            this.$emit('edit', this.job)
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
