<template>
    <select
        class="select"
        :value="modelValue"
        @change="changeOption"
    >
        <option
            disabled
            value=""
            selected
        >Выберите</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: "my-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            defaults: () => [],
        },
    },
    methods: {
        changeOption(event) {
            // console.log(event);
            this.$emit("update:modelValue", event.target.value);
            this.$emit("changeOption", event.target.value);
        },
    }
};
</script>
<style></style>
