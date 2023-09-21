<template>
    <div v-if="users.length > 0">
        <table class="list-table">
            <th>#</th>
            <th>Имя</th>
            <th>Логин</th>
            <th>Должность</th>
            <th>Роль</th>
            <th>Действия</th>
            <user-item
                v-for="user in users"
                :user="user"
                :key="user.id"
            />
        </table>


    </div>
    <h4
        class="list-empty"
        v-else
    >Нет пользователей, подходящих под условие поиска</h4>
</template>

<script>
import UserItem from "@/components/UserItem.vue";
export default {
    components: { UserItem },
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
