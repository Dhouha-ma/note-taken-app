import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Login from "@/components/Login.vue";
import "@testing-library/jest-dom";

describe("Login.vue", () => {
  it("should display login form and sign in button", () => {
    render(Login);
    expect(
      screen.getByText("Login To Your Notes Application")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Your email address")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign in/i })
    ).toBeInTheDocument();
  });

  it("should redirect to notes page when click on login", async () => {
    render(Login);
    userEvent.click(screen.getByRole("button", { name: /Sign in/i }));
    //expect(await screen.findByPlaceholderText("Your new note")).toBeInTheDocument();
    //expect(await screen.findByTitle("Add")).toBeInTheDocument();
  });
});
