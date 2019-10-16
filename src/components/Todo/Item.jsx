import styled from 'styled-components';

const Item = styled.div`
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
  color: ${props => props.theme.font.primary};
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default Item;
