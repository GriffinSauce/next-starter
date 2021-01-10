import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
