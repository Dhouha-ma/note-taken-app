<template>
  <div class="m-5 grid grid-cols-3 gap-10">
    <div>
      <div
        class="w-full flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
      >
        <textarea
          v-model="notetext"
          type="text"
          placeholder="Your new note"
          class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
        >
        </textarea>
        <div class="flex justify-between">
          <button
            class="bg-gray-800 hover:bg-grey-900 text-white text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline p-1"
            type="button"
            v-on:click="addNote"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-for="note in notes" v-bind:key="note.id">
      <div class="w-full bg-red-100 rounded-lg mb-6 py-5 px-4">
        <textarea
          v-model="note.text"
          class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
        >
        </textarea>
        <div class="flex justify-between">
          <button
            class="bg-gray-800 hover:bg-grey-900 text-white text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline p-1"
            type="button"
            v-on:click="saveNote(note.id, note.text)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <button
            class="bg-gray-800 hover:bg-grey-900 text-white text-sm font-semibold rounded-full focus:outline-none focus:shadow-outline p-1"
            type="button"
            v-on:click="deleteNote(note.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </button>
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
      notetext: "",
    };
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    getNotes() {
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
    addNote() {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      if (this.notetext) {
        axios
          .post(
            "https://beta.mailbutler.io/api/v2/notes",
            {
              context: {
                message_id: "1",
              },
              text: this.notetext,
            },
            { headers }
          )
          .then((response) => {
            this.getNotes();
            this.notetext = "";
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    saveNote(noteId, noteText) {
      const headers = {
        Authorization: "Bearer " + this.token,
      };
      axios
        .put(
          `https://beta.mailbutler.io/api/v2/notes/` + noteId,
          {
            context: {
              message_id: "1",
            },
            text: noteText,
          },
          { headers }
        )
        .then((response) => {
          console.log("Note saved", response);
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
        .delete(`https://beta.mailbutler.io/api/v2/notes/` + noteId, {
          headers,
        })
        .then((response) => {
          this.getNotes();
          console.log("Note deleted", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
