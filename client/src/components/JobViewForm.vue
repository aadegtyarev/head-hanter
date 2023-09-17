<template>
    <div>
        <div>
            <div>
                <p><strong>Зарплата от, руб: </strong>{{ job.salary_from }}</p>
                <p><strong>Зарплата до, руб: </strong>{{ job.salary_to }}</p>
                <p><strong>Навыки: </strong>{{ job.skills }}</p>
                <p><strong>Образование: </strong>{{ job.education }}</p>
                <p><strong>Требуемый опыт: </strong>{{ job.experience }}</p>
                <p><strong>Ссылка на тестовое задание: </strong>{{ job.test_doc }}</p>
                <p><strong>Описание: </strong>{{ job.detail }}</p>
            </div>
        </div>
        <div class="app-btns">
            <my-button @click="editJob">Редактировать</my-button>
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
        editJob() {
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
