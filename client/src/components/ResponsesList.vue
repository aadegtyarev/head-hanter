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
            <th>Действия</th>
            <response-item
                v-for="response in responses"
                :response="response"
                :key="response.id"
                @remove="$emit('remove', response)"
                @edit="$emit('edit', response)"
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
export default {
    components: { ResponseItem },
    props: {
        responses: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
