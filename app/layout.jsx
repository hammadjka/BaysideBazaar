import "./globals.css";
import Image from 'next/image'
import ticket from '../public/ticket.svg'
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
          <nav className="nav">
          <Image
            src={ticket}
            width={50}
            height={50}
            alt="Picture of the author"
          />
            <h1>Task Master</h1>
            <h4>Home</h4>
            <h4>Tickets</h4>
          </nav>
          {children}
        </body>
    </html>
  );
}
