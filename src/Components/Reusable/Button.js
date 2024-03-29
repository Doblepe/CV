import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.bg_2};
    padding: 0.7rem;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => props.theme.text};
  }
@media only screen and(max - width: 768px) {
    .button {
    font - size: 1rem;
  }
}
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
