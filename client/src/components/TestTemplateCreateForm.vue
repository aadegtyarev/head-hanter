<template>
    <div>
        <form @submit.prevent>
            <h1>Создание тестового задания</h1>
            <test-template-form :test_template="test_template" />
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
import TestTemplateForm from "@/components/TestTemplateForm.vue";

export default {
    components: {
        TestTemplateForm,
    },
    data() {
        return {

        }
    },
    props: {
        test_template: {
            type: Object,
            required: true,
        },
    },
    methods: {
        create() {
            this.$emit('create', this.test_template)
        },
        cancel() {
            this.$emit('cancel')
        }
    },
}
</script>

<style scoped></style>
