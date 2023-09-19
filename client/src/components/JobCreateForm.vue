<template>
    <div>
        <form @submit.prevent>
            <h2>Создание вакансии</h2>
            <job-form :job="job" />
            <div class="app-btns">
                <my-button @click="create">
                    Создать
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
    },
}
</script>

<style scoped></style>
