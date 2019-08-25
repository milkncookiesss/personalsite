import React from 'react';
import styled from 'styled-components';

const Name = (props) => {
  return (
    <X className="name">
    Peter Park
    </X>
  )
}

const X = styled.h1 `
  font-size: 30px
  font-family: Tahoma, Geneva, sans-serif;
  text-align: center;
`

export default Name;