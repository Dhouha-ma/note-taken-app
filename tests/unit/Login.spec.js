import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Login from "@/components/Login.vue";
import "@testing-library/jest-dom";
import axios from 'axios'

jest.spyOn(axios, 'post').mockResolvedValue(true);

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

  it("should make API call when click on Sign in button", async () => {
    render(Login);
    
    await userEvent.click(screen.getByRole("button", { name: /Sign in/i }));
    expect(axios.post).toHaveBeenCalled()
  });
});
