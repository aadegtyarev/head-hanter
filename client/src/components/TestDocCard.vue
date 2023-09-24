<template>
    <div>
        <test-doc-view-form
            v-if="!formEditVisible"
            :test_doc="test_doc"
            @edit="showEditForm"
        />

        <test-doc-edit-form
            v-if="formEditVisible"
            :test_doc="test_doc"
            @save="editTestDoc"
            @cancel="hideEditForm"
        />
    </div>
</template>

<script>
import TestDocEditForm from "@/components/TestDocEditForm.vue";
import TestDocViewForm from "@/components/TestDocViewForm.vue";
import useEditTestDoc from "@/hooks/useEditTestDoc"

export default {
    components: {
        TestDocEditForm,
        TestDocViewForm
    },
    props: {
        test_doc: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { editTestDoc, hideEditForm, showEditForm, formEditVisible } = useEditTestDoc()
        return {
            editTestDoc,
            hideEditForm,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
