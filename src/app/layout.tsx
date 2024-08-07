import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { TopNav } from "./_component/topnav";

import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

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
    <CSPostHogProvider>
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable} dark`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
    </CSPostHogProvider>
    </ClerkProvider>
  );
}