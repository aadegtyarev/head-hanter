<template>
    <div>
        <form @submit.prevent>
            <span class="label-top">Имя</span>
            <my-input
                v-focus
                v-model="user.name"
                type="text"
                placeholder="Иван Петров"
            />
            <span class="label-top">Логин</span>
            <my-input
                v-model="user.login"
                type="text"
                placeholder="petrovi"
            />
            <span class="label-top">Логин в Телеграм</span>
            <my-input
                v-model="user.tg_login"
                type="text"
                placeholder="petrov-i"
            />
            <span class="label-top">Email</span>
            <my-input
                v-model="user.email"
                type="email"
                placeholder="petrovi@mail.com"
            />
            <span class="label-top">Должность</span>
            <my-input
                v-model="user.position"
                type="text"
                placeholder="Инженер"
            />
            <span class="label-top">Роль</span>
            <my-select
                v-focus
                v-model="user.role_id"
                :options="roles_list"
            />
        </form>
    </div>
</template>

<script>
import useRoles from "@/hooks/useRoles"

export default {
    data() {
        return {

        }
    },
    methods: {
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { roles_list, fetchingRoles } = useRoles()

        return {
            fetchingRoles,
            roles_list
        }
    }
}
</script>

<style scoped></style>
