<template>
    <div>
        <form @submit.prevent>
            <h2>Добавление отклика</h2>
            <response-form
                :response="response"
                :jobs_list="jobs_list"
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
import ResponseForm from "@/components/ResponseForm.vue";

export default {
    components: {
        ResponseForm,
    },
    data() {
        return {
        }
    },
    methods: {
        create() {
            this.$emit('create', this.response)
        },
    },
    props: {
        jobs_list: {
            type: Array,
            required: true,
        },
        response: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
