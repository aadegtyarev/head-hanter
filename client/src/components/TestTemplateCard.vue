<template>
    <div>
        <test-template-view-form
            v-if="!formEditVisible"
            :test_template="test_template"
            @edit="showEditForm"
        />

        <test-template-edit-form
            v-if="formEditVisible"
            :test_template="test_template"
            @save="editTestTemplate"
            @cancel="hideEditForm"
        />
    </div>
</template>

<script>
import TestTemplateEditForm from "@/components/TestTemplateEditForm.vue";
import TestTemplateViewForm from "@/components/TestTemplateViewForm.vue";
import useEditTestTemplate from "@/hooks/useEditTestTemplate"

export default {
    components: {
        TestTemplateEditForm,
        TestTemplateViewForm
    },
    props: {
        test_template: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { editTestTemplate, hideEditForm, showEditForm, formEditVisible } = useEditTestTemplate()
        return {
            editTestTemplate,
            hideEditForm,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
