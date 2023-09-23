<template>
    <div class="navbar">
        <div
            class="logo"
            @click="$router.push('/')"
        >Head Hunter App</div>
        <div class="navbar-btns">
            <my-button
                v-if="isAuth"
                @click="$router.push('/')"
            >Главная</my-button>
            <my-button
                v-if="isAuth"
                @click="$router.push('/jobs')"
            >Вакансии</my-button>
            <my-button
                v-if="isAuth"
                @click="$router.push('/responses')"
            >Отклики</my-button>
            <my-button
                v-if="isAuth"
                @click="$router.push('/interviews')"
            >Интервью</my-button>
            <my-button
                v-if="isAuth"
                @click="$router.push('/test-docs')"
            >Тестовые задания</my-button>
            <my-button
                v-if="isAuth"
                @click="$router.push('/users')"
            >Пользователи</my-button>
            <my-button
                v-if="isAuth"
                @click="log_out"
            >Выйти</my-button>
        </div>
    </div>
</template>

<script>
import useAuth from "@/hooks/useAuth"

export default {
    methods: {
        log_out() {
            this.$store.state.auth.isAuth = false
            this.logout()
            this.$router.push('/login')
        }
    },
    computed: {
        isAuth() {
            return this.$store.state.auth.isAuth
        },
    },
    props: {

    },
    setup(props) {
        const { logout } = useAuth()
        return {
            logout
        }
    },
}


</script>

<style scoped></style>
        