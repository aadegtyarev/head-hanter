import axios from "axios";

export default function useRemoveUser(users) {
  const removeUser = async (user) => {
    try {
      const response = await axios.delete("/user", {
        params: {
          id: user.id,
        },
      });
      dialogVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    removeUser,
  };
}
