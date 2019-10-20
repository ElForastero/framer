import styled from 'styled-components';

const Item = styled.div`
  color: ${props => props.theme.font.primary};
  display: flex;
  align-items: center;
  height: 35px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default Item;
