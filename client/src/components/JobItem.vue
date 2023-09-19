<template>
    <tr>
        <td>{{ job.id }}</td>
        <td>{{ job.job_title }}</td>
        <td>{{ job.detail }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    @click="$router.push(`/job/${job.id}`)"
                >Открыть</my-button>
                <my-button @click="remove">Удалить</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    remove() {
        this.$emit('remove', this.job)
    },
    props: {
        job: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
