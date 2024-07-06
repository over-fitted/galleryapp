import { getImage } from "~/server/queries";

export default async function ImageModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(imageId);

  const image = await getImage(parseInt(imageId));
  return <div>
    <img src={image.url} alt={image.name} className="w-96" />    
  </div>;
}