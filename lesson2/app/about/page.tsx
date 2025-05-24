import Link from "next/link";
import React from "react";

function About() {
  // throw new Error("Error in About page");
  return (
    <>
      <h1>page is About</h1>
      <Link href="/">Go to Home</Link>
    </>
  );
}

export default About;
