<template>
    <div v-if="responses.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Вакансия</th>
            <th>Хочет денег</th>
            <th>Результат теста</th>
            <th>Опыт</th>
            <th>Образование</th>
            <th>Имя</th>
            <th>Статус</th>
            <th>Решение</th>
            <th>Действия</th>
            <response-item
                v-for="response in responses"
                :response="response"
                :key="response.id"
                @edit="$emit('edit', response)"
                @close="close"
                @open="open"
            />
        </table>
    </div>
    <h4
        class="list-empty"
        v-else
    >Нет откликов</h4>
</template>

<script>
import ResponseItem from "@/components/ResponseItem.vue";
import useEditResponse from "@/hooks/useEditResponse"

export default {
    components: { ResponseItem },
    methods: {
        close(response) {
            response.closed = true
            this.editResponse(response)
        },
        open(response) {
            response.closed = false
            this.editResponse(response)
        }
    },
    props: {
        responses: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const { editResponse } = useEditResponse(props.responses)

        return {
            editResponse,
        }
    }
};
</script>

<style scoped></style>
