
import React from "react";
import Search from "./search";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



const App = () => {
const sampleData = [
  "A/B Testing is a method of comparing two versions of a webpage or app against each other to determine which performs better.",
  "AJAX allows web applications to send and retrieve data from a server asynchronously, improving user experience by not requiring page reloads.",
  "API (Application Programming Interface) is a set of rules that allow different applications to interact, enabling data exchange and functionality integration.",
  "Arrays are data structures that store multiple values in a single variable, allowing for efficient data management.",
  "Accessibility in web design ensures that all users, including those with disabilities, can access and use web content effectively.",
  "Backend refers to the server-side part of a web application that handles data storage, processing, and business logic.",
  "Big Data refers to large volumes of data that can be analyzed to reveal patterns, trends, and associations.",
  "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
  "CSS Flexbox is a layout model that allows for responsive design and alignment of elements in a flexible and efficient way.",
  "DevOps practices facilitate collaboration between development and operations teams to improve software delivery speed and quality.",
  "Documentation is a critical part of software development, providing information about code and how to use it.",
  "Frontend refers to the client-side part of a web application that users interact with directly.",
  "Git is a version control system that tracks changes in source code during software development.",
  "HTML (HyperText Markup Language) is the standard markup language for creating web pages, used for structuring content on the web.",
  "JavaScript is a scripting language that enables dynamic content and interactive elements on websites.",
  "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write.",
  "Libraries are collections of pre-written code that developers can use to optimize development and streamline tasks.",
  "Microservices is an architectural style that structures an application as a collection of loosely coupled services.",
  "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server-side.",
  "Open Source refers to software with source code that anyone can inspect, modify, and enhance.",
  "Performance Optimization involves improving the speed and efficiency of a web application.",
  "Queries are requests for data or information from a database, often written in SQL.",
  "Responsive Design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
  "SEO (Search Engine Optimization) is the practice of optimizing web pages to rank higher in search engine results.",
  "Testing frameworks are tools that help automate the testing of code to ensure it behaves as expected.",
  "User Experience (UX) refers to the overall experience a user has when interacting with a product, particularly in terms of how easy or pleasing it is to use.",
  "Version Control systems are tools that help manage changes to source code over time, allowing multiple developers to work together.",
  "Web Development encompasses the tasks involved in developing a website for the Internet or an intranet.",
  "XML (eXtensible Markup Language) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
];



  return (
    <div className="px-4 mt-5">
      <h1 style={{ fontWeight: "bold" }}>Search </h1>
      <Search data={sampleData} />
    </div>
  );
};

export default App;
