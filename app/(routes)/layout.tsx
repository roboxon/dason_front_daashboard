import "./globals.css";
import { ReduxProvider } from "../redux/provider";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ToastifayContainer from "../layout/ToastifayContainer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html data-theme={"emerald"}>
      <body>
        <ToastifayContainer>
          <ReduxProvider>
            <main className="min-h-[100vh] flex flex-col justify-between">
              <Header />
              {children}
              <Footer />
            </main>
          </ReduxProvider>
        </ToastifayContainer>
      </body>
    </html>
  );
}
