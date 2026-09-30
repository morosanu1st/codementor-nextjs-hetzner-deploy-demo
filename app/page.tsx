export default function Home() {
  return (
    <main>
      <h1>Next.js 15 → Hetzner Ubuntu</h1>
      <p>
        Sample App Router app used in a Codementor deploy walkthrough: Node LTS on Ubuntu,
        <code> next build </code> standalone output, Nginx reverse proxy, systemd service, and Let&apos;s Encrypt TLS.
      </p>
      <ul>
        <li>Build: <code>npm run build</code></li>
        <li>Prod: <code>node .next/standalone/server.js</code> (or systemd unit in <code>deploy/</code>)</li>
        <li>Proxy: Nginx config in <code>deploy/nginx-nextjs.conf</code></li>
      </ul>
    </main>
  );
}
