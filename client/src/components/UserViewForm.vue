<template>
    <div>
        <div>
            <div>
                <p><strong>Логин: </strong>{{ user.login }}</p>
                <p><strong>Логин Телеграм: </strong>{{ user.tg_login }}</p>
                <p><strong>Email: </strong>{{ user.email }}</p>
                <p><strong>Должность: </strong>{{ user.position }}</p>
            </div>
        </div>
        <div class="app-btns">
            <my-button @click="edit">Редактировать</my-button>
            <my-button
                class="btn-primary"
                @click="$router.go(-1)"
            >Назад</my-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        edit() {
            this.$emit('edit', this.user)
        }
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped></style>
