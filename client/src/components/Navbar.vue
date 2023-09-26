<template>
    <div class="navbar">
        <div
            class="logo"
            @click="$router.push('/')"
        >Наниматель</div>
        <div class="navbar-btns">
            <my-button
                v-if="isAuth"
                :class="{ 'btn-disabled': $route.path == '/' }"
                @click="$router.push('/')"
            >Главная</my-button>
            <my-button
                v-if="isAuth"
                :class="{ 'btn-disabled': $route.path == '/jobs' }"
                @click="$router.push('/jobs')"
            >Вакансии</my-button>
            <my-button
                v-if="isAuth"
                :class="{ 'btn-disabled': $route.path == '/responses' }"
                @click="$router.push('/responses')"
            >Отклики</my-button>
            <my-button
                v-if="isAuth"
                :class="{ 'btn-disabled': $route.path == '/interviews' }"
                @click="$router.push('/interviews')"
            >Интервью</my-button>
            <my-button
                v-if="isAuth"
                :class="{ 'btn-disabled': $route.path == '/test-docs' }"
                @click="$router.push('/test-docs')"
            >Тестовые задания</my-button>
            <my-button
                v-if="isAuth"
                :class="{ 'btn-disabled': $route.path == '/users' }"
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


export default {
    methods: {
        log_out() {
            this.$emit('log_out')
        }
    },
    computed: {
        isAuth() {
            return this.$store.state.auth.isAuth
        },
    }
}
</script>

<style scoped></style>
        