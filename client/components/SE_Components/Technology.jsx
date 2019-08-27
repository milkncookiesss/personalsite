import React from 'react';
import styled from 'styled-components';

const Technology = (props) => {
  return(
    <Tech>
        <img src="https://img.icons8.com/color/96/000000/html-5.png" />
        <img src="https://img.icons8.com/color/96/000000/css3.png" />
        <img src="https://img.icons8.com/ios-glyphs/96/000000/react.png" />
        <img src="https://img.icons8.com/color/96/000000/angularjs.png" />
        <img src="https://img.icons8.com/color/96/000000/javascript.png" />
        <img src="https://img.icons8.com/color/96/000000/nodejs.png" />
        <img src="https://img.icons8.com/color/96/000000/mongodb.png" />
        <img src="https://img.icons8.com/color/96/000000/mysql.png" />
        <img src="https://img.icons8.com/color/96/000000/postgreesql.png" />
        <img src="https://img.icons8.com/color/96/000000/firebase.png" />
        <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
        <img src="https://img.icons8.com/color/96/000000/docker.png" />
    </Tech>
  );
}

const Tech = styled.div`
  display: flex;
  justify-content: center;
`

export default Technology;