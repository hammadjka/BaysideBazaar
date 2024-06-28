import "./globals.css";
import Navbar from "./navbar"
import { CartProvider } from './cartContext';

export const metadata = {
  title: "Baysize Bazaar",
  description: "A Project For Resemble.AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <CartProvider>
            <Navbar></Navbar>
            {children}
          </CartProvider>

        </body>
    </html>
  );
}
