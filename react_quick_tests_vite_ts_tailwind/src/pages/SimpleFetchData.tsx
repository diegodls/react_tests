import { useEffect, useState } from "react";
import { RandomUser, RandomUserResults } from "../interfaces/RandomUser";

export function SimpleFetchData() {
  const [users, setUsers] = useState<RandomUserResults[]>();
  const [loading, setLoading] = useState<boolean>(true);

  function fetchData() {
    let isCurrentUrl: boolean = true;
    const url = "https://randomuser.me/api/?results=50";
    fetch(url)
      .then((response) => {
        if (response.status === 200 && isCurrentUrl) {
          return response.json();
        }
      })
      .then((response: RandomUser) => {
        console.log("results");
        console.log(response.results[0].name.first);
        setUsers(response.results);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      isCurrentUrl = false;
    };
  }

  useEffect(() => {
    console.log(
      `${"=".repeat(100)}> SimpleFetchData.tsx -> useEffect -> fetchData();`
    );

    fetchData();
  }, []);

  return (
    <div className='w-full h-full bg-red-600 flex items-center justify-center'>
      {loading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {users?.map((user) => (
            <li
              key={`${user.name.first}+${user.id.value}+${user.login.uuid}`}
              className='bg-neutral-600'
            >
              {user.name.first}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
