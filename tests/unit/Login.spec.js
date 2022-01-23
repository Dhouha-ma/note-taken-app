import { render, screen } from "@testing-library/vue";
import Login from "@/components/Login.vue";
import "@testing-library/jest-dom";

describe("Login.vue", () => {
  it("should display login form and sign in button", () => {
    render(Login);
    expect(
      screen.getByText("Log in to your Note Taken Application")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Your email address")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign in/i })
    ).toBeInTheDocument();
  });

  it("should redirect to notes page when click on login", () => {
    // render(Login);
    // fireEvent.click(screen.getByRole('button'))
    // expect(
    //   screen.getByText("Note")
    // ).toBeInTheDocument();
  });
});
