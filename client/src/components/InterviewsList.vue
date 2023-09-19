<template>
    <div v-if="interviews.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Дата и время</th>
            <th>Вакансия</th>
            <th>Соискатель</th>
            <th>Детали</th>
            <th>Кто ведёт</th>
            <th>Кто назначил</th>
            <th>Действия</th>
            <interview-item
                v-for="interview in interviews"
                :interview="interview"
                :key="interview.id"
            />
        </table>
    </div>
    <h4
        class="list-empty"
        v-else
    >Нет заявок на интервью</h4>
</template>

<script>
import InterviewItem from "@/components/InterviewItem.vue";
export default {
    components: { InterviewItem },
    props: {
        interviews: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
