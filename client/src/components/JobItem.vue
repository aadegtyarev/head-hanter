<template>
    <div class="job-item">
        <div>
            <div>{{ job.id }}</div>
            <div><strong>Название: </strong>{{ job.job_title }}</div>
            <div><strong>Описание: </strong>{{ job.detail }}</div>
        </div>
        <div class="btns">
            <my-button
                class="btn-primary"
                @click="$router.push(`/jobs/${job.id}`)"
            >Открыть</my-button>
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

<style scoped></style>
