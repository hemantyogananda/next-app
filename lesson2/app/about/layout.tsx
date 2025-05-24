import React from 'react'
import styles from './styles.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About page - Next App",
  description: "About create next app",
};

export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
            <nav>About Navbar</nav>
            <main className={styles.main}>{children}</main>
        </>
  )
}

