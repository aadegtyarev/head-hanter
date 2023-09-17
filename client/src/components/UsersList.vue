<template>
    <div v-if="users.length > 0">
        <user-item
            v-for="user in users"
            :user="user"
            :key="user.id"
            @remove="$emit('remove', user)"
            @edit="$emit('edit', user)"
        />
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
