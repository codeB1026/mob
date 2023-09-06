import '../styles/globals.css';
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      <Navbar />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
