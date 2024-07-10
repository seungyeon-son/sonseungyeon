import styled from "@emotion/styled";

const Panel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    width: 100%;
  }
`;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Panel>
      <div>{children}</div>
    </Panel>
  );
};

export default AppLayout;
