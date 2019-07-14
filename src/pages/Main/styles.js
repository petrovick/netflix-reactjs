import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px 100%;
  background-repeat: no-repeat;
  background-position: top;

  flex-direction: column;
  overflow-x: auto;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 20px;
`;

export const TextMinhaLista = styled.label`
  color: #f5f;
`;
