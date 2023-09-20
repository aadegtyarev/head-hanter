<template>
    <div v-if="test_templates.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Название</th>
            <th>Заметки</th>
            <th>Действия</th>
            <test-template-item
                v-for="test_template in test_templates"
                :test_template="test_template"
                :key="test_template.id"
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
import TestTemplateItem from "@/components/TestTemplateItem.vue";
export default {
    components: { TestTemplateItem },
    methods: {
        close(test_template) {
            this.$emit('close', test_template)
        },
        open(test_template) {
            this.$emit('open', test_template)
        }
    },
    props: {
        test_templates: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
