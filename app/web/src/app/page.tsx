'use client';

import {Button} from "@my-repo/ui";

export default function Home() {
  return (
   <>
      <h1>Button</h1>
     <Button onClick={() => alert("click")}>Click me</Button>
   </>
  );
}
