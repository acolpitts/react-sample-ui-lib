import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button text="Learn More" />);

    getByText(container, 'Learn More');
  });

  test('should handle click events', () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button text="Click me, maybe?" onClick={onClickMock} />
    );
    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
  });

  test('should make text uppercase', () => {
    const { container } = render(<Button text="Learn More" />);
    const component = getByText(container, 'Learn More');

    expect(component).toHaveStyleRule('text-transform', 'uppercase');
  });
});
