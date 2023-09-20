<template>
    <tr :class="{ 'gray-text': test_template.closed }">
        <td>{{ test_template.id }}</td>
        <td>{{ test_template.name }}</td>
        <td>{{ test_template.remark }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    :class="{ 'btn-secondary': test_template.closed }"
                    @click="$router.push(`/test-template/${test_template.id}`)"
                >Смотреть</my-button>
                <my-button
                    v-if="!test_template.closed"
                    @click="close"
                >Закрыть</my-button>
                <my-button
                    v-if="test_template.closed"
                    @click="open"
                >Вернуть</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close', this.test_template)
        },
        open() {
            this.$emit('open', this.test_template)
        },
    },
    props: {
        test_template: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
