import { ref } from "vue";
import axios from "axios";

export default function useCreateUser(users) {
  const dialogVisible = ref(false);

  const createUser = async (user) => {
    try {
      const response = await axios.post("/user", {
        name: user.name,
        login: user.login,
        tg_login: user.tg_login,
        email: user.email,
        password: user.password,
        position: user.position,
      });
      dialogVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  const showDialog = () => {
    try {
      dialogVisible.value = true;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createUser,
    showDialog,
    dialogVisible,
  };
}
