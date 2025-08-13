const makePostReuest = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    //in client side remove process.env.NEXT_URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John" }),
  });

  const data = await res.json();
  return { data };
};
const Friend = async () => {
  const { data } = await makePostReuest();
  return (
    <div>
      <h1>heyy friends, {data.message}</h1>
    </div>
  );
};

export default Friend;
