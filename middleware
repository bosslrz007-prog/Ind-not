export const config = {
  // Ye rule main page (/) ke liye hai
  matcher: '/',
};

export default function middleware(request) {
  // Vercel se user ki country nikalna
  const country = request.headers.get('x-vercel-ip-country');

  // Agar user India (IN) se hai, toh usko simple API style page dikhao
  if (country === 'IN') {
    return new Response(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>403 Forbidden</title>
        <style>
          body { 
            background-color: #ffffff; /* Pura white background */
            color: #000000; /* Black text */
            font-family: monospace; /* API jaisa raw text font */
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100vh; 
            margin: 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div>{"error": true, "status": 403, "message": "Access Denied in your region"}</div>
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
