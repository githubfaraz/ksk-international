<script setup>
import { ref, reactive, computed } from 'vue';

// State for menu and cart
const isMenuOpen = ref(false);
const isCartModalOpen = ref(false);

// Form handling
const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', form);
  form.name = '';
  form.email = '';
  form.message = '';
};

// Sample product data
const products = ref([
  { id: 1, name: 'Executive Chair', price: 299.99, image: 'https://images.pexels.com/photos/7084319/pexels-photo-7084319.jpeg' },
  { id: 2, name: 'Ergonomic Desk', price: 499.99, image: 'https://images.pexels.com/photos/25526520/pexels-photo-25526520.jpeg' },
  { id: 3, name: 'Filing Cabinet', price: 199.99, image: 'https://images.pexels.com/photos/1370294/pexels-photo-1370294.jpeg' },
  { id: 4, name: 'Office Lamp', price: 79.99, image: 'https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg' },
  { id: 5, name: 'Bookshelf', price: 249.99, image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg' },
]);

const cart = reactive({
  items: [],
  total: 0,
});

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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<template>
  <div class="bg-custom-image bg-cover bg-center h-[620px] text-white bg-transparent">
    <div class="mx-auto px-4">
      <div class="flex flex-col">
        <!-- Header section -->
        <div class="flex items-center h-16 bg-transparent relative z-20">
          <!-- Hamburger menu for small screens -->
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-white focus:outline-none bg-transparent z-30">
              <i class="pi pi-bars text-2xl"></i>
            </button>
          </div>

          <!-- Logo centered on small screens and on the left on larger screens -->
          <div class="flex-1 flex items-center justify-center md:justify-start">
            <NuxtLink to="/" class="flex items-center">
              <img src="~/assets/images/ksk.svg" alt="Logo" class="h-8 md:h-10">
            </NuxtLink>
          </div>

          <!-- Shopping cart icon on the right for all screens -->
        </div>

        <!-- Centered navigation items on large screens -->
        <div class="hidden md:flex justify-center my-4">
          <nav class="flex gap-4 md:gap-8 text-base md:text-[20px]">
            <a href="#" class="hover:underline">Home</a>
            <a href="/about-us" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Products</a>
          </nav>
        </div>

        <!-- Mobile menu -->
        <div v-if="isMenuOpen" class="md:hidden mt-2 z-20">
          <nav class="flex flex-col gap-4 text-[20px]">
            <a href="#" class="hover:underline">Home</a>
            <a href="/aboutUs" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Products</a>
          </nav>
        </div>

        <!-- Centered text section -->
        <div class="flex items-center justify-center flex-grow pt-24">
          <div class="text-center px-4 md:px-8">
            <h1 class="text-2xl md:text-4xl font-bold mb-4">Welcome to KSK</h1>
            <p class="text-base md:text-lg">Discover amazing products and services tailored just for you.</p>
          </div>
        </div>
      </div>
    </div>
  </div>




  <h3 class="font-bold text-[24px] flex justify-center mt-16 mb-4">Products By Categories</h3>

  <div class="flex flex-col gap-8 p-4 sm:gap-12 md:flex-row md:justify-center md:p-0">
    <Card class="w-full sm:w-[25rem] md:w-[25rem] overflow-hidden">
      <template #header>
        <img alt="user header" src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg"
          class="w-full h-auto" />
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
    <Card class="w-full sm:w-[25rem] md:w-[25rem] overflow-hidden">
      <template #header>
        <img alt="user header" src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg"
          class="w-full h-auto" />
      </template>
      <template #title>Home office Furniture</template>
      <template #subtitle>Sleek Business Desk</template>
      <template #content>
        <p class="m-0">
          Find comfort in this exquisite Desk meant to impress and
          improve security &amp; posture
        </p>
      </template>
    </Card>
    <Card class="w-full sm:w-[25rem] md:w-[25rem] overflow-hidden">
      <template #header>
        <img alt="user header" src="https://images.pexels.com/photos/8001042/pexels-photo-8001042.jpeg"
          class="w-full h-auto" />
      </template>
      <template #title></template>
      <template #subtitle>Standing Desk</template>
      <template #content>
        <p class="m-0">
          Find comfort in this standing desk to sort out your back issues
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
            <button @click="addToCart(slotProps.data)"
              class="mycol text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Cart button -->
    <button @click="openCartModal"
      class="fixed top-4 right-4 mycol text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center gap-2">
      <i class="pi pi-shopping-cart text-2xl"></i> ({{ cartItemCount }})
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
                  <button @click="updateQuantity(item, item.quantity - 1)" class="px-2 py-1 bg-gray-200 rounded"
                    :disabled="item.quantity <= 1">-</button>
                  <span class="mx-2">{{ item.quantity }}</span>
                  <button @click="updateQuantity(item, item.quantity + 1)"
                    class="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
                <button @click="removeFromCart(item)" class="ml-4 text-red-500 hover:text-red-700">Remove</button>
              </div>
            </li>
          </ul>
          <p v-else class="text-gray-600">Your cart is empty.</p>
          <p class="font-bold mt-4 text-xl">Total: ${{ cart.total.toFixed(2) }}</p>
          <div class="mt-6 flex justify-end">
            <button @click="closeCartModal"
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-400 transition duration-300">Close</button>
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Checkout</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <section class="flex flex-col lg:flex-row items-center lg:justify-between px-4 py-16 bg-gray-100 ">
    <!-- Image on the left -->
    <div class="flex-1 lg:mr-8 mb-8 lg:mb-0">
      <img src="https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg" alt="Description Image"
        class="w-full object-cover rounded-lg shadow-lg h-[420px]">
    </div>

    <!-- Text on the right -->
    <div class="flex-1">
      <h2 class="text-3xl font-semibold mb-4">Our Services</h2>
      <p class="text-lg mb-4">
        We offer a wide range of services to meet your needs. From customized solutions to top-notch support, our team is
        here to ensure you get the best experience possible.
      </p>
      <p class="text-lg">
        Explore our services and find out how we can help you achieve your goals. Our commitment to excellence and
        customer satisfaction sets us apart in the industry.
      </p>
    </div>
  </section>
  <div class="contact-section bg-transparent py-16">
    <div class=" mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-8">Contact Us</h3>

      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" v-model="form.name"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" v-model="form.email"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>

          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" v-model="form.message" rows="4"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required></textarea>
          </div>

          <button type="submit"
            class="w-full mycol text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Send
            Message</button>
        </form>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 mycol text-white px-4 py-8">
    <!-- Shop Categories -->
    <div class="mb-6 sm:mb-0">
      <h2 class="font-bold text-lg mb-3">Shop Categories</h2>
      <p class="mb-2">Office Furniture</p>
      <p class="mb-2">Home Office Furniture</p>
    </div>

    <!-- Useful Links -->
    <div class="mb-6 sm:mb-0">
      <h3 class="font-bold text-lg mb-3">Useful Links</h3>
      <p class="mb-2">Designs</p>
      <p class="mb-2">Careers</p>
    </div>

    <!-- Account -->
    <div class="mb-6 sm:mb-0">
      <h3 class="font-bold text-lg mb-3">Account</h3>
      <p class="mb-2">Login</p>
      <p class="mb-2">Cart</p>
    </div>

    <!-- About Company -->
    <div>
      <h3 class="font-bold text-lg mb-3">About Company</h3>
      <p class="mb-2">Our Partners</p>
    </div>

    <!-- Get in Touch -->
    <div class="flex flex-col">
      <h3 class="font-bold text-lg mb-3">Get in Touch</h3>
      <p class="mb-2">147 W 35th St, New York, NY 10001</p>
      <p class="mb-2">Phone: +1 (917) 6094-597</p>
      <p>Email: <a href="mailto:info@zemy-group.com" class="hover:text-gray-400">info@zemy-group.com</a></p>
    </div>

    <!-- Copyright Section -->
    <div class="col-span-full text-center mt-6">
      <p>&copy; 2024 @ Zemy Group LLC. All Rights Reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url("@/assets/images/bg1.jpg");
}

.mycol {
  background-color: rgb(158, 40, 41);
}
</style>
