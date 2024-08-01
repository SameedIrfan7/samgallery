import Link from "next/link";
import { mock } from "node:test";
const mockUrls=[
  "https://utfs.io/f/f2f3fa77-cf2f-4409-93dc-9d303f5f884f-f1lq4b.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

  
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image)=>(
          <div key={image.id} className="w-1/3 p-2">
            <img src={image.url} alt="image" className="w-full h-auto" />
      </div>
        ))}
        </div>
      Hello Sam gallery
    </main>
  );
}
