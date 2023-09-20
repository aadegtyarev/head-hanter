<template>
    <div>
        <test-template-create-form
            :test_template="test_template"
            @create="create"
            @cancel="cancel"
        />
    </div>
</template>

<script>
import TestTemplateCreateForm from "@/components/TestTemplateCreateForm.vue";
import useCreateTestTemplate from "@/hooks/useCreateTestTemplate"

export default {
    components: {
        TestTemplateCreateForm
    },
    methods: {
        create(test_template) {
            this.createTestTemplate(test_template)
            this.$router.back()
        },
        cancel() {
            this.$router.back()
        },
    },
    data() {
        return {
            test_template: {
                name: ""
            }
        };
    },
    setup(props) {
        const { createTestTemplate } = useCreateTestTemplate()

        return {
            createTestTemplate,
        }
    }
};
</script>

<style scoped></style>
