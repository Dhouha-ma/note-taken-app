import { render, screen } from "@testing-library/vue";
import Note from "@/components/Note.vue";
import "@testing-library/jest-dom";

describe("Note.vue", () => {
  it("should display new note template", () => {
    render(Note);
    expect(screen.getByPlaceholderText("Your new note")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add/i })
    ).toBeInTheDocument();
  });
});
