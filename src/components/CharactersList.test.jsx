import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter as Router } from 'react-router-dom';

const characters = [
  {
    id: "1",
    name: "Thor",
    modified: "2021-03-01"
  },
  {
    id: "2",
    name: "Captain America",
    modified: "2021-02-01"
  }
];

describe('CharactersList component', () => {
  test('renders "No characters found" when characters array is empty', () => {
    render(
      <Router>
        <CharactersList characters={[]} />
      </Router>
    );
    expect(screen.getByText('No characters found')).toBeInTheDocument();
  });

  test('renders a list of characters when characters array is not empty', () => {
    render(
      <Router>
        <CharactersList characters={characters} sortBy="name" order="asc" />
      </Router>
    );
    expect(screen.getByText('Thor')).toBeInTheDocument();
    expect(screen.getByText('Captain America')).toBeInTheDocument();
  });

  test('sorts characters by name in ascending order', () => {
    render(
      <Router>
        <CharactersList characters={characters} sortBy="name" order="asc" />
      </Router>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Captain America');
    expect(listItems[1]).toHaveTextContent('Thor');
  });

  test('sorts characters by name in descending order', () => {
    render(
      <Router>
        <CharactersList characters={characters} sortBy="name" order="desc" />
      </Router>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Thor');
    expect(listItems[1]).toHaveTextContent('Captain America');
  });

  test('sorts characters by modified date in ascending order', () => {
    render(
      <Router>
        <CharactersList characters={characters} sortBy="modified" order="asc" />
      </Router>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Captain America');
    expect(listItems[1]).toHaveTextContent('Thor');
  });

  test('sorts characters by modified date in descending order', () => {
    render(
      <Router>
        <CharactersList characters={characters} sortBy="modified" order="desc" />
      </Router>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems[0]).toHaveTextContent('Thor');
    expect(listItems[1]).toHaveTextContent('Captain America');
  });
});