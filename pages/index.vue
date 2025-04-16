<script setup>
</script>

<template>
     <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap gap-2 p-4">
              <a class="text-[#636f88] text-base font-medium leading-normal" href="#">products</a>
            </div>
            <div class="flex flex-wrap justify-between gap-3 p-4">
                <p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight min-w-72">catalog</p></div>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              
              <NuxtLink :to="'/phones'">
                  <a>
                      <div class="flex flex-col gap-3 pb-3">
                        <div
                          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                          style='background-image: url("https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_664b2018fddbc17ea0b46a19_664b2025fddbc17ea0b46a7d/scale_1200");'
                        ></div>
                        <div>
                          <p class="text-[#111318] text-base font-medium leading-normal">Iphone</p>
                        </div>
                      </div>
                  </a>
              </NuxtLink>
              <NuxtLink :to="'/macbooks'">
                  <a>
                      <div class="flex flex-col gap-3 pb-3">
                        <div
                          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                          style='background-image: url("https://cdn1.ozone.ru/s3/multimedia-g/6354158116.jpg");'
                        ></div>
                        <div>
                          <p class="text-[#111318] text-base font-medium leading-normal">MacBook</p>
                        </div>
                      </div>
                  </a>
              </NuxtLink>
              <NuxtLink>
                  <a>
                      <div class="flex flex-col gap-3 pb-3">
                        <div
                          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                          style='background-image: url("https://hi-stores.ru/upload/iblock/5b7/5b7bbfeda2b9d172d2408af09b004499.jpg");'
                        ></div>
                        <div>
                          <p class="text-[#111318] text-base font-medium leading-normal">iPad</p>
                        </div>
                      </div>
                  </a>
              </NuxtLink>
              <NuxtLink>
                  <a>
                      <div class="flex flex-col gap-3 pb-3">
                        <div
                          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                          style='background-image: url("https://cdn1.ozone.ru/s3/multimedia-m/6877654510.jpg");'
                        ></div>
                        <div>
                          <p class="text-[#111318] text-base font-medium leading-normal">AirPods</p>
                        </div>
                      </div>
                  </a>
              </NuxtLink>
              <NuxtLink>
                  <a>
                      <div class="flex flex-col gap-3 pb-3">
                        <div
                          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                          style='background-image: url("https://avatars.mds.yandex.net/i?id=de2a881d1e15ca736c84516a45531b44_l-5240648-images-thumbs&n=13");'
                        ></div>
                        <div>
                          <p class="text-[#111318] text-base font-medium leading-normal">Apple Watch</p>
                        </div>
                      </div>
                  </a>
              </NuxtLink>
            </div>
          </div>
        </div>
</template>