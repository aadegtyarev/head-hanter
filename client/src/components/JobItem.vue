<template>
    <tr :class="{ 'gray-text': job.closed }">
        <td>{{ job.id }}</td>
        <td>{{ job.job_title }}</td>
        <td>от {{ job.salary_from }} до {{ job.salary_to }}</td>
        <td>{{ job.detail }}</td>
        <td>
            <div class="btns">
                <my-button
                    class="btn-primary"
                    :class="{ 'btn-secondary': job.closed }"
                    @click="$router.push(`/job/${job.id}`)"
                >Смотреть</my-button>
                <my-button
                    v-if="!job.closed"
                    @click="close"
                >В архив</my-button>
                <my-button
                    v-if="job.closed"
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
            this.$emit('close', this.job)
        },
        open() {
            this.$emit('open', this.job)
        },
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
