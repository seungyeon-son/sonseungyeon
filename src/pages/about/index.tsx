import styled from "styled-components";

import PageLayout from "@/app/\bcomponents/layout/subLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <Panel>
        <PageHeader>
          <h1>A. Page</h1>
        </PageHeader>
      </Panel>
    </PageLayout>
  );
};
export default AboutPage;

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
