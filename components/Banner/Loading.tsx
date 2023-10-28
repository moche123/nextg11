import Image from "next/image"
import loading from "@/public/loadinggif.gif"

function Loading() {
  return (
    <div>
        <Image 
            src={loading}
            alt="Loading"
            width={50}
        />
    </div>
  )
}

export default Loading