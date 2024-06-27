import Navigation from "@/app/\bcomponents/ui/Header";
import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import Panel from "@/app/\bcomponents/layout/Layout";
import AppLayout from "@/app/\bcomponents/layout/Layout";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import { NextPage } from "next";
import { Children, ReactElement, ReactNode } from "react";
import Header from "@/app/\bcomponents/ui/Header";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <AppLayout>
//       {/* <PageLayout> */}
//       <Navigation />
//       {/* </PageLayout> */}
//       <Component {...pageProps} />
//     </AppLayout>
//   );
// }

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
/*
    NextPageWithLayout으로 Page의 타입을 지정하면,
    getLayout 속성함수를 사용할 수 있게된다. (사용해도 되고 안해도 되고 )
  */
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}; // 기존 AppProps타입에 Layout을 추가한 것.

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // 페이지 단위에서 정의한 레이아웃이 있다면 해당 레이아웃을 적용한다.
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AppLayout>
      <Header />
      <PageLayout children={true} />
      <Component {...pageProps} />
    </AppLayout>,
  );
}
