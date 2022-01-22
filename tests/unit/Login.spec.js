import { render, screen } from "@testing-library/vue";
import Login from "@/components/Login.vue";
import "@testing-library/jest-dom";

describe("Login.vue", () => {

  it("should display login form", () => {
    render(Login);
    expect(
      screen.getByText("Log in to your Note Taken Application")
    ).toBeInTheDocument();
  });
});
