<template>
    <div>
        <user-create-form
            :user="user"
            @create="create"
            @cancel="cancel"
        />
    </div>
</template>

<script>
import UserCreateForm from "@/components/UserCreateForm.vue";
import useCreateUser from "@/hooks/useCreateUser"

export default {
    components: {
        UserCreateForm
    },
    methods: {
        create(user) {
            this.createUser(user)
            this.$router.back()
        },
        cancel() {
            this.$router.back()
        },
    },
    data() {
        return {
            user: {
            }
        };
    },
    setup(props) {
        const { createUser } = useCreateUser()

        return {
            createUser,
        }
    }
};
</script>

<style scoped></style>
