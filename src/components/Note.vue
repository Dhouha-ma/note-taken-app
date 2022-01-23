<template>
  <div class="container ml-5 mt-5">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5"
    >
      <div
        class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
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
            class="bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            type="button"
            v-on:click="addNote"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    <div
      v-for="note in notes"
      v-bind:key="note.id"
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5"
    >
      <div
        class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
      >
        <textarea
          v-model="note.text"
          class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
        >
        </textarea>
        <div class="flex justify-between">
          <button
            class="bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            type="button"
            v-on:click="saveNote(note.id, note.text)"
          >
            Save
          </button>
          <button
            class="bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            type="button"
            v-on:click="deleteNote(note.id)"
          >
            Delete
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
    getNotes(){
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
