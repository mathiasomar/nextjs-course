import Button from "./button";

const Contact = async () => {
  console.log("Hey is this on the server or client?");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feel free to reach out to us at
        contact@ourcompany.com.
      </p>

      <Button />
    </div>
  );
};

export default Contact;
