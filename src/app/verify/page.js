'use client'

import Image from "next/image";
import { useSelector } from "react-redux";

export default function Verify() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
        <h1>This is to Verify the 'count' state persists on every page</h1>
        <p>The current count is {count}</p>
    </div>
  );
}
