<template>
  <h2>Account Information</h2>
  <hr>
  <form @submit.prevent="submitInfo">
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" name="first_name" v-model="profile.firstName">
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" name="last_name" v-model="profile.lastName">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" name="email" v-model="profile.email">
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>

  <h2 class="mt-4">Change Password</h2>
  <hr>
  <form @submit.prevent="submitPassword">
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" name="password" v-model="profile.password">
    </div>
    <div class="form-group">
      <label>Password Confirm</label>
      <input type="password" class="form-control" name="password_confirm" v-model="profile.passwordConfirm">
    </div>

    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script lang="ts">
import {reactive, onMounted, computed} from 'vue';
import axios from 'axios';
import {User} from '@/classes/user';
import {useStore} from 'vuex';

export default {
  name: "Profile",
  setup() {
    const profile = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
    const store = useStore();

    onMounted(async () => {
      const user = computed(() => store.state.User.user);
      profile.firstName = user.value.first_name;
      profile.lastName = user.value.last_name;
      profile.email = user.value.email;
    });

    const submitInfo = async () => {
      const response = await axios.put('users/info', {
        first_name: profile.firstName,
        last_name: profile.lastName,
        email: profile.email
      });

      const u: User = response.data;
      await store.dispatch('User/setUser', new User(
          u.id,
          u.first_name,
          u.last_name,
          u.email,
          u.role,
          u.permissions
      ));


    }
    const submitPassword = async () => {
      await axios.put('user/password', {
        password: profile.password,
        passwordConfirm: profile.passwordConfirm,
      });

      profile.password = '';
      profile.passwordConfirm = '';
    }

    return {
      profile, submitInfo, submitPassword
    }
  }
}
</script>

<style scoped>

</style>