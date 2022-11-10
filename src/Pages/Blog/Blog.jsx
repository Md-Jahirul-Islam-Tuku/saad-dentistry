import React from 'react';
import logo from '../../Assets/img/blog-logo.png'
import border from '../../Assets/img/title-icon.png'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog');
  return (
    <div className='pt-28 h-[100vh] px-3 md:px-10 lg:px-20'>
      <img className='mx-auto h-20' src={logo} alt="logo" />
      <img className='mx-auto h-5 mt-3 mb-10' src={border} alt="border" />
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content text-left">
          <hr />
          <p className='pt-2'>SQL stands for 'Structured Query Language'. It is the most common programming language used for executing queries, and handling data by using CRUD (create, read, update and delete) operation on a <strong>Relational Database Management System (RDMS)</strong> like <strong>MySQL, PostgreSQL</strong> etc.</p>
          <p>NoSQL stands for 'Not-Only SQL'. These types of databases are Non-Relational or non-tabular. A No-SQL database does not require a specific schema and hence is schema-less, and all the entries/documents are JSON documents. Examples - <strong>MongoDB, DynamoDB, Redis</strong> etc.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content text-left">
          <hr />
          <p className='pt-2'><strong>JWT</strong>, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each <strong>JWT</strong> contains encoded JSON objects, including a set of claims. <strong>JWT</strong>s are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
          <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
          <p>A <strong>JWT</strong> is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the <strong>JWT</strong> looks something like this: xxxxx.yyyyy.zzzzz.</p>
          <p>Once decoded, you will get two JSON strings:</p>
          <p>1. The <strong>header</strong> and the <strong>payload</strong>.</p>
          <p>2. The <strong>signature</strong>.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content text-left">
          <hr />
          <p className='pt-2'><strong>JavaScript</strong> is a proper high-level programming language used to create web scripts whereas <strong>Node.js</strong> is a run time environment built on google's v8 engine.</p>
          <p><strong>JavaScript</strong> is executed in the browser whereas using <strong>Node.js</strong> gives us the ability to execute <strong>JavaScript</strong> outside the browser.</p>
          <p><strong>JavaScript</strong> can manipulate DOM or add HTML within whereas <strong>Node.js</strong> doesn't have the capability to add HTML.</p>
          <p><strong>JavaScript</strong> is mainly used to create front end web applications or develop client-side whereas <strong>Node.js</strong> is used on the back end development that is server-side development</p>
          <p><strong>JavaScript</strong> follows the standard of <strong>JavaScript</strong> when writing programs whereas <strong>Node.js</strong> is written in C++ while using the v8 engine, it runs <strong>JavaScript</strong> outside the browser.</p>
          <p><strong>JavaScript</strong> requires any running environment as it can execute on any engine such as Firefox's spider monkey, v8 engine of google chrome, <strong>JavaScript</strong> core of Safari whereas <strong>Node.js</strong> runs only on the v8 engine of google chrome.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-bold">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content text-left">
          <hr />
          <p className='pt-2'><strong>NodeJS receives multiple client requests and places them into EventQueue.</strong> NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;