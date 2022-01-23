<template>
  <div class="container ml-5 mt-5">
    <button
      class="bg-gray-800 mb-5 mr-5 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
      type="button"
      v-on:click="addNote"
    >
      Add Note
    </button>
    <div v-for="note in notes" v-bind:key="note.id">
      <div>
        <textarea v-model="note.text"
        class="w-64 h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
      >
      </textarea>
    <button
      class="bg-gray-800 mb-5 mr-5 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
      type="button"
      v-on:click="SaveNote(note.id, note.text)"
    >
      Save Note
    </button>
    <button
      class="bg-gray-800 mb-5 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
      type="button"
      v-on:click="deleteNote(note.id)"
    >
      Delete Note
    </button>
      </div>
      <!-- <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5"
      >
        <div
          class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
        >
          <div>
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
              v-on:click="editNote"
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
      </div> -->
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
      title: "",
      editing: "",
      text: "",
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
      })
      .catch((error) => {
        console.log(error);
        this.$router.push({ name: "Login" });
      });
  },
  methods: {
    addNote() {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      axios
        .post(
          "https://beta.mailbutler.io/api/v2/notes",
          {
            context: {
              message_id: "1",
              gmail_message_id: "string",
              gmail_draft_id: "string",
              mailbutler_message_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            text: "new note 5",
            team_id: "Unknown Type: string,null",
            meta: {
              to: [
                {
                  contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  name: "string",
                },
              ],
              subject: "note title 3",
              sender: {
                contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                name: "string",
              },
            },
          },
          { headers }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    SaveNote(noteId, noteText) {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      axios
        .put(
          `https://beta.mailbutler.io/api/v2/notes/` + noteId,
          {
            context: {
              message_id: "1",
              gmail_message_id: "string",
              gmail_draft_id: "string",
              mailbutler_message_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            text: noteText,
            team_id: "Unknown Type: string,null",
            meta: {
              to: [
                {
                  contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  name: "string",
                },
              ],
              subject: "note title 3",
              sender: {
                contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                name: "string",
              },
            },
          },
          { headers }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteNote(noteId) {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      axios
        .delete(
          `https://beta.mailbutler.io/api/v2/notes/` + noteId,
          { headers }
        )
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
