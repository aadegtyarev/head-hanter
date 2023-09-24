<template>
    <div>
        <h1>Редактирование задания «{{ test_doc.name }}»</h1>
        <form @submit.prevent>
            <test-doc-form :test_doc="test_doc" />
            <div class="app-btns">
                <my-button
                    class="btn-primary"
                    @click="save"
                >
                    Сохранить
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
import useMyFunction from "@/hooks/useMyFunction";

var test_doc_undo = {}

export default {
    components: {
        TestDocForm,
    },

    methods: {
        save() {
            this.$emit('save', this.test_doc)
        },
        cancel() {
            this.cloneObj(test_doc_undo, this.test_doc)
            this.$emit('cancel')
        }
    },
    data() {
        return {
        };
    },
    props: {
        test_doc: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { cloneObj } = useMyFunction()

        cloneObj(props.test_doc, test_doc_undo)
        return {
            cloneObj
        }
    }
}
</script>

<style scoped></style>
