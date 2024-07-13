import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const userInfo = await clerkClient.users.getUser(image.userId);
  // Next Image tries to optimise by taking up predicted space, 
  // but we don't know the size of the image
  return (
    <div className="flex items-center justify-center">
        <div className="w-96 h-max flex-shrink-1">
            <img src={image.url} alt={image.name} className="object-cover" />
        </div>

        <div className="p-2 flex flex-col flex-shrink-0 ml-4">
            <div className="p-2 border-b px-2 text-center text-lg">{image.name}</div>
            <div className="p-2 flex flex-col">
                <span>Uploaded By:</span>
                <span>{userInfo.firstName}</span>
            </div>
            
            <div className="px-2 flex flex-col">
                <span>Uploaded On:</span>
                <span>{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    </div>
    
  );
}