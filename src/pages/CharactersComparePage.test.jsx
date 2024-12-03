import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CharactersComparePage from './CharactersComparePage';

const characters = [
  {
    id: "1",
    name: "Thor",
    capacities: {
      force: 9,
      intelligence: 7,
      energy: 8,
      speed: 6,
      durability: 9,
      fighting: 8,
    },
  },
  {
    id: "2",
    name: "Captain America",
    capacities: {
      force: 7,
      intelligence: 8,
      energy: 6,
      speed: 7,
      durability: 8,
      fighting: 9,
    },
  },
];

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLoaderData: jest.fn(),
}));

describe('CharactersComparePage', () => {
  beforeEach(() => {
    const { useLoaderData } = require('react-router');
    useLoaderData.mockReturnValue(characters);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders without crashing', () => {
    render(CharactersComparePage);
    });

  test('renders the compare page with character options', () => {
    render(
      <Router>
        <CharactersComparePage />
      </Router>
    );

    expect(screen.getByText('Compare characters')).toBeInTheDocument();
    expect(screen.getByTestId('select-character-1')).toBeInTheDocument();
    expect(screen.getByTestId('select-character-2')).toBeInTheDocument();
  });

  test('renders the radar chart with selected characters', () => {
    render(
      <Router>
        <CharactersComparePage />
      </Router>
    );

    // Vérifiez que les options de sélection sont présentes
    expect(screen.getByTestId('select-character-1')).toHaveTextContent('Thor');
    expect(screen.getByTestId('select-character-2')).toHaveTextContent('Captain America');

    // // Vérifiez que le graphique radar est présent
    // const radarChart = screen.getByTestId('radar-chart');
    // expect(radarChart).toBeInTheDocument();
  });

  test('updates the radar chart when different characters are selected', () => {
    render(
      <Router>
        <CharactersComparePage />
      </Router>
    );

    const select1 = screen.getByTestId('select-character-1');
    const select2 = screen.getByTestId('select-character-2');

    fireEvent.change(select1, { target: { value: '1' } });
    fireEvent.change(select2, { target: { value: '0' } });

    // Vérifiez que les options de sélection sont présentes
    expect(select1).toHaveTextContent('Captain America');
    expect(select2).toHaveTextContent('Thor');

    // // Vérifiez que le graphique radar est mis à jour
    // const radarChart = screen.getByTestId('radar-chart');
    // expect(radarChart).toBeInTheDocument();
  });

  test('displays a message when no characters are available for comparison', () => {
    const { useLoaderData } = require('react-router');
    useLoaderData.mockReturnValue([]);

    render(
      <Router>
        <CharactersComparePage />
      </Router>
    );

    expect(screen.getByText('No characters available for comparison.')).toBeInTheDocument();
  });

  test('logs loaded characters', () => {
    console.log = jest.fn();

    render(
      <Router>
        <CharactersComparePage />
      </Router>
    );

    expect(console.log).toHaveBeenCalledWith('Loaded characters:', characters);
  });
});