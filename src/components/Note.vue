<template>
  <div class="container ml-5 mt-5">
    <button
      class="bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
      type="button"
      v-on:click="newNote"
    >
      Add
    </button>

    <div
      v-for="note in notes"
      v-bind:key="note.id"
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5"
    >
      <div id="newNote" style="display: none">
        <div
          class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
        >
          <input
            v-model="notetext"
            type="text"
            placeholder="Your new note"
            class="w-full h-64 flex flex-col justify-between bg-red-100 rounded-lg mb-6 py-5 px-4"
          />
          <!-- </input> -->
          <div class="flex justify-between">
            <button
              class="bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
              type="button"
              v-on:click="addNote"
            >
              Add
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
            v-on:click="SaveNote(note.id, note.text)"
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
    newNote() {
      document.getElementById("newNote").style.display = "block";
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
              gmail_message_id: "string",
              gmail_draft_id: "string",
              mailbutler_message_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              contact_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            },
            text: this.notetext,
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
        .delete(`https://beta.mailbutler.io/api/v2/notes/` + noteId, {
          headers,
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
