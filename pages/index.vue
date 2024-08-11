<script setup>
const isMenuOpen = ref(false);
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form);
  // Reset form after submission
  form.name = '';
  form.email = '';
  form.message = '';
};
// Sample product data
const products = ref([
  { id: 1, name: 'Executive Chair', price: 299.99, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg' },
  { id: 2, name: 'Ergonomic Desk', price: 499.99, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg' },
  { id: 3, name: 'Filing Cabinet', price: 199.99, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg' },
  { id: 4, name: 'Office Lamp', price: 79.99, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg' },
  { id: 5, name: 'Bookshelf', price: 249.99, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg' },
]);

const cart = reactive({
  items: [],
  total: 0,
});

const isCartModalOpen = ref(false);

const addToCart = (product) => {
  const existingItem = cart.items.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({ ...product, quantity: 1 });
  }
  cart.total += product.price;
};

const removeFromCart = (item) => {
  const index = cart.items.findIndex(i => i.id === item.id);
  if (index !== -1) {
    cart.total -= item.price * item.quantity;
    cart.items.splice(index, 1);
  }
};

const updateQuantity = (item, newQuantity) => {
  const diff = newQuantity - item.quantity;
  item.quantity = newQuantity;
  cart.total += item.price * diff;
};

const cartItemCount = computed(() => {
  return cart.items.reduce((total, item) => total + item.quantity, 0);
});

const openCartModal = () => {
  isCartModalOpen.value = true;
};

const closeCartModal = () => {
  isCartModalOpen.value = false;
};
</script>

<template>
  <div
    class="bg-custom-image bg-cover bg-center h-screen text-white bg-transparent"
  >
  <div class="mx-auto px-4">
    <div class="flex items-center h-16 bg-transparent relative">
      <!-- Hamburger menu for small screens -->
      <div class="md:hidden flex items-center absolute left-0">
        <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none bg-transparent">
          <i class="pi pi-bars text-2xl"></i>
        </button>
      </div>
  
      <!-- Logo centered on small screens and on the left on larger screens -->
      <div class="flex-1 flex items-center justify-center md:justify-start">
        <NuxtLink to="/" class="flex items-center">
          <img src="~/assets/images/ksk.svg" alt="Logo" class="h-10">
        </NuxtLink>
      </div>
  
      <!-- Shopping cart icon on the right for larger screens -->
      <div class="hidden lg:flex items-center">
        <i class="pi pi-shopping-cart text-2xl"></i>
      </div>
    </div>
  
    <!-- Centered navigation items on large screens -->
    <div class="hidden lg:flex justify-center my-4">
      <nav class="flex gap-8 text-[20px]">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Products</a>
      </nav>
    </div>
  
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden mt-2">
      <nav class="flex flex-col gap-4 text-[20px]">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Products</a>
      </nav>
    </div>
  </div>
  
  </div>

  <h3 class="font-bold text-[24px] flex justify-center mt-16 mb-4">Products By Categories</h3>

  <div class="flex flex-col pl-12 md:flex-row gap-12 pt-4 justify-center">
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg"
          class="w-full h-auto"
        />
      </template>
      <template #title>Office Furniture</template>
      <template #subtitle>Sleek Business Chair</template>
      <template #content>
        <p class="m-0">
          Find comfort in this exquisite chair meant to impress and make your
          guests comfortable
        </p>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg"
          class="w-full h-auto"
        />
      </template>
      <template #title>Home office Furniture</template>
      <template #subtitle>Sleek Business Chair</template>
      <template #content>
        <p class="m-0">
          Find comfort in this exquisite chair meant to impress and make your
          guests comfortable
        </p>
      </template>
    </Card>
    <Card style="width: 25rem; overflow: hidden">
      <template #header>
        <img
          alt="user header"
          src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg"
          class="w-full h-auto"
        />
      </template>
      <template #title></template>
      <template #subtitle>Sleek Business Chair</template>
      <template #content>
        <p class="m-0">
          Find comfort in this exquisite chair meant to impress and make your
          guests comfortable
        </p>
      </template>
    </Card>
  </div>
  <div class="mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Featured Products</h2>
    
    <!-- Carousel component (as before) -->
    <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="[
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
      }
    ]">
      <template #item="slotProps">
        <div class="product-item p-4 bg-white rounded-lg shadow-md">
          <div class="product-item-content">
            <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full h-48 object-cover mb-4 rounded" />
            <h4 class="text-xl mb-2">{{ slotProps.data.name }}</h4>
            <h6 class="text-gray-600 mb-4">${{ slotProps.data.price.toFixed(2) }}</h6>
            <button @click="addToCart(slotProps.data)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Cart button -->
    <button @click="openCartModal" class="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
      Cart ({{ cartItemCount }})
    </button>

    <!-- Cart Modal -->
    <transition name="modal">
      <div v-if="isCartModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <h3 class="text-2xl font-bold mb-4">Your Cart</h3>
          <ul v-if="cart.items.length">
            <li v-for="item in cart.items" :key="item.id" class="mb-4 border-b pb-4">
              <div class="flex items-center justify-between">
                <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded" />
                <div class="flex-grow ml-4">
                  <h4 class="text-lg font-semibold">{{ item.name }}</h4>
                  <p class="text-gray-600">${{ item.price.toFixed(2) }} each</p>
                </div>
                <div class="flex items-center">
                  <button @click="updateQuantity(item, item.quantity - 1)" class="px-2 py-1 bg-gray-200 rounded" :disabled="item.quantity <= 1">-</button>
                  <span class="mx-2">{{ item.quantity }}</span>
                  <button @click="updateQuantity(item, item.quantity + 1)" class="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
                <button @click="removeFromCart(item)" class="ml-4 text-red-500 hover:text-red-700">Remove</button>
              </div>
            </li>
          </ul>
          <p v-else class="text-gray-600">Your cart is empty.</p>
          <p class="font-bold mt-4 text-xl">Total: ${{ cart.total.toFixed(2) }}</p>
          <div class="mt-6 flex justify-end">
            <button @click="closeCartModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-400 transition duration-300">Close</button>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Checkout</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="contact-section bg-transparent py-16">
    <div class=" mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-8">Contact Us</h3>
      
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" v-model="form.name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" v-model="form.email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>
          
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" v-model="form.message" rows="4" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          
          <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
        </form>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 bg-blue-500 text-white px-4 py-8">
    <div class="mb-6 sm:mb-0">
      <h2 class="font-bold text-lg mb-3">Shop Categories</h2>
      <p class="mb-2">Office Furniture</p>
      <p class="mb-2">Home office Furniture</p>
    </div>
    <div class="mb-6 sm:mb-0">
      <h3 class="font-bold text-lg mb-3">Useful Links</h3>
      <p class="mb-2">Designs</p>
      <p class="mb-2">Careers</p>
    </div>
    <div class="mb-6 sm:mb-0">
      <h3 class="font-bold text-lg mb-3">Account</h3>
      <p class="mb-2">Login</p>
      <p class="mb-2">Cart</p>
    </div>
    <div>
      <h3 class="font-bold text-lg mb-3">About Company</h3>
      <p class="mb-2">Our Partners</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/images/bg1.jpg");
}
</style>
