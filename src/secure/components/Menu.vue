<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/dashboard" active-class="active" class="nav-link">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" active-class="active" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/roles" active-class="active" class="nav-link">Roles</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" active-class="active" class="nav-link">Products</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "menu"
}
</script>

<style scoped>

</style>