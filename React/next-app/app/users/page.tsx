import React from "react";

interface User {
  id: number;
  name: string;
}

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await res.json();

  return (
    <>
      <h1 className="text-3xl font-bold">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul className="">
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default page;
