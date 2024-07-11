import PageLayout from "@/src/app/\bcomponents/layout/subLayout";
import styled from "styled-components";

const PageHeader = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: aliceblue;
  mix-blend-mode: difference;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 6px;
    padding-top: 120px;
  }

  p {
    font-size: 18px;
    color: #bbbbbb;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150svh;
`;

const ContactPage = () => {
  return (
    <PageLayout>
      <Panel>
        <PageHeader>
          <h1>C. Page</h1>
        </PageHeader>
      </Panel>
    </PageLayout>
  );
};
export default ContactPage;
