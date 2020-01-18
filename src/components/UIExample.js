
import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const StyledButton = styled.button`
  background: red;
`

const UIExample = ({
  children,
  onChange,
  text,
  checked,
  object
}) => {

  const handleEvent = React.useCallback(() => {
    onChange({detail: [
      {test: 'complex data pass to the callback'}
    ]});
  })

  return (
    <div>
      React Component 
      <p>text: {text}</p>
      <p>checked: {checked ? 'Tiene el attr checked' : 'No tiene el attr checked'}</p>
      <p>object: {object && object.value}</p>
      <p>{object && JSON.stringify(object)}</p>
      <StyledButton onClick={handleEvent}>Emit event</StyledButton>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

export default UIExample;
