import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

test("renders 404 page with correct text and link", () => {
    render(
        <MemoryRouter>
            <NotFound />
        </MemoryRouter>
    );

    expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
    expect(screen.getByText("The page you're looking for doesn't exist.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Go Back to Home/i })).toBeInTheDocument();
});