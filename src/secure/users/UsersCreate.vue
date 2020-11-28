<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="first_name">First Name</label>
      <input type="text" class="form-control" name="first_name" id="first_name" v-model="user.firstName"/>
    </div>
    <div class="form-group">
      <label for="last_name">Last Name</label>
      <input type="text" class="form-control" name="last_name" id="last_name" v-model="user.lastName"/>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" name="email" id="email" v-model="user.email"/>
    </div>

    <div class="form-group">
      <label for="role">Role</label>
      <select name="role_id" class="form-control" id="role" v-model="user.roleId">
        <option value="0">Select Role</option>
        <option v-for="role in roles" :key="role.id" :value="role.id">
        {{ role.name }}
        </option>
      </select>
    </div>

    <button class="btn btn-lg btn-primary btn-block">Save</button>
  </form>
</template>

<script lang="ts">
/* eslint-disable */

import {ref, reactive, onMounted} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
  name: "UsersCreate",
  setup() {
    const user = reactive({
      firstName: '',
      lastName: '',
      email: '',
      roleId: 0,
    });

    // const firstName = ref('');
    // const lastName = ref('');
    // const email = ref('');
    // const roleId = ref(0);
    const roles = ref([]);
    const router = useRouter();


    onMounted(async () => {
      const response = await axios.get('roles');
      roles.value = response.data.data;
    });

    const submit = async () => {
      await axios.post('users', {
        // first_name: firstName.value,
        // last_name: lastName.value,
        // email: email.value,
        // role_id: roleId.value

        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        role_id: user.roleId
      });

      await router.push('/users');
    }

    return {
      user,
      roles,
      submit
    }
  }

}
</script>
