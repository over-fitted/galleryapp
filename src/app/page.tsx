import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

// prevents caching from showing stale data
export const dynamic = "force-dynamic"

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="h-48 w-48 flex flex-col p-4">
          <Link href={`/img/${image.id}`}>
            <Image 
              src={image.url} 
              alt={image.name} 
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              className="rounded-lg" 
            />
          </Link>
          <div className="text-wrap break-words">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl p-4 text-center">Please Sign In.</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
