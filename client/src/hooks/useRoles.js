import { onMounted, ref } from "vue";
import axios from "axios";

export default function useRoles() {
  const roles = ref([]);
  const roles_list = ref([]);
  const isRolesLoading = ref(false);
  const searchQuery = ref("");

  const fetchingRoles = async () => {
    try {
      isRolesLoading.value = true;
      const response = await axios.get("/roles", {
        params: {
          search: searchQuery.value,
        },
      });
      roles.value = response.data;
      fillRolesArray();
    } catch (error) {
      console.log(error);
    } finally {
      isRolesLoading.value = false;
    }
  };

  const fillRolesArray = async () => {
    try {
      roles.value.forEach((element) => {
        if (!element.closed) {
          roles_list.value.push({
            value: String(element.id),
            name: element.name,
          });
        }
      });
    } catch (error) {}
  };

  onMounted(fetchingRoles);

  return {
    roles,
    roles_list,
    isRolesLoading,
    searchQuery,
    fetchingRoles,
  };
}
