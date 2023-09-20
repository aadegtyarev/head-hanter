import { ref } from "vue";
import axios from "axios";

export default function useCreateUser(users) {
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
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createUser,
  };
}
