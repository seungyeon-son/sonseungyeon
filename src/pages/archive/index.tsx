import AppLayout from "@/app/\bcomponents/layout/Layout";
import styled from "@emotion/styled";

const ArchivePage = () => {
  return (
    <AppLayout>
      <h1>Archiving Works.</h1>
      <Panel></Panel>
    </AppLayout>
  );
};
export default ArchivePage;

const Panel = styled.div`
  background: #fff;
`;
