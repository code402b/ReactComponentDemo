import React from 'react'
import styled from 'styled-components';

export default function Heading({ text }) {
  return (
    <StyledHeading>{text}</StyledHeading>
  )
}

const StyledHeading = styled.h2`
  text-align: center;
  font-family: Verdana;
  font-weight: 500;
  font-size: 1.2em;
`