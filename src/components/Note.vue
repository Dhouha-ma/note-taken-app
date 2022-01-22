<template>
  <div>
    <div class="mx-auto container py-20 px-6">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="rounded">
          <div
            class="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4"
          >
            <div>
              <h4 class="text-gray-800 font-bold mb-3">13 things to work on</h4>
              <p
                class="text-gray-800 text-sm"
              >Our interior design experts work with you to create the space that you have been dreaming about.</p>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800">
                <p class="text-sm">March 28, 2020</p>
                <button
                  class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300 focus:ring-black"
                  aria-label="edit note"
                  role="button"
                >
                  <img
                    class="dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                    alt="edit"
                  />
                  <img
                    class="dark:block hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                    alt="edit"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note"
};
</script>

<style scoped>
</style>