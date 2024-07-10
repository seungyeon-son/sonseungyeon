import styled from "@emotion/styled";

const Centering = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  background: linear-gradient(#0f172a 70%, #2a3858 100%);
`;

const FixedWidth = styled.div`
  width: 1280px;
  height: 100%;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Centering>
      <FixedWidth>{children}</FixedWidth>
    </Centering>
  );
};
export default PageLayout;
