import type { AppProps } from "next/app";
import GlobalStyles from "../ui/theme/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
