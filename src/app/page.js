import Image from 'next/image'
import {allBlogs} from "contentlayer/generated"
import HomeCoverSection from '@/components/Home/HomeCoverSection'
export default function Home() {
  return (
    <main className="">
      <HomeCoverSection blogs={allBlogs}/>
    </main>
  )
}
