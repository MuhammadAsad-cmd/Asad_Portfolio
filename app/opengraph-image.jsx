import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Muhammad Asad — custom ERP, order management, and warehouse systems for multi-channel e-commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const proof = ["28+ ERP modules", "11 sales channels", "20+ integrations"];

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public/images/asadimg.png"),
  );
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 72px",
          background: "#1f1f24",
          color: "#ffffff",
        }}
      >
        <img
          src={photoSrc}
          width={300}
          height={300}
          style={{
            borderRadius: 9999,
            border: "6px solid #71b7fb",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#71b7fb" }}>Muhammad Asad</div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              lineHeight: 1.1,
              marginTop: 12,
            }}
          >
            Custom ERP & Operations Systems
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#b5bac1",
              marginTop: 20,
              lineHeight: 1.4,
            }}
          >
            Orders, inventory, and warehouse software for Shopify, Walmart, and
            Amazon sellers. Node.js · Next.js
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
            {proof.map((item) => (
              <div
                key={item}
                style={{
                  fontSize: 22,
                  padding: "8px 18px",
                  borderRadius: 10,
                  background: "#2b2d31",
                  color: "#ffffff",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, color: "#71b7fb", marginTop: 32 }}>
            masadali.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
