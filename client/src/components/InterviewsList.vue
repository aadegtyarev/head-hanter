<template>
    <div v-if="interviews.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Дата и время</th>
            <th>Вакансия</th>
            <th>Соискатель</th>
            <th>Детали</th>
            <th>Кто ведёт</th>
            <th>Отзыв руководителя</th>
            <th>Действия</th>
            <interview-item
                v-for="interview in interviews"
                :interview="interview"
                :key="interview.id"
                @close="close"
                @open="open"
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
import useEditInterview from "@/hooks/useEditInterview"

export default {
    components: { InterviewItem },
    methods: {
        close(interview) {
            interview.closed = true
            this.editInterview(interview)
        },
        open(interview) {
            interview.closed = false
            this.editInterview(interview)
        }
    },
    props: {
        interviews: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const { editInterview } = useEditInterview(props.interviews)

        return {
            editInterview,
        }
    }
};
</script>

<style scoped></style>
