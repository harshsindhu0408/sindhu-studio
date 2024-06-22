import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "admin@example.com",
            password: "password",
          }),
        });

        console.log("Response ->>>>", response);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          const text = await response.text();
          console.log("Unexpected response format:", text);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Panel Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default AdminPanel;
