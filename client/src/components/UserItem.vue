<template>
    <div class="card-item">
        <div class="card-fields">
            <div>{{ user.id }}</div>
            <div><strong>Имя: </strong>{{ user.name }}</div>
            <div><strong>Логин: </strong>{{ user.login }}</div>
            <div><strong>Должность: </strong>{{ user.position }}</div>
        </div>
        <div class="card-btns">
            <my-button
                class="btn-primary"
                @click="$router.push(`/user/${user.id}`)"
            >Открыть</my-button>
            <my-button @click="remove">Удалить</my-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        remove() {
            this.$emit('remove', this.user)
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
