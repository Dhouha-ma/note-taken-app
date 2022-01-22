<template>
  <div
  class="container mt-10 max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
  <div class="w-full xl:w-1/2 p-8">
    <form method="post" action="#" onSubmit="return false">
      <h1 class=" text-2xl font-bold">Log in to your Note-Taken Application</h1>
      <div class="mb-4 mt-6">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2" 
          htmlFor="email">
          Email
        </label>
        <input
          class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" 
          v-model="email" 
          type="text" 
          placeholder="Your email address"/>
      </div>
      <div class="mb-6 mt-6">
        <label
          class="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="password">
          Password
        </label>
        <input
          class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          v-model="password"
          type="password"
          placeholder="Your password"
        />
      </div>
      <div class="flex w-full mt-8">
        <button
          class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          type="button"
          v-on:click="login">
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        async login() {
            axios.post('https://beta.mailbutler.io/api/v2/users/login', {
                email: this.email,
                password: this.password
            })
            .then((response) => {
            if (response.status && response.data.token) {
                console.log('true')
                //this.$router.push({name:'Note'})
            }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>

</style>