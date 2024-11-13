import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from './AboutPage';

describe('AboutPage component', () => {
    test('renders without crashing', () => {
        render(<About />);
    });

    test('sets the document title correctly', () => {
        render(<About />);
        expect(document.title).toBe("About Us | Marvel's Characters");
    });

    test('renders the heading correctly', () => {
        render(<About />);
        const headingElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toHaveTextContent('About us');
    });

    test('renders the paragraph correctly', () => {
        render(<About />);
        const paragraphElement = screen.getByText('We are a team of Marvel fan who love to create awesome apps !');
        expect(paragraphElement).toBeInTheDocument();
    });
});