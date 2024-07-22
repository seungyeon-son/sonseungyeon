import styled, { css } from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1em;
  min-width: 80px;
  height: 52px;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const CardHeader = styled.div``;
export const CardContent = styled.div``;
export const CardFooter = styled.div``;

const Cards = () => {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="bg-muted p-4">
        <div className="flex items-center gap-2">
          <div className="aspect-square w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
            {/* <CodeIcon className="h-5 w-5" /> */}
          </div>
          <div className="font-medium">Acme Web App</div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">
          Developed a comprehensive web application for Acme Inc, featuring a modern UI, robust backend, and seamless
          integration with various third-party services.
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex items-center gap-2">
          {/* <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" /> */}
          <span className="text-sm text-muted-foreground">2019 - 2021</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card;
