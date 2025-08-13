import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and what we do.",
  keywords: ["about", "company", "information"],
  authors: [{ name: "Omar Mathias", url: "https://example.com" }],
};

const About = () => {
  console.log("Hey is this on the server or client?");
  return (
    <div>
      <h1>About Us</h1>
      <p>
        We are a company dedicated to providing the best services to our
        customers.
      </p>
    </div>
  );
};

export default About;
