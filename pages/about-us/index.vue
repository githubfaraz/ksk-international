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
            <img class="object-cover h-48 rounded-md" style="width: 1620px;height: 550px;" src="/assets/images/bg1.jpg"
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
            <div class="flex flex-col space-y-4 items-center my-4">
                <div class="flex flex-row justify-between" style="width: 1620px;">
                    <div style="width: 720px;">
                        <img src="/assets/images/bg1.jpg" class="h-96 object-cover w-11/12 rounded-md" alt="">
                    </div>

                    <div style="max-width: 920px;" class="align-middle my-auto">
                        <div class="flex items-center rounded-md bg-slate-300 p-8" style="width: 100px;height: 50px;">
                            <Award />

                        </div>

                        <h3 class="text-xl font-semibold mb-2">From Humble Beginnings</h3>
                        <h3 style="" class="w-3/4">Our Story began in 2010 in a small workshop,driven by a passion for
                            creating beautiful
                            and
                            comfortbale furniture. What started as a modest operation has grown into a beloved brand known
                            for
                            its quality and design</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr>
    <div class="flex flex-row align-middle items-center text-center py-4">
        <div>
            <img src="/assets/images/ksk.svg" style="width: 100px;margin: auto 0;" alt="">
        </div>
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