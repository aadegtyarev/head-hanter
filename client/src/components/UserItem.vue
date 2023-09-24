<template>
    <tr>
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.login }}</td>
        <td>{{ user.position }}</td>
        <td>{{ user.role_name }}</td>
        <td>
            <div class="card-btns">
                <my-button
                    class="btn-primary"
                    @click="$router.push(`/user/${user.id}`)"
                >Открыть</my-button>
                <my-button @click="close">Блокировать</my-button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close', this.user)
        }
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>
