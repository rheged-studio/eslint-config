type LoaderArgs = { request: Request };

export const loader = ({ request }: LoaderArgs) => {
  return new Response(request.url);
};

export const meta = () => {
  return [{ title: "Health" }];
};
