<template>
    <div class="navbar">
        <div
            class="logo"
            @click="$router.push('/')"
        >Head Hanter App</div>
        <div class="navbar-btns">
            <my-button @click="$router.push('/')">Главная</my-button>
            <my-button @click="$router.push('/jobs')">Вакансии</my-button>
            <my-button @click="$router.push('/responses')">Отклики</my-button>
            <my-button @click="$router.push('/interviews')">Интервью</my-button>
            <my-button @click="$router.push('/users')">Пользователи</my-button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped></style>
        