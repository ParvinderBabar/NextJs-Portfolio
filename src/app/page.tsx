import { Folder } from "lucide-react";
import Image from "next/image";
import Section from "@/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title="Projects" icon={<Folder/>}>
        <div>
          <ItemCard title={"portfolio"} image={"./next-js_1"}
          description={"xyz"}
          tags={["Next.js", "Shadcn/ui", "Tailwind", "React"]}
            href={"/projects/portfoli"}
           />
        </div>
      </Section>
    </main>
  );
}
