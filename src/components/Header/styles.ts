import styled from 'styled-components';

export const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.text};

    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;

  a {
    margin-right: 20px;
  }
`;
