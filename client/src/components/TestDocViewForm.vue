<template>
    <div>
        <h1>Задание «{{ test_doc.name }}»</h1>
        <div>
            <p><strong>Заметки: </strong>{{ test_doc.remark }}</p>
            <p><strong>Текст: </strong>{{ test_doc.text }}</p>
        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                class="btn-primary"
                @click="$router.go(-1)"
            >Назад</my-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        edit() {
            this.$emit('edit', this.test_doc)
        }
    },
    props: {
        test_doc: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
