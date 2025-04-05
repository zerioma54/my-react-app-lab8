import {test, expect} from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'; 
import Header from '../components/Header';

test("render navbar links", () => {
    render(
        <MemoryRouter>
                <Header />
            </MemoryRouter>
    );

    expect(screen.getByText('My Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();
});

test('Navbar toggles on button click', async () => {
    render(
        <MemoryRouter>
            <Header />    
        </MemoryRouter>  
    );
    const navbarToggle = screen.getByRole('button');

    await userEvent.click(navbarToggle);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();
});
