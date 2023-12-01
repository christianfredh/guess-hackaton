import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {

  const res = await fetch("https://api.edenai.run/v2/image/generation", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "response_as_dict": true,
      "attributes_as_list": false,
      "show_original_response": false,
      "resolution": "256x256",
      "num_images": 1,
      "providers": 'openai',
      "text": request.nextUrl.searchParams.get("promt"),
    }),
  })

  const data = await res.json()
 
  return Response.json({ data })
}