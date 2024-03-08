<template>
    <div>
      <h2>Checkout</h2>
      <ul v-if="Object.keys(cart).length">
        <li v-for="(quantity, productId) in cart" :key="productId">
          {{ getProductDetails(productId) }} - Quantity: {{ quantity }}
          <button @click="removeFromCart(productId)">Remove</button>
        </li>
      </ul>
      <p v-else>No items in the cart</p>
  
      <form @submit.prevent="placeOrder" v-if="Object.keys(cart).length">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required><br>
        <label for="phone">Phone number:</label>
        <input type="tel" id="phone" v-model="phone" required><br>
        <button :disabled="!isFormValid">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: {}, // Cart data
        name: '',
        phone: ''
      };
    },
    methods: {
      getProductDetails(productId) {
        const lesson = this.lessons.find(lesson => lesson.id.toString() === productId);
        return lesson ? `${lesson.name} - Price: ${lesson.price}` : 'Lesson not found';
      },
      removeFromCart(productId) {
        if (this.cart[productId] > 0) {
          this.cart[productId] -= 1;
          if (this.cart[productId] === 0) {
            delete this.cart[productId];
          }
        }
      },
      placeOrder() {
        // Logic to place the order, you can handle this as per your application requirements
        console.log('Order placed!');
        this.name = '';
        this.phone = '';
        this.cart = {};
      },
      isFormValid() {
        return this.name.trim() !== '' && this.phone.trim() !== '' && Object.keys(this.cart).length > 0;
      }
    },
    computed: {
      lessons() {
        
        return this.$parent.lessons;
      }
    }
  };
  </script>
  
  
  