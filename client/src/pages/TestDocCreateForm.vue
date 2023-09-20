<template>
    <div>
        <test-doc-create-form
            :test_doc="test_doc"
            @create="create"
            @cancel="cancel"
        />
    </div>
</template>

<script>
import TestDocCreateForm from "@/components/TestDocCreateForm.vue";
import useCreateTestDoc from "@/hooks/useCreateTestDoc"

export default {
    components: {
        TestDocCreateForm
    },
    methods: {
        create(test_doc) {
            this.createTestDoc(test_doc)
            this.$router.back()
        },
        cancel() {
            this.$router.back()
        },
    },
    data() {
        return {
            test_doc: {
                name: ""
            }
        };
    },
    setup(props) {
        const { createTestDoc } = useCreateTestDoc()

        return {
            createTestDoc,
        }
    }
};
</script>

<style scoped></style>
