<template>
    <textarea
        :value="modelValue"
        @input="updateTextarea"
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

<style></style>
