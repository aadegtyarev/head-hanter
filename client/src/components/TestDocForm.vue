<template>
    <span class="label-top">Название</span>
    <my-input
        v-focus
        v-model="test_doc.name"
        type="text"
        placeholder="Тут лучше писать название вакансии"
    />
    <span class="label-top">Комментарий</span>
    <my-textarea
        v-model="test_doc.remark"
        type="text"
        placeholder="Короткий коммент для внутренних нужд"
    />
    <span class="label-top">Текст</span>
    <my-textarea
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
