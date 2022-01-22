import { render } from "@testing-library/vue";
import Note from "@/components/Note.vue";
import "@testing-library/jest-dom";

describe("Note.vue", () => {

  it("should display notes", () => {
    render(Note);
    // expect(
    //   screen.getByText("Log in to your Note Taken Application")
    // ).toBeInTheDocument();
  });
});
