<template>
    <div class="job">
        <div>
            <div>{{ job.id }}</div>
            <div><strong>Название: </strong>{{ job.job_title }}</div>
            <div><strong>Описание: </strong>{{ job.detail }}</div>
        </div>
        <div class="job_btns">
            <my-button @click="$router.push(`/jobs/${job.id}`)">Открыть</my-button>
            <my-button @click="$emit('remove', job)">Удалить</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.job {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.job_btns {
    display: flex;
}
</style>
