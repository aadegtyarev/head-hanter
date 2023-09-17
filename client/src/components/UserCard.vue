<template>
    <div>
        <user-view-form
            v-if="!formEditVisible"
            :user="user"
            @edit="showEditForm"
        />

        <user-edit-form
            v-if="formEditVisible"
            :user="user"
            @save="editUser"
        />
    </div>
</template>

<script>
import UserEditForm from "@/components/UserEditForm.vue";
import UserViewForm from "@/components/UserViewForm.vue";
import useEditUser from "@/hooks/useEditUser"

export default {
    components: {
        UserEditForm,
        UserViewForm
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { editUser, showEditForm, formEditVisible } = useEditUser()
        return {
            editUser,
            showEditForm,
            formEditVisible
        }
    }
};
</script>

<style scoped></style>
