import { SignedOut, SignedIn } from "@clerk/nextjs";
import { db } from "../server/db";

// prevents caching from showing stale data
export const dynamic = "force-dynamic"

async function Images() {
  const images = await db.query.images.findMany({
    orderBy:(model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
          <div>{image.name}</div>
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
