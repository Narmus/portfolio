import "../styles/GlobalStyles.scss";
import "../pages/Components/HeaderAndFooterComponent/HeaderAndFooterComponent.scss";
import "../pages/Containers/HomePage/views/HomePageDisplay.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
