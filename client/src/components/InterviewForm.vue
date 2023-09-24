<template>
    <label class="label-top">Кто будет проводить</label>
    <my-select
        v-focus
        v-model="interview.interviewer_id"
        :options="users_list"
        placeholder="Кто будет проводить"
    />
    <label class="label-top">Дата и время</label>
    <my-input
        v-focus
        v-model="interview.date_and_time"
        type="datetime-local"
        placeholder="Дата и время"
    />
    <label class="label-top">Заметки</label>
    <my-input
        v-model="interview.detail"
        type="text"
        placeholder="Заметки"
    />
</template>

<script>
export default {
    data() {
        return {
        }
    },
    //date_and_time:Tue Sep 19 2023 11:01:08 GMT+0400 (GMT+04:00)
    //"2023-09-19T12:00"
    props: {
        users_list: {
            type: Array,
            required: true,
        },
        interview: {
            type: Object,
            required: true,
        },
    },
    methods: {
    },
}
</script>

<style scoped></style>
