import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        <div
          style={{
            minHeight: "100dvh",
            display: "grid",
            placeItems: "center",
            background: "#0b1220",
          }}
        >
          <div style={{ display: "grid", justifyItems: "center", gap: 12 }}>
            <img
              src="/window.svg"
              alt="Site em desenvolvimento"
              style={{ width: 160, opacity: 0.9 }}
            />
            <p style={{ color: "#e2e8f0", margin: 0, fontSize: 16 }}>
              Site em Desenvolvimento            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
