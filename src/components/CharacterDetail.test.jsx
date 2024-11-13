import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLoaderData } from 'react-router';
import CharacterDetailPage from '../pages/CharacterDetailPage';


// Mock the useLoaderData hook
jest.mock('react-router', () => ({
    useLoaderData: jest.fn(),
}));

// Mock the CharacterDetail component
jest.mock('../components/CharacterDetail', () => () => <div>CharacterDetail Component</div>);

describe('CharacterDetailPage Component', () => {

    test('renders "loading..." when character data is not loaded', () => {
        useLoaderData.mockReturnValue(null);
        render(<CharacterDetailPage />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders CharacterDetail component when character data is loaded', () => {
        const character = { id: 1, name: 'Character Name' };
        useLoaderData.mockReturnValue(character);
        render(<CharacterDetailPage />);
        screen.debug();
        expect(screen.getByText('CharacterDetail Component')).toBeInTheDocument();
    });

});
