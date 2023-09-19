import { onMounted, ref } from "vue";
import axios from "axios";

export default function useGetUser(id) {
  const user = ref([]);

  const loadOneUser = async () => {
    try {
      const response = await axios.get("/user", {
        params: {
          id: id,
        },
      });
      user.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  onMounted(loadOneUser);

  return {
    user,
    loadOneUser,
  };
}
