import React from 'react';
import { Header} from 'semantic-ui-react';

const Title = (props) => {
  const { heading } = props;
  return (
    <Header as='h1'>{heading}</Header>
  )
}

export default Title;