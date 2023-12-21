import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "ThoughtFlix",
  description:
    "ThoughtFlix : A platform designed to amplify the voices of brilliant minds, fostering a community where thoughts are shared, celebrated, and explored",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
