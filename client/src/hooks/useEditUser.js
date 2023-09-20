import { ref } from "vue";
import axios from "axios";

export default function useEditUser() {
  const formEditVisible = ref(false);

  const editUser = async (user) => {
    try {
      const response = await axios.put("/user", {
        id: user.id,
        name: user.name,
        login: user.login,
        tg_login: user.tg_login,
        email: user.email,
        position: user.position,
      });
      formEditVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const editUserPassword = async (user) => {
    try {
      const response = await axios.put("/user-password", {
        id: user.id,
        password: user.password,
      });
      formEditVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const showEditForm = () => {
    try {
      formEditVisible.value = true;
    } catch (e) {
      console.log(e);
    }
  };

  const hideEditForm = () => {
    try {
      formEditVisible.value = false;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    editUser,
    editUserPassword,
    showEditForm,
    hideEditForm,
    formEditVisible,
  };
}
