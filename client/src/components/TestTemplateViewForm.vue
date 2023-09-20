<template>
    <div>
        <h1>Задание «{{ test_template.name }}»</h1>
        <div>
            <p><strong>Заметки: </strong>{{ test_template.remark }}</p>
            <p><strong>Текст: </strong>{{ test_template.text }}</p>
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
            this.$emit('edit', this.test_template)
        }
    },
    props: {
        test_template: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
