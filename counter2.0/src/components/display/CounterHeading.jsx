import React from 'react';

import Heading from './Heading.jsx';

export default function CounterHeading({ num }) {
  return (
    <Heading text={`Counter ${num}`} />
  )
}
