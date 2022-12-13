import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('harus punya text Counter', () => {
    render(<Counter />);
    expect(screen.getByText('Counter')).toBeInTheDocument();
  });

  it('should increase counter by 1', () => {
    // render element yg akan di test
    render(<Counter />);

    //get element yg akan di compare & event
    // const buttonAdd = ;
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    const counterEl = screen.getByTitle('counter');

    //compare
    expect(counterEl).toHaveTextContent(1);
  });

  it('should decrease counter by 1', () => {
    render(<Counter />);

    const buttonAdd = screen.getByRole('button', { name: '-' });
    fireEvent.click(buttonAdd);
    const counterEl = screen.getByTitle('counter');

    expect(counterEl).toHaveTextContent(-1);
  });

  it('should reset reset counte to 0', () => {
    render(<Counter initialValue={10} />);

    const counterEl = screen.getByTitle('counter');
    const buttonReset = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(buttonReset);

    expect(counterEl).toHaveTextContent(0);
  });
});
