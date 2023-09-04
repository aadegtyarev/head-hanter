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
                v-model="job.detail"
                type="text"
                placeholder="Описание"
            />
            <my-button
                class="btn_create"
                @click="createJob"
            >
                Создать
            </my-button>
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

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

.btn_create {
    align-self: flex-end;
    margin-top: 15px;
}
</style>
