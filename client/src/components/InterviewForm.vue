<template>
    <label class="label-top">Кто будет проводить</label>
    <my-select
        v-focus
        v-model="interview.interviewer_id"
        :options="users_list"
        name="interviewer_id"
        placeholder="Кто будет проводить"
    />
    <label class="label-top">Дата и время</label>
    <my-input
        v-focus
        v-model="interview.date_and_time"
        type="datetime-local"
        name="date_and_time"
        placeholder="Дата и время"
    />
    <label class="label-top">Заметки</label>
    <my-input
        v-model="interview.detail"
        type="text"
        name="detail"
        placeholder="Место проведения и другие пометки"
    />
</template>

<script>
export default {
    props: {
        users_list: {
            type: Array,
            required: true,
        },
        interview: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style scoped></style>
