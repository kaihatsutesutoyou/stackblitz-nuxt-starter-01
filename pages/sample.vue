<template>
  <div>
    <h1>Main Page</h1>
    <button @click="handleClick">Coupon {{ msg }}</button>
    <LazyCoupon v-if="show" />
    <div>
      {{ count }}
      <button @click="inc">increase</button>
      <button @click="dec">decrease</button>
    </div>
    <h2>{{ $hello('World') }}</h2>
    <h2>{{ $happy('New Year') }}</h2>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);
const msg = ref('Get');

const handleClick = () => {
  show.value = !show.value;
  msg.value = show.value ? 'Clear' : 'Get';
};

const { count, inc, dec } = useCounter(100);
// const uc = useCounter(100);

// console.log(uc.count);
// console.log(uc.inc);
// console.log(uc.dec);

const { $hello, $happy } = useNuxtApp();
</script>
