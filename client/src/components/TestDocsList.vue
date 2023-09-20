<template>
    <div v-if="test_docs.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Название</th>
            <th>Заметки</th>
            <th>Действия</th>
            <test-doc-item
                v-for="test_doc in test_docs"
                :test_doc="test_doc"
                :key="test_doc.id"
                @close="close"
                @open="open"
            />
        </table>
    </div>
    <h4
        class="list-empty"
        v-else
    >Нет заданий, подходящих под условие поиска</h4>
</template>

<script>
import TestDocItem from "@/components/TestDocItem.vue";
export default {
    components: { TestDocItem },
    methods: {
        close(test_doc) {
            this.$emit('close', test_doc)
        },
        open(test_doc) {
            this.$emit('open', test_doc)
        }
    },
    props: {
        test_docs: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
