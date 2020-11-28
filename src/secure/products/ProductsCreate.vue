<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" name="title" id="title" v-model="products.title"/>
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" name="description" id="description" v-model="products.description"/>
    </div>
    <div class="form-group">
      <label>Image</label>
      <div class="input-group-append">
        <input type="text" class="form-control" name="image" id="image" v-model="products.image"/>
        <ImageUpload @file-uploaded="products.image = $event" />
      </div>
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="text" class="form-control" name="price" id="price" v-model="products.price"/>
    </div>
    <button class="btn btn-outline-secondary">Save</button>
  </form>
</template>

<script lang="ts">
import {reactive} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
import ImageUpload from '@/secure/components/ImageUpload.vue';


export default {
  name: "ProductsCreate",
  components: {ImageUpload},
  setup: function () {
    const products = reactive({
      title: '',
      description: '',
      image: '',
      price: 0
    });
    const router = useRouter();

    const submit = async () => {
      await axios.post('products', {
        title: products.title,
        description: products.description,
        image: products.image,
        price: products.price
      });
      await router.push('/products');
    }

    return {
      products, submit
    }
  }
}
</script>
