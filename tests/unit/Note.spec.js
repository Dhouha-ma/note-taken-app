import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Note from "@/components/Note.vue";
import "@testing-library/jest-dom";
import axios from 'axios'

jest.spyOn(axios, 'post').mockResolvedValue(true);
jest.spyOn(axios, 'put').mockResolvedValue(true);

describe("Note.vue", () => {
  it("should display new note template", () => {
    render(Note);

    expect(screen.getByPlaceholderText("Your new note")).toBeInTheDocument();
    expect(screen.getByTitle("Add")).toBeInTheDocument();
  });

  it("should make API call after typing a text and clicking on add button", async () => {
    render(Note);

    await userEvent.type(screen.getByRole("textbox", {name: ""}), "test note");
    await userEvent.click(screen.getByRole("button", {name: "Add"}));

    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
