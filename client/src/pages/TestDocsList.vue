<template>
    <div>
        <h1>Тестовые задания</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Название для поиска"
            @input="fetchingTestDocs"
            v-focus
        />

        <div class="app-btns">
            <my-button @click="create">Создать задание</my-button>
        </div>
        <test-docs-list
            :test_docs="test_docs"
            @close="close"
            @open="open"
            v-if="!isTestDocsLoading"
        />
        <div v-else>Идёт загрузка...</div>
    </div>
</template>

<script>
import TestDocCreateForm from "@/components/TestDocCreateForm.vue";
import TestDocsList from "@/components/TestDocsList.vue";
import useTestDocs from "@/hooks/useTestDocs"
import useEditTestDoc from "@/hooks/useEditTestDoc"

import { ref } from 'vue'

export default {
    components: {
        TestDocCreateForm,
        TestDocsList,
    },
    methods: {
        close(test_doc) {
            test_doc.closed = true
            this.editTestDoc(test_doc)
        },
        open(test_doc) {
            test_doc.closed = false
            this.editTestDoc(test_doc)
        },
        create() {
            this.$router.push('/test-doc-create')
        }
    },
    data() {
        return {
            test_doc: {
            },
        };
    },
    setup(props) {
        const { searchQuery, test_docs, isTestDocsLoading, fetchingTestDocs } = useTestDocs(50);
        const { editTestDoc } = useEditTestDoc(test_docs)
        // const { createTestDoc, hideDialog, showDialog, dialogVisible } = useCreateTestDoc(test_docs)


        return {
            test_docs,
            isTestDocsLoading,
            searchQuery,
            fetchingTestDocs,
            editTestDoc,
            // createTestDoc,
            // hideDialog,
            // showDialog,
            // dialogVisible
        }
    }
};
</script>

<style></style>
