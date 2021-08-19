<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
</style>
