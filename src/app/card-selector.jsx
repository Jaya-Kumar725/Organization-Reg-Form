import * as React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';

export const CardSelector = props => {
  const { value, valid } = props;
  const [cardHover, setCardHover] = React.useState('');

  const onMouseEnter = React.useCallback(
    event => setCardHover(event.currentTarget.getAttribute('for')),
    [setCardHover]
  );
  const onMouseLeave = React.useCallback(() => setCardHover(''), [
    setCardHover
  ]);
  const onChange = React.useCallback(
    event => props.onChange({ value: event.currentTarget.value }),
    [props.onChange]
  );

  const filter = 'brightness(1.8) grayscale(1) opacity(.7)';
  const filterHover = 'brightness(1.2) grayscale(.5) opacity(.9)';
  const cardStyle = {
    cursor: 'pointer',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    width: 138,
    height: 70,
    border: '1px solid'
  };

  return <FieldWrapper />;
};
