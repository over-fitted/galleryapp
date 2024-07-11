import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  // Next Image tries to optimise by taking up predicted space, 
  // but we don't know the size of the image
  return (
    <div className="flex items-center justify-center h-full">
        <img src={image.url} alt={image.name} className="w-96 flex-shrink" />
        <div className="text-xl font-bold flex-shrink-0 ml-4">{image.name}</div>
    </div>
    
  );
}