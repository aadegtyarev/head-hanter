<template>
    <div>
        <form @submit.prevent>
            <h1>Создание тестового задания</h1>
            <test-doc-form :test_doc="test_doc" />
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
import TestDocForm from "@/components/TestDocForm.vue";

export default {
    components: {
        TestDocForm,
    },
    data() {
        return {

        }
    },
    props: {
        test_doc: {
            type: Object,
            required: true,
        },
    },
    methods: {
        create() {
            this.$emit('create', this.test_doc)
        },
        cancel() {
            this.$emit('cancel')
        }
    },
}
</script>

<style scoped></style>
