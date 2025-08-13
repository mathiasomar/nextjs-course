import { notFound } from "next/navigation";

const UserPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const fetchData = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      return null;
    }

    const user = await res.json();
    return user;
  };
  const { userId } = await params;
  const user = await fetchData(userId);

  if (!user) {
    notFound();
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.website}
        </a>
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserPage;
