import {
  cleanup, render, screen, waitFor,
} from '@testing-library/react';
import Root from '../src/App';
import todayDate from '../src/libs/todayDate';

describe('App should render all components', () => {
  beforeEach(() => { render(<Root />); });
  afterEach(() => { cleanup(); });
  test('title', async () => {
    await waitFor(() => {
      expect(screen.getByText('Weather App')).toBeDefined();
    });
  });
  test('date', async () => {
    await waitFor(() => {
      const date = todayDate('en');
      expect(screen.getByText(date)).toBeDefined();
    });
  });
  test('Main actual weather', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('main weather icon')).toBeDefined();
    });
  });
  test('Main actual details', async () => {
    await waitFor(() => {
      expect(screen.getByAltText('max-min svg')).toBeDefined();
      expect(screen.getByAltText('feel svg')).toBeDefined();
      expect(screen.getByAltText('wind svg')).toBeDefined();
      expect(screen.getByAltText('humidity svg')).toBeDefined();
    });
  });
});
