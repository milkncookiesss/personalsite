import React from 'react';
import styled from 'styled-components';

const Picture = (props) => {
  return (
    <p>
      <Image className="picture" src="https://s3-us-west-2.amazonaws.com/peter-park-portfolio-img/Image+from+iOS.jpg"></Image>
    </p>
  )
}

const Image = styled.img `
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
  border-radius: 50%;
`
export default Picture;