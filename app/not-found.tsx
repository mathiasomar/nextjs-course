import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "8rem", color: "#ff6347" }}>404 - Not Found</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" style={{ color: "#42ffca" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
