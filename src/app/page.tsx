export default async function Home() {
  const promptApi: string = await fetch(process.env.URL + "/api/prompt")
    .then((res) => res.json())
    .then((data) => data.prompt);

  const base64image: string = await fetch(
    process.env.URL + "/api/image?prompt=" + encodeURIComponent(promptApi)
  )
    .then((res) => res.json())
    .then((data) => data?.data?.openai?.items[0]?.image);

  console.log(promptApi);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        {base64image ? (
          <img src={`data:image/png;base64,${base64image}`} />
        ) : (
          ""
        )}
      </div>
    </main>
  );
}
