<template>
    <div>
        <h1>Тестовые задания</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingTestTemplates"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="create">Создать задание</my-button>
        </div>
        <test-templates-list
            :test_templates="test_templates"
            @close="close"
            @open="open"
            v-if="!isTestTemplatesLoading"
        />
        <div v-else>Идёт загрузка...</div>
    </div>
</template>

<script>
import TestTemplateCreateForm from "@/components/TestTemplateCreateForm.vue";
import TestTemplatesList from "@/components/TestTemplatesList.vue";
import useTestTemplates from "@/hooks/useTestTemplates"
import useEditTestTemplate from "@/hooks/useEditTestTemplate"

import { ref } from 'vue'

export default {
    components: {
        TestTemplateCreateForm,
        TestTemplatesList,
    },
    methods: {
        close(test_template) {
            test_template.closed = true
            this.editTestTemplate(test_template)
        },
        open(test_template) {
            test_template.closed = false
            this.editTestTemplate(test_template)
        },
        create() {
            this.$router.push('/test-template-create')
        }
    },
    data() {
        return {
            test_template: {
            },
        };
    },
    setup(props) {
        const { searchQuery, test_templates, isTestTemplatesLoading, fetchingTestTemplates } = useTestTemplates(50);
        const { editTestTemplate } = useEditTestTemplate(test_templates)
        // const { createTestTemplate, hideDialog, showDialog, dialogVisible } = useCreateTestTemplate(test_templates)


        return {
            test_templates,
            isTestTemplatesLoading,
            searchQuery,
            fetchingTestTemplates,
            editTestTemplate,
            // createTestTemplate,
            // hideDialog,
            // showDialog,
            // dialogVisible
        }
    }
};
</script>

<style></style>
