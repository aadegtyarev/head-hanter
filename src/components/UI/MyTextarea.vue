<template>
    <textarea
        :value="modelValue"
        @textarea="updateTextarea"
        class="textarea"
    />
</template>

<script>
export default {
    name: "my-textarea",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateTextarea(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style>
.textarea {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 10px;
}</style>
