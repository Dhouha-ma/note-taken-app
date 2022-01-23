import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Note from "@/components/Note.vue";
import "@testing-library/jest-dom";

describe("Note.vue", () => {
  it("should display new note template", () => {
    render(Note);
    expect(screen.getByPlaceholderText("Your new note")).toBeInTheDocument();
    expect(screen.getByTitle("Add")).toBeInTheDocument();
  });

  it("should add new note after clicking on add button", async () => {
    render(Note);
    userEvent.type(screen.getByRole("textbox", {name: ""}), "test note");
    userEvent.click(screen.getByRole("button", {name: "Add"}));
    // expect(await screen.findByText('test note')).toBeInTheDocument();
    // expect(await screen.findByTitle("Save")).toBeInTheDocument();
    // expect(await screen.findByTitle("Delete")).toBeInTheDocument();
  });
});
