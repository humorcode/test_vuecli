<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | filtercurrency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button> 库存:{{product.inventory}}
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
