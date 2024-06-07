import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/5eb17b95-bd15-490a-ab1b-9a9803d15638-7fdasi.jpg",
  "https://utfs.io/f/58dae943-9ea6-443a-b30b-79e6bcbf925c-ai8cqd.jpg",
  "https://utfs.io/f/864ed8de-d155-488f-af90-22c7f51b4dd0-941sxj.MP.jpg"
]

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }</div>
    </main>
  );
}
