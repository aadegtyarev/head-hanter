<template>
    <div>
        <form @submit.prevent>
            <h4>Редактирование вакансии</h4>
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
            <div class="job_btns">
                <my-button
                    class="btn_save"
                    @click="saveJob"
                >
                    Сохранить
                </my-button>
                <my-button
                    class="btn_close"
                    @click="close"
                >
                    Закрыть
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
        },
        close() {
            this.$emit('hideDialog')
        },
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

.btn_save,
.btn_close {
    align-self: flex-end;
    margin-top: 15px;
}

.job_btns {
    display: flex;
}
</style>
