import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/constants";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title =
      searchParams.get("title")?.slice(0, 100) ?? "My default title";
    const description =
      searchParams.get("description")?.slice(0, 200) ?? "By Paolo Calzone";
    const backgroundColor = searchParams.get("backgroundColor") ?? "white";
    const textColor = searchParams.get("textColor") ?? "black";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundSize: "150px 150px",
            backgroundColor: backgroundColor,
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <img
              alt={title}
              src={`${SITE_URL}/avatar.png`}
              style={{ margin: "0 30px", borderRadius: "50%" }}
              width={128}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              fontWeight: 800,

              color: textColor,
              marginTop: 30,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
