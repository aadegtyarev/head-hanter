<template>
    <div>
        <form @submit.prevent>
            <h1>Создание вакансии</h1>
            <job-form :job="job" />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="create"
                >
                    Создать
                </my-button>
                <my-button @click="cancel">
                    Отменить
                </my-button>
            </div>
        </form>
    </div>
</template>

<script>
import JobForm from "@/components/JobForm.vue";

export default {
    components: {
        JobForm,
    },
    data() {
        return {

        }
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
    methods: {
        create() {
            this.$emit('create', this.job)
        },
        cancel() {
            this.$emit('cancel')
        }
    },
}
</script>

<style scoped></style>
