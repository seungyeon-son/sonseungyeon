import AppLayout from "@/app/\bcomponents/layout/Layout";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import styled from "@emotion/styled";

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

const PageHeader = styled.div`
  padding: 208px 0 128px;
  text-align: center;
  color: aliceblue;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 6px;
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
