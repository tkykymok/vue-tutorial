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
import {reactive, onMounted} from 'vue';
import axios from 'axios';
import {useRoute, useRouter} from 'vue-router';
import ImageUpload from '@/secure/components/ImageUpload.vue';
import {Product} from '@/classes/Product';


export default {
  name: "ProductsEdit",
  components: {ImageUpload},
  setup: function () {
    const products = reactive({
      title: '',
      description: '',
      image: '',
      price: 0
    });
    const router = useRouter();
    const {params} = useRoute();

    onMounted(async () => {
      const response = await axios.get(`products/${params.id}`);
      const product: Product = response.data.data;

      products.title = product.title;
      products.description = product.description;
      products.image = product.image;
      products.price = product.price;
    });

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
