import "./globals.css";
import Providers from "@/components/Providers";
import FontProvider from "@/components/FontProvider";
import Navbar from "@/components/Navbar"; // client-only
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
     <html lang="en"> 
      <body data-theme="light" >
        {/* //className="antialiased" */}
        <Providers>
          <FontProvider>
            <Navbar />
            <div className="min-h-screen">

              {children}
            </div>
            <Footer />
          </FontProvider>
        </Providers>
      </body>
    </html>
  );
}
