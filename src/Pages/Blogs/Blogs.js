import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300  bg-gray-800 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What are the different ways to manage a state in a React application?
  </div>
  <div className="collapse-content bg-black"> 
    <p>The ways of managing a state in react application are:</p>
    <p>1. URL <br /> 2. Web Storage <br /> 3. Local State <br /> 4. Lifted State <br />5. Derived State </p>
  </div>
</div>
<div tabIndex={1} className="collapse collapse-arrow border border-base-300  bg-gray-800 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does prototypical inheritance work?
  </div>
  <div className="collapse-content bg-black"> 
    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
  </div>
</div>
<div tabIndex={2} className="collapse collapse-arrow border border-base-300  bg-gray-800 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is a unit test? Why should we write unit tests?
  </div>
  <div className="collapse-content bg-black"> 
    <p>Unit Testing is a type of software testing where individual units or components of a software are tested.
    <br />
    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. Thats why we should write it.</p>
  </div>
</div>
<div tabIndex={3} className="collapse collapse-arrow border border-base-300  bg-gray-800 rounded-box">
  <div className="collapse-title text-xl font-medium">
  React vs. Angular vs. Vue?
  </div>
  <div className="collapse-content bg-black"> 
    <p><strong>Angular vs React</strong><br />
    If the choice you are making is based on Angular vs React alone, then you will simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.
<br />
React often requires extra modules and components, which keeps the core library small, but means theres extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that does not require extras like React often does, though it does have a steeper learning curve for its core compared to React.
</p>
<p>
<strong>  React vs Vue</strong> 
<br />
The choice between React vs Vue is often debated and its not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there is no sign that React is on the decline either.
<br />
Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
    
    
</p>
<p>
    <strong>Angular vs Vue</strong> <br />
    In most cases, you probably would not be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.
<br />
A large library like Angular would require more diligence in keeping up with what is new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
</p>
  </div>
</div>
        </div>
    );
};

export default Blogs;