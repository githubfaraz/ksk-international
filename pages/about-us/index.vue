<script>
import { Award, TrendingUp } from 'lucide-vue-next';

</script>

<template>
    <div class="bg-custom-image bg-cover bg-center min-h-screen text-white bg-transparent">
        <div class="mx-auto px-4">
            <div class="flex flex-col">
                <div class="flex items-center h-16 bg-transparent relative z-20">
                    <div class="md:hidden flex items-center">
                        <button @click="toggleMenu" class="text-white focus:outline-none bg-transparent z-30">
                            <i class="pi pi-bars text-2xl"></i>
                        </button>
                    </div>

                    <div class="flex-1 flex items-center justify-center md:justify-start">
                        <NuxtLink to="/" class="flex items-center">
                            <img src="~/assets/images/ksk.svg" alt="Logo" class="h-8 md:h-10">
                        </NuxtLink>
                    </div>

                </div>

                <div class="hidden md:flex justify-center my-4">
                    <nav class="flex gap-4 md:gap-8 text-base md:text-[20px]">
                        <a href="/" class="hover:underline">Home</a>
                        <a href="/about-us" class="hover:underline">About</a>
                        <a href="#" class="hover:underline">Contact Us</a>
                    </nav>
                </div>

                <div v-if="isMenuOpen" class="md:hidden mt-2 z-20">
                    <nav class="flex flex-col gap-4 text-[20px]">
                        <a href="#" class="hover:underline">Home</a>
                        <a href="/about-us" class="hover:underline">About</a>
                        <a href="#" class="hover:underline">Products</a>
                    </nav>
                </div>

                <div class="flex items-center justify-center flex-grow pt-24">
                    <div class="text-center px-4 md:px-8">
                        <h1 class="text-2xl md:text-4xl font-bold mb-4">About KSK</h1>
                        <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class=" flex flex-col items-center space-y-6 my-20">
            <h3 class="text-4xl text-center">Discover KSK -<br /> Where Innovation Meets Design</h3>
            <img class="object-cover h-48 rounded-md" style="width: 1600px;height: 550px;" src="/assets/images/bg1.jpg"
                alt="sofa">
        </div>
    </div>

    <div>
        <div class="text-center flex flex-col items-center">
            <h1 class="font-thin text-sm">KSK LLC</h1>
            <h2 class="2xl text-3xl text-center">KSK LLC Journey Story</h2>
            <h1 style="width: 700px;margin-top: 20px;">The KSK Journey:Transforming spaces with innovative design.Explore
                our story of
                craftmanship and
                style,creating
                furniture that inspires and enhances modern living.</h1>
        </div>


        <div>
            <div class="flex flex-col space-y-12 items-center my-4">


                <div class="flex flex-row justify-between" style="width: 1600px;">
                    <div style="min-width: 800px;">
                        <img src="/assets/images/bg1.jpg" class="h-96 object-cover w-11/12 rounded-md" alt="">
                    </div>

                    <div style="max-width: 800px;" class="align-middle my-auto">
                        <div class="flex items-center rounded-md bg-slate-300 p-8" style="width: 100px;height: 50px;">
                            <Award />

                        </div>

                        <h3 class="text-xl font-semibold mb-2">From Humble Beginnings</h3>
                        <h3 style="" class="w-10/12">Our Story began in 2010 in a small workshop,driven by a passion for
                            creating beautiful
                            and
                            comfortbale furniture. What started as a modest operation has grown into a beloved brand known
                            for
                            its quality and design</h3>
                    </div>
                </div>

                <div class="flex flex-row-reverse justify-between" style="width: 1600px;">
                    <div style="min-width: 800px;">
                        <img src="/assets/images/bg1.jpg" class="h-96 object-cover w-11/12 rounded-md" alt="">
                    </div>

                    <div style="max-width: 800px;" class="align-middle my-auto">
                        <div class="flex items-center rounded-md bg-slate-300 p-8" style="width: 100px;height: 50px;">
                            <Award />

                        </div>

                        <h3 class="text-xl font-semibold mb-2">From Humble Beginnings</h3>
                        <h3 style="" class="w-10/12">Our Story began in 2010 in a small workshop,driven by a passion for
                            creating beautiful
                            and
                            comfortbale furniture. What started as a modest operation has grown into a beloved brand known
                            for
                            its quality and design</h3>
                    </div>
                </div>

                <div class="flex flex-row justify-between" style="width: 1600px;">
                    <div style="min-width: 800px;">
                        <img src="/assets/images/bg1.jpg" class="h-96 object-cover w-11/12 rounded-md" alt="">
                    </div>

                    <div style="max-width: 800px;" class="align-middle my-auto">
                        <div class="flex items-center rounded-md bg-slate-300 p-8" style="width: 100px;height: 50px;">
                            <Award />

                        </div>

                        <h3 class="text-xl font-semibold mb-2">From Humble Beginnings</h3>
                        <h3 style="" class="w-10/12">Our Story began in 2010 in a small workshop,driven by a passion for
                            creating beautiful
                            and
                            comfortbale furniture. What started as a modest operation has grown into a beloved brand known
                            for
                            its quality and design</h3>
                    </div>
                </div>

                <div class="flex flex-row-reverse justify-between" style="width: 1600px;">
                    <div style="min-width: 800px;">
                        <img src="/assets/images/bg1.jpg" class="h-96 object-cover w-11/12 rounded-md" alt="">
                    </div>

                    <div style="max-width: 800px;" class="align-middle my-auto">
                        <div class="flex items-center rounded-md bg-slate-300 p-8" style="width: 100px;height: 50px;">
                            <Award />

                        </div>

                        <h3 class="text-xl font-semibold mb-2">From Humble Beginnings</h3>
                        <h3 style="" class="w-10/12">Our Story began in 2010 in a small workshop,driven by a passion for
                            creating beautiful
                            and
                            comfortbale furniture. What started as a modest operation has grown into a beloved brand known
                            for
                            its quality and design</h3>
                    </div>
                </div>


            </div>
        </div>

      <div>
        <h3 class="text-4xl text-left font-medium my-4">Don't take our Word,<br /> See What our Client Say</h3>
        <!-- Testimonials -->
        <div class="relative overflow-hidden my-8">
          <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
            <!-- Gradients -->
            <div aria-hidden="true" class="flex -z-[1] absolute start-0">
              <div class="bg-purple-400 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
            </div>
            <!-- End Gradients -->

            <!-- Grid -->
            <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
              <div class="hidden lg:block lg:col-span-2">
                <img class="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Avatar">
              </div>
              <!-- End Col -->

              <div class="lg:col-span-4">
                <!-- Blockquote -->
                <blockquote>
                  <svg class="w-24 h-auto mb-4" viewBox="-0.3 0 320.3999999999999 99.9" xmlns="http://www.w3.org/2000/svg" width="2500" height="779"><path d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z" fill="#ff5a5f"/></svg>

                  <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-700">
                    To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
                  </p>

                  <footer class="mt-6">
                    <div class="flex items-center">
                      <div class="lg:hidden shrink-0">
                        <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
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

      <div class="flex px-[100px] justify-around my-[80px]">
        <div class="flex-col space-y-3">
          <img src="/ksk-1.svg" alt="" class="p-4 bg-yellow-400 rounded-full">
          <h1 class="text-[25px]">Fast & Free <br> Shipping</h1>
        </div>

        <div class="flex-col space-y-3">
          <img src="/ksk-1.svg" alt="" class="p-4 bg-yellow-400 rounded-full">
          <h1 class="text-[25px]">Fast & Free <br> Shipping</h1>
        </div>

        <div class="flex-col space-y-3">
          <img src="/ksk-1.svg" alt="" class="p-4 bg-yellow-400 rounded-full">
          <h1 class="text-[25px]">Fast & Free <br> Shipping</h1>
        </div>

        <div class="flex-col space-y-3">
          <img src="/ksk-1.svg" alt="" class="p-4 bg-yellow-400 rounded-full">
          <h1 class="text-[25px]">Fast & Free <br> Shipping</h1>
        </div>
      </div>
    </div>

    <hr>
    <div class="flex flex-row align-middle items-center text-center py-4 w-full">
        <!-- <div> -->
        <img src="/assets/images/ksk.svg" class="mx-auto" style="width: 100px;" alt="">
        <!-- </div> -->
    </div>
    <hr>

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
/* .container {
    background-image: url("@/assets/images/about1.jpg");
} */

.bg-custom-image {
    background-image: url("~/assets/images/ksk.jpg");
}

.mycol {
    background-color: rgb(158, 40, 41);
}
</style>