import styled from "@emotion/styled";

import { Navigation } from "../ui/header";

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
      <div>
        <Navigation />
        {children}
      </div>
    </Panel>
  );
};

export default AppLayout;
