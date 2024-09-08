<script setup>
import { Award, TrendingUp } from 'lucide-vue-next';
import Navbar from '~/layouts/navbar.vue';

function redirectToWebsite() {
    console.log('Redirecting to website');
    window.open('https://www.coasteramerica.com', '_blank');
};

const scrolled = ref(false);


const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <Navbar />

    <div>
        <div class="bg-custom-image bg-cover bg-center h-[620px] text-white bg-transparent">
            <div class="mx-auto px-4">
                <div class="flex flex-col">

                    <div class="flex items-center justify-center flex-grow pt-48">
                        <div class="text-center px-4 md:px-8">
                            <h1 class="text-2xl md:text-4xl font-bold mb-4">About KSK</h1>
                            <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[74rem]  md:max-w-[85rem] mx-auto px-9">
            <div>
                <div class=" flex flex-col items-center space-y-6 my-20">
                    <h3 class="text-4xl text-center">Discover KSK -<br /> Where Innovation Meets Design</h3>
                    <img class="object-cover h-48 rounded-md" style="width: 1600px;height: 550px;"
                        src="/assets/images/furni.jpg" alt="sofa">
                </div>
            </div>
            <div>
                <div class="text-center flex flex-col items-center">
                    <h1 class="font-thin text-sm">KSK LLC</h1>
                    <h2 class="2xl text-3xl text-center">KSK LLC Journey Story</h2>
                    <h1 class="md:w-[700px] mt-[20px] w-[300px]">The KSK Journey:Transforming spaces with innovative
                        design.Explore
                        our story of
                        craftmanship and
                        style,creating
                        furniture that inspires and enhances modern living.</h1>
                </div>
                <div>
                    <div class="flex flex-col space-y-12 items-center my-4">
                        <div class="flex flex-col space-y-4 md:flex-row md:space-x-6 md:justify-between" style="">
                            <div class="">
                                <img src="/assets/images/dining.jpg"
                                    class="h-96 object-cover w-[1300px] lg:w-[1300px] rounded-md " alt="">
                            </div>
                            <div class="align-middle my-auto">
                                <div class="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                                    style="width: 100px;height: 50px;border: 1px solid rgb(158, 40, 41)">
                                    <img src="/hospi.svg" alt="" srcset="">
                                </div>
                                <h3 class="text-xl font-semibold mb-2">Hospitality Furniture</h3>
                                <h3 style="" class="">Transform your hotel or restaurant with our elegant and durable
                                    furniture. From stylish dining sets to comfortable lounge chairs, we offer designs that
                                    cater to
                                    both aesthetics and functionality.</h3>
                            </div>
                        </div>

                        <div class="flex flex-col-reverse space-y-4 md:flex-row md:justify-between" style="">

                            <div class="align-middle my-auto ">
                                <div class="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                                    style="width: 100px;height: 50px;border: 1px solid rgb(158, 40, 41)">
                                    <img src="/retail.svg" alt="" srcset="">
                                </div>
                                <h3 class="text-xl font-semibold mb-2">Healthcare Furniture</h3>
                                <h3 style="" class="">Our healthcare furniture is designed with both patients and
                                    providers
                                    in mind. We focus on comfort, durability, and hygiene, ensuring that our products meet
                                    the rigorous standards.</h3>
                            </div>

                            <div class="">
                                <img src="/assets/images/bed.jpg" class="h-96 object-cover w-[1300px] rounded-md" alt="">
                            </div>
                        </div>

                        <div class="flex flex-col space-y-4 md:flex-row md:space-x-6 md:justify-between" style="">
                            <div class="">
                                <img src="/assets/images/office.jpg" class="h-96 object-cover w-[1300px] rounded-md" alt="">
                            </div>
                            <div class="align-middle my-auto ">
                                <div class="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                                    style="width: 100px;height: 50px;border: 1px solid rgb(158, 40, 41)">
                                    <img src="/office.svg" alt="" srcset="">
                                </div>
                                <h3 class="text-xl font-semibold mb-2">Office Furniture</h3>
                                <h3 style="" class="">Enhance productivity with our modern office furniture
                                    solutions.
                                    From
                                    ergonomic chairs to collaborative workspaces, we provide everything needed for a
                                    functional
                                    and
                                    inspiring work environment.</h3>
                            </div>
                        </div>

                        <div class="flex flex-col-reverse space-y-4 md:flex-row md:justify-between" style="">

                            <div class="align-middle my-auto ">
                                <div class="flex items-center rounded-md bg-red-50 p-8 border-red-600 my-4"
                                    style="width: 100px;height: 50px;border: 1px solid rgb(158, 40, 41)">
                                    <img src="/retail.svg" alt="" srcset="">
                                </div>
                                <h3 class="text-xl font-semibold mb-2">Retail Displays</h3>
                                <h3 style="" class="">Attract customers with our innovative retail display solutions.
                                    Our
                                    designs are not only visually appealing but also maximize space and enhance the shopping
                                    experience.</h3>
                            </div>

                            <div class="">
                                <img src="/assets/images/display.jpg" class="h-96 object-cover w-[1300px] rounded-md"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="my-14">
            <div class="max-w-[100rem] mx-auto pl-8">
                <h3 class="text-4xl text-left font-medium my-10 ">Don't
                    take our Word,<br /> See What our Client Say</h3>
            </div>
            <!-- Testimonials -->
            <div class="relative overflow-hidden my-8">
                <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
                    <!-- Gradients -->
                    <div aria-hidden="true" class="flex -z-[1] absolute start-0">
                        <div class="bg-blue-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-blue-500 dark:opacity-20">
                        </div>
                    </div>
                    <!-- End Gradients -->
                    <!-- Grid -->
                    <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                        <div class="hidden lg:block lg:col-span-2">
                            <img class="rounded-xl"
                                src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                alt="Avatar">
                        </div>
                        <!-- End Col -->
                        <div class="lg:col-span-4">
                            <!-- Blockquote -->
                            <blockquote>
                                <svg class="w-24 h-auto mb-4" viewBox="-0.3 0 320.3999999999999 99.9"
                                    xmlns="http://www.w3.org/2000/svg" width="2500" height="779">
                                    <path
                                        d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z"
                                        fill="#ff5a5f" />
                                </svg>
                                <p
                                    class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-700">
                                    To say that switching to Preline has been life-changing is an understatement. My
                                    business has tripled and I got my life back.
                                </p>
                                <footer class="mt-6">
                                    <div class="flex items-center">
                                        <div class="lg:hidden shrink-0">
                                            <img class="size-12 rounded-full"
                                                src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                alt="Avatar">
                                        </div>
                                        <div class="ms-4 lg:ms-0">
                                            <p class="font-medium text-gray-800 dark:text-neutral-800">
                                                Nicole Grazioso
                                            </p>
                                            <p class="text-sm text-gray-600 dark:text-neutral-800">
                                                Head of Finance
                                            </p>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                            <!-- End Blockquote -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Grid -->
                </div>
            </div>
            <!-- End Testimonials -->
        </div>

        <div class="flex md:flex-row flex-col space-y-8 items-center md:space-y-0 px-[100px] md:justify-around my-[80px]">
            <div class="flex-col space-y-3">
                <img src="/cargo.svg" alt="" class="p-4 bg-blue-500 rounded-full">
                <h1 class="text-[25px]">Fast & Free <br> Shipping</h1>
            </div>
            <div class="flex-col space-y-3">
                <img src="/shopping.svg" alt="" class="p-4 bg-blue-500 rounded-full">
                <h1 class="text-[25px]">Easy to <br> Ship</h1>
            </div>
            <div class="flex-col space-y-3">
                <img src="/support.svg" alt="" class="p-4 bg-blue-500 rounded-full">
                <h1 class="text-[25px]">24/7 <br> Support</h1>
            </div>
            <div class="flex-col space-y-3">
                <img src="/hassle.svg" alt="" class="p-4 bg-blue-500 rounded-full">
                <h1 class="text-[25px]">Hassle Free<br>Returns</h1>
            </div>

        </div>
        <h1 class="text-center text-[20px] my-6">To Visit our catalogue please visit our website
            <span class="blue-link" @click="redirectToWebsite">www.coasteramerica.com</span>
        </h1>

        <hr>
        <div class="flex flex-row align-middle items-center text-center py-4 w-full">
            <!-- <div> -->
            <img src="/assets/images/ksk.svg" class="mx-auto" style="width: 100px;" alt="">
            <!-- </div> -->
        </div>

        <hr>

        <div style="background-color: rgb(158, 40, 41);">
            <div
                class="max-w-[85rem] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8  text-white px-4 py-8">
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
                    <p>Email: <a href="mailto:info@zemy-group.com" class="hover:text-gray-400">info@zemy-group.com</a>
                    </p>
                </div>
                <!-- Copyright Section -->
                <div class="col-span-full text-center mt-6">
                    <p>&copy; 2024 @ Zemy Group LLC. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* .container {
    background-image: url("@/assets/images/about1.jpg");
} */


.bg-custom-image {
    background-image: url("~/assets/images/aboutF.jpg");
}

.mycol {
    background-color: rgb(158, 40, 41);
}

.blue-link {
    color: blue;
    cursor: pointer;
}
</style>