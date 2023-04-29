export default async function getUser(userId: string) {
  const uri = process.env.NEXT_PUBLIC_APOLLO_SERVER_URI || "";

  const resp = await fetch(uri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query {
        user(id: "${userId}") {
          id
          name
          email
          image
          userType
        }
      }
    `,
    }),
  });

  return resp.json();
}
