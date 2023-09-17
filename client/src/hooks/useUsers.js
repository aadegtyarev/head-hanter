import { onMounted, ref } from "vue";
import axios from "axios";

export default function useUsers() {
  const users = ref([]);
  const isUsersLoading = ref(false);
  const page = ref(1);
  const searchQuery = ref("");

  const fetchingUsers = async () => {
    try {
      isUsersLoading.value = true;
      page.value = 1;
      const response = await axios.get("/users", {
        params: {
          search: searchQuery.value,
        },
      });
      users.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isUsersLoading.value = false;
    }
  };

  const loadMoreUsers = async () => {
    try {
      page.value += 1;
      const response = await axios.get("/user", {
        params: {
          search: searchQuery.value,
        },
      });
      users.value = [...users.value, ...response.data]; // добавляем новую порцию к существующему массиву
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(fetchingUsers);

  return {
    users,
    isUsersLoading,
    loadMoreUsers,
    searchQuery,
    fetchingUsers,
  };
}
