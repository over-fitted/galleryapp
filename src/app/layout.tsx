import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { TopNav } from "./_component/topnav";

import { GeistSans } from "geist/font/sans";
import { UploadButton } from "~/utils/uploadthing";

export const metadata = {
  title: "Gallery App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (  
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
        {modal}
        <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}