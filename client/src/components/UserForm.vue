<template>
    <div>
        <form @submit.prevent>
            <label class="label-top">Имя</label>
            <my-input
                v-focus
                v-model="user.name"
                type="text"
                placeholder="Иван Петров"
            />
            <label class="label-top">Логин</label>
            <my-input
                v-model="user.login"
                type="text"
                placeholder="petrovi"
            />
            <label class="label-top">Логин в Телеграм</label>
            <my-input
                v-model="user.tg_login"
                type="text"
                placeholder="petrov-i"
            />
            <label class="label-top">Email</label>
            <my-input
                v-model="user.email"
                type="email"
                placeholder="petrovi@mail.com"
            />
            <label class="label-top">Должность</label>
            <my-input
                v-model="user.position"
                type="text"
                placeholder="Инженер"
            />
            <label class="label-top">Роль</label>
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
