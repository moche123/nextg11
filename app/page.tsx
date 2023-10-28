import Image from "next/image";
// import setup from '@/public/setup.jpg';
import './globals.css';
import { blurData } from "./constant";
import { Suspense } from "react";
import { Banner, Loading } from "@/components/Banner";

export default function App() {
  const setup = "https://i.ytimg.com/vi/EwKXa657tVY/maxresdefault.jpg"
  return (
    <>
      <Image
        src={setup}
        alt="Logo"
        className="image"
        width={1200}
        height={800}
        blurDataURL={blurData}
        placeholder="blur"

      />
      <Suspense fallback={ <Loading /> }>
        
        <Banner data= { {index: 1} }></Banner>
      </Suspense>  

    </>
  )
}
