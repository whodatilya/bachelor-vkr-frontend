<template>
  <div class="flex flex-col login__wrapper">
    <div class="flex flex-col p-16 gap-6">
      <div class="flex flex-row justify-center header-font">Sign Up</div>
      <div class="flex flex-col gap-6">
        <span class="label-font">Login</span>
        <input v-model="login" class="input" type="text">
      </div>
      <div class="flex flex-col gap-6">
        <span class="label-font">Password</span>
        <input v-model="password" class="input" type="text">
      </div>
      <div class="flex flex-col gap-6">
        <span class="label-font">Repeat password</span>
        <input v-model="repassword" class="input" type="text">
      </div>
      <div class="flex flex-row justify-center">
        <button @click="onClickSubmit" class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()

const login = ref<string>('')
const password = ref<string>('')
const repassword = ref<string>('')

const onClickSubmit = () => {
  //Todo: Подключить бэк
  router.push({ name: 'login' })
}
</script>

<style scoped lang="scss">
.login__wrapper {
  background: #D9D9D9;
  border-radius: 40px;
  mix-blend-mode: multiply;
  width: 1000px;
}
.input {
  height: 60px;
  font-size: 24px;
  border-radius: 8px;
  padding-left: 20px;
  outline: none;
}

.header-font {
  font-size: 36px;
}

.label-font {
  font-size: 24px;
}

.button {
  background: #D9D9D9;
  border-radius: 8px;
  width: 430px;
  height: 60px;
  mix-blend-mode: multiply;
}

</style>