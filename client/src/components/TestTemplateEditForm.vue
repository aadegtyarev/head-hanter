<template>
    <div>
        <h1>Редактирование задания «{{ test_template.name }}»</h1>
        <form @submit.prevent>
            <test-template-form :test_template="test_template" />
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
import TestTemplateForm from "@/components/TestTemplateForm.vue";
import useMyFunction from "@/hooks/useMyFunction";

var test_template_undo = {}

export default {
    components: {
        TestTemplateForm,
    },

    methods: {
        save() {
            this.$emit('save', this.test_template)
        },
        cancel() {
            this.cloneObj(test_template_undo, this.test_template)
            this.$emit('cancel')
        }
    },
    data() {
        return {
        };
    },
    props: {
        test_template: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const { cloneObj } = useMyFunction()

        cloneObj(props.test_template, test_template_undo)
        return {
            cloneObj
        }
    }
}
</script>

<style scoped></style>
