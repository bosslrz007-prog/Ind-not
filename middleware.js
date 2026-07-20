export const config = {
  // Ye rule main page (/) ke liye hai
  matcher: '/',
};

export default function middleware(request) {
  // Vercel se user ki country nikalna
  const country = request.headers.get('x-vercel-ip-country');

  // Agar user India (IN) se hai, toh usko block wala HTML page dikhao
  if (country === 'IN') {
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Denied</title>
        <style>
          body { 
            background: #000; 
            color: #ff3333; 
            font-family: 'Courier New', monospace; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0;
            text-align: center;
          }
          .alert { border: 2px solid #ff3333; padding: 30px; border-radius: 10px; }
        </style>
      </head>
      <body>
        <div class="alert">
          <h2>[ 403 FORBIDDEN ]</h2>
          <p>EXE System is currently restricted in your region.</p>
          <p>Please connect to a VPN to access this web interface.</p>
        </div>
      </body>
      </html>`,
      {
        status: 403,
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }

  // Agar dusri country se hai, toh Vercel normal index.html load kar dega
}
