<template>
    <tr :class="{ 'gray-text': test_doc.closed }">
        <td>{{ test_doc.id }}</td>
        <td>{{ test_doc.name }}</td>
        <td>{{ test_doc.remark }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    :class="{ 'btn-secondary': test_doc.closed }"
                    @click="$router.push(`/test-doc/${test_doc.id}`)"
                >Смотреть</my-button>
                <my-button
                    v-if="!test_doc.closed"
                    @click="close"
                >В архив</my-button>
                <my-button
                    v-if="test_doc.closed"
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
            this.$emit('close', this.test_doc)
        },
        open() {
            this.$emit('open', this.test_doc)
        },
    },
    props: {
        test_doc: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
