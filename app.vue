<script setup lang="ts">
  import axios from 'axios';
  axios.defaults.baseURL = 'http://localhost:3005';
useSeoMeta({
  title: 'Apple Tech',
  description: 'Магазин новых Iphone с возможностью предзаказа. Огромное количество товаров и их видов.',
  ogImageUrl: 'https://s3.wi-fi.ru/cp3o/oxtd8d7sa3fmkuezxmpzpxqa0vqg?response-content-type=image%2Fwebp'
})
</script>
<template>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>