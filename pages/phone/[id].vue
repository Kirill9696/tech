<script setup>

  let route = useRoute();

  let id = route.params.id;

  const { data: phones } = await useFetch('http://localhost:3005/phones');

  const phone = phones.value.find(phone => phone.id === Number(id));

  const gb = ref('128GB')

  const vision = ref('Specs')
</script>

<template>
<div class="gap-1 px-6 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[920px] flex-1">
      <div class="flex flex-wrap gap-2 p-4">
        <a class="text-[#636f88] text-base font-medium leading-normal" href="#">{{ $t('home') }}</a>
        <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
        <a class="text-[#636f88] text-base font-medium leading-normal" href="#">Iphone</a>
        <span class="text-[#636f88] text-base font-medium leading-normal">/</span>
        <span class="text-[#111318] text-base font-medium leading-normal">Iphone {{ phone.id }} Pro Max</span> 
      </div>
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#111318] tracking-light text-[32px] font-bold leading-tight">iPhone {{ phone.id }} Pro</p>
          <p class="text-[#636f88] text-sm font-normal leading-normal">${{ phone.price }}</p>
          {{ vision }}
        </div>
      </div>
      <div class="pb-3">
        <div class="flex border-b border-[#dcdfe5] px-4 gap-8">
          <button @click="vision= 'Overwiew'" class="flex flex-col items-center justify-center border-b-[3px] border-b-[#111318] text-[#111318] pb-[13px] pt-4" href="#">
            <p class="text-[#111318] text-sm font-bold leading-normal tracking-[0.015em]">{{ $t('overview') }}</p>
          </button>
          <button @click="vision= 'Specs'" class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[13px] pt-4" href="#">
            <p class="text-[#636f88] text-sm font-bold leading-normal tracking-[0.015em]">{{ $t('tech_specs') }}</p>
          </button>
          <button @click="vision= 'Pricing'" class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[13px] pt-4" href="#">
            <p class="text-[#636f88] text-sm font-bold leading-normal tracking-[0.015em]">{{ $t('pricing') }}</p>
          </button>
          <button @click="vision='Software'" class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#636f88] pb-[13px] pt-4" href="#">
            <p class="text-[#636f88] text-sm font-bold leading-normal tracking-[0.015em]">{{ $t('software') }}</p>
          </button>
        </div>
      </div>
      <div v-if="vision == 'Overwiew'">
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div class="flex flex-col gap-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://cdn.usegalileo.ai/stability/dc51bab8-a04d-4144-9452-346a96b8a7a3.png");'
            ></div>
          </div>
          <div class="flex flex-col gap-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://cdn.usegalileo.ai/sdxl10/dd520496-c3b7-49d7-aa2f-33ef2a37166d.png");'
            ></div>
          </div>
          <div class="flex flex-col gap-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://cdn.usegalileo.ai/stability/8ce1bf3c-d999-41ff-af8d-178b36a84898.png");'
            ></div>
          </div>
          <div class="flex flex-col gap-3">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://cdn.usegalileo.ai/stability/c64a18b9-76dc-4247-938a-29620fad3a5f.png");'
            ></div>
      </div>
    </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/stability/a17d420d-bf31-4224-8d55-9ee3fe5fba6a.png");'
          ></div>
        </div>
        <div class="flex flex-col gap-3">
          <div
            class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style='background-image: url("https://cdn.usegalileo.ai/stability/48b3dcfd-79f1-4a58-984d-b7b6b03eac9b.png");'
          ></div>
        </div>
      </div>
      <div v-if="vision == 'Software'">
        <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">iPhone {{ phone.id }} Pro</h3>
        <p class="text-[#111318] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {{ $t('description') }}
        </p>
      </div>
      <div v-if="vision == 'Specs'">
        <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('tech_specs') }}</h3>
        <div class="p-4 grid grid-cols-2">
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('display') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('display_description') }}</p>
          </div>
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('shield') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('shield_description') }}</p>
          </div>
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('capable') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('capable_description') }}</p>
          </div>
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('chip') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('chip_description') }}</p>
          </div>
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('camera') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('camera_description') }}</p>
          </div>
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pl-2">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('scanner') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('scanner_description') }}</p>
          </div>
          <div class="flex flex-col gap-1 border-t border-solid border-t-[#dcdfe5] py-4 pr-2 col-span-2 pr-[50%]">
            <p class="text-[#636f88] text-sm font-normal leading-normal">{{ $t('recording') }}</p>
            <p class="text-[#111318] text-sm font-normal leading-normal">{{ $t('recording_description') }}</p>
          </div>
        </div>
      </div>
        <div class="flex px-4 py-3 justify-start">
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#3571e9] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span class="truncate">{{ $t('add') }}</span>
          </button>
        </div>
    </div>
    <div class="layout-content-container flex flex-col w-[360px]">
      <h3 class="text-[#111318] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{{ $t('select') }} iPhone {{ phone.id }} Pro</h3>
      <div class="flex flex-wrap gap-5 p-4">
        <label
          class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
          style="background-color: rgb(0, 0, 0);"
        >
          <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" checked = "false" />
        </label>
        <label
          class="size-10 rounded-full border border-[#dcdfe5] ring-[color-mix(in_srgb,#111318_50%,_transparent)] has-[:checked]:border-[3px] has-[:checked]:border-white has-[:checked]:ring"
          style="background-color: rgb(255, 255, 255);"
        >
          <input type="radio" class="invisible" name="7c4caaa2-55e9-419f-a4a3-f9b0087fef62" />
        </label>
      </div>
      <div class="flex flex-wrap gap-3 p-4">
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        @click="gb='128GB'"
          >
          128GB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        @click="gb='256GB'"
          >
          256GB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        @click="gb='512GB'"
          >
          512GB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        <label
          class="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dcdfe5] px-4 h-11 text-[#111318] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#3571e9] relative cursor-pointer"
        @click="gb='1TB'"
          >
          1TB
          <input type="radio" class="invisible absolute" name="9aab891a-7a29-414a-8f17-07fe579482ca" />
        </label>
        Память: {{ gb }}
      </div>
      
      <div v-if="vision=='Pricing'">
        <div class="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style='background-image: url("https://cdn.usegalileo.ai/sdxl10/8ff92ef5-7990-4ad5-927c-413a653862c4.png");'
            ></div>
            <div class="flex flex-col justify-center">
              <p class="text-[#111318] text-base font-medium leading-normal line-clamp-1">{{ $t('apple_card') }}</p>
            </div>
                  </div>
                  <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4">{{ $t('pay') }} ${{ phone.price }} </p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">{{ $t('directly') }}</p>
                  <p class="text-[#636f88] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">{{ $t('more') }}</p>
            </div>
      </div>
  </div>


</template>