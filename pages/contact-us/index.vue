
<script setup>
import Navbar from '~/layouts/navbar.vue';


</script>

<template>
    <Navbar />

    <div class="bg-custom-image bg-cover bg-center h-[620px] w-full text-white bg-transparent">
        <div class="mx-auto px-4">
            <div class="flex flex-col">
                <div class="flex items-center h-16 bg-transparent relative z-20">

                    <div class="flex items-center justify-center flex-grow pt-56">
                        <div class="text-center px-4 md:px-8">
                            <h1 class="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
                            <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="flex md:flex-row flex-col md:space-y-0 space-y-8 md:space-x-6 my-10 max-w-[800px] mx-auto items-center">
        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100 md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/contact-us.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Call us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    +1-917-609-4597
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/location.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Visit us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    USA, NewYork
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/whatsapp.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Email Us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    +1-917-609-4597
                </p>

            </div>
        </div>



    </div>

    <div style="background-color: rgb(158, 40, 41);">
        <div class="max-w-[85rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8  text-white px-4 py-8">
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
    </div>
</template>


<style scoped>
.bg-custom-image {
    background-image: url('~/assets/images/Call-2.jpg');
}
</style>