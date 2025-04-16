<script setup>
  let route = useRoute();



  const { data: phones } = await useFetch('http://localhost:3005/phones');

</script>

<template>
  <!-- поставил обратно phones.vue и ссылка дальше не переходит. хелп -->
    <div class="px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="flex flex-wrap gap-2 p-4">
          <a class="text-[#636f88] text-base font-medium leading-normal" href="#">products</a>
          <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
          <a class="text-[#636f88] text-base font-medium leading-normal" href="#">Iphone</a>
        </div>
        <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight min-w-72">Iphone</p></div>
        <div class="flex gap-3 p-3 flex-wrap pr-4">
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">new</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">$899 - $1,099</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">Pro</p>
          </div>
          <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
            <p class="text-[#111318] text-sm font-medium leading-normal">Pro Max</p>
          </div>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          
          <NuxtLink v-for="item in phones" :to="`/phone/${item.id}`"> 
            <a href="">
              <div class="flex flex-col gap-3 pb-3">
                <div
                  class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  :style="{backgroundImage: `url(${item.image})`}"
                ></div>
                <div>
                  <p class="text-[#111318] text-base font-medium leading-normal">Iphone {{ item.id }} Pro Max</p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal">from ${{ item.price}}</p>
                </div>
              </div>
            </a>
          </NuxtLink>
        </div>
      </div>
    </div>
</template>