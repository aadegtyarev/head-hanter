<template>
    <div>
        <form @submit.prevent>
            <h2>Добавление отклика</h2>
            <response-form :response="response" />
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
        cancel() {
            this.$emit('cancel')
        }
    },
    props: {
        response: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
