// we use these () for crating "routing groups" ... which are the nested folders but prevent from being included in the url path.


import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'


export const metadata: Metadata = {
    title: "Zoom by Yash",
    description: "Video Calling App",
    icons : {
      icon : '/icons/logo.svg'
    }
  };

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout