import { memo, useCallback, useEffect, useMemo, useState } from "react";

function Lesson12() {
  const [user, setUser] = useState(null);

  const fetchData = useCallback(() => {
    console.log('fetchData');
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((resJson) => {
        setUser(resJson.results[0]);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <button onClick={fetchData}>Refresh</button>
      {user ? (
        <div>
          <img src={user.picture.medium} alt="" />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Lesson12;