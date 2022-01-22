<template>
  <div>
    <!-- <button
      class="bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
      type="button"
      v-on:click="addNote"
    >
      Add
    </button> -->
    <div v-for="note in notes" v-bind:key="note.id">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 ml-5"
      >
        <div
          class="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4"
        >
          <div>
            <h4 class="text-gray-800 font-bold mb-3">
              {{ note.meta.subject }}
            </h4>
            <p class="text-gray-800 text-sm">Note ID: {{ note.id }}</p>
            <p class="text-gray-800 text-sm">
              {{ note.text }}
            </p>
          </div>
          <div class="flex items-center justify-between text-gray-800">
            <p class="text-sm">{{ note.created_at }}</p>
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
</template>

<script>
import axios from "axios";

export default {
  name: "Note",
  data() {
    return {
      notes: [],
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    axios
      .get("https://beta.mailbutler.io/api/v2/notes", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then((response) => {
        this.notes = response.data;
        console.log(this.notes);
      });
  },
  methods: {
    async addNote() {
      axios
        .post("https://beta.mailbutler.io/api/v2/notes", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
          body: JSON.stringify({
            context: {
              message_id: "1",
              contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            team_id: "Unknown Type: string,null",
            meta: {
              to: [
                {
                  contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                },
              ],
              sender: {
                contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              },
            },
          }),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
