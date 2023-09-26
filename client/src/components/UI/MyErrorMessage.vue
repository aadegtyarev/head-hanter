<template>
    <div
        v-if="errors.length"
        class="msg-errors"
    >
        <p>Пожалуйста исправьте указанные ошибки:</p>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "my-button",
    props: {
        errors: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped></style>
