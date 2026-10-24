type LoaderArgs = { request: Request };

export const loader = ({ request }: LoaderArgs) => {
  return new Response(request.url, {
    headers: { "Content-Type": "application/xml" },
  });
};
