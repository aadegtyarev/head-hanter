<template>
    <label class="label-top">Название</label>
    <my-input
        v-focus
        v-model="test_doc.name"
        type="text"
        placeholder="Тут лучше писать название вакансии"
    />
    <label class="label-top">Комментарий</label>
    <my-textarea
        v-model="test_doc.remark"
        type="text"
        placeholder="Короткий коммент для внутренних нужд"
    />
    <label class="label-top">Текст</label>
    <my-textarea
        class="editor"
        v-model="test_doc.text"
        type="text"
        placeholder="Подробное описание задания"
    />
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        test_doc: {
            type: Object,
            required: true,
        },
    },
    methods: {
    },
}
</script>

<style scoped></style>
