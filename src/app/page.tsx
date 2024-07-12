import { Folder } from "lucide-react";
import Image from "next/image";
import Section from "@/components/sections";
import ItemCard from "@/components/itemCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title="Projects" icon={<Folder/>}>
        
          <ItemCard title={"portfolio"}
            image={"./nextjs-logo.jpg"}
          description={"xyz"}
          tags={["Next.js", "Shadcn/ui", "Tailwind", "React"]}
            href={"/projects/portfoli"}
           />
        
      </Section>
    </main>
  );
}
