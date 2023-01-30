import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { Syne } from "@next/font/google";
import OGCard from "@/components/OgCard";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../../assets/Syne-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  try {
    const { searchParams } = new URL(req.url);

    const title =
      searchParams.get("title")?.slice(0, 100) ?? "My default title";
    const ogSubtitle = searchParams.get("ogSubtitle")?.slice(0, 200) ?? "";

    return new ImageResponse(<OGCard title={title} ogSubtitle={ogSubtitle} />, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Syne",
          data: fontData,
        },
      ],
    });
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
