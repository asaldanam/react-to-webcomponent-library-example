
import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

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
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
};

export default UIExample;
