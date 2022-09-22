import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from './component/About';
import Services from './component/Services';
import ContactUs from './component/ContactUs'
import NoPage from "./component/NoPage";
import styles from "./component/myStyle.module.css"
// fucntion outside App fucntion
function MyForm() {
  // here we generally give initial value
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [textArea, setTextArea] = useState(
    "Write your content whatever  you want to write"
  );
  const [place, setPlace] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `your name is ${username} and your age is ${age} and the content in textArea is ${textArea}`
    );
  };

  return (
    <>
      <h2>let's learn how to add a form in the react component</h2>
      <form action="#" onSubmit={handleSubmit}>
        <h3>Enter your Name:</h3>
        <input
          type="text"
          value={username}
          // onChange={(e) => setUserName(e.target.value)}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <h3>Enter your Age:</h3>
        <input
          type="number"
          value={age}
          // onChange={(e) => setUserName(e.target.value)}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <select
          value={place}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        >
          <option value="jaunpur" selected>
            Jaunpur
          </option>
          <option value="Varanashi">Varanashi</option>
          <option value="Balia">Balia</option>
        </select>
        <h3>Enter the Description</h3>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
        <input type="submit" value="Submit it" />
      </form>
    </>
  );
}
function App(props) {
  const fire = () => {
    alert("you are on the fire");
  };

  //function inside app function
  function Car(props) {
    return <li>Today's word are{props.brand}</li>;
  }
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  })
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
  const myStyle={
    color:"white",
    backgroundColor:"black"
  }
  const arr = ["sore throat", "disgusting", "adapt", "adopt", "poison"];
  const [count, setCount] = useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setCount((count)=>count+1);
    }, 1000);
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home111" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
      <div className="App">
        <ul>
          <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link to='/services'>
            Services
          </Link>
        </li>
        <li>
          <Link to='/contactUs'>
            Contact Us
          </Link>
        </li>
        </ul>
        <h2>ReactJs Important point</h2>
        <ol>
          <h4>Render function</h4>
          <li>
            The ReactDOM.render() function takes two arguments ,HTML code and
            HTML element{" "}
          </li>
          <li>
            render() function takes only one HTML code i.e. it doesn't take
            mutliple JSX
          </li>
          <li>
            if you want to render more than one jsx , you wrap it all the jsx in
            single angular braces
          </li>
          <h4>JSX function</h4>
          <li>
            JSX make easier to write and add HTML in React and it converts html
            tags into react elements
          </li>
          <li>
            JSX allows us to write HTML elements in JavaScript and place them in
            the DOM without any createElement() and/or appendChild() methods.
          </li>
          <h4>React Components</h4>
          <li>
            There are mainly two react component : function component and Class
            component
          </li>
          <li>it is now suggested to use function components with hooks</li>
          <li>
            While creating react componets , components name must be start with
            UpperCase
          </li>
          <h4>{props.heading}</h4>
          <li>
            props are stands for property,props are passed into React components
            via HTML attributes
          </li>
          <li>
            React props like function argument in {props.lang} and Attributes in
            HTML
          </li>
          <li>
            e.g. argument is "props", attributes are declared in JSX like
            (props.heading) in curly braces and "heading" are treated as
            attribute of that function component
          </li>
          <li>
            you can add mutliple props like props.heading , props.lang and
            whatever you want
          </li>
          <h4>React events</h4>
          <li>React events are written in camelCase</li>
          <li>React event handlers are written inside curly braces</li>
          <li>e.g. onClick=(fire)in curly braces</li>
          <button onClick={fire}>fire button</button>
          <li>you should define the function above the return statement.</li>
          <li>function should be arrow fucntion</li>
          <li>we can add JavaScript expression in JSX using curly braces</li>
          <h6>problem to include conditional statement in jsx</h6>
          <li>
            you can't add curly braces inside curly braces , then you should use
            (and operator) after conditions
          </li>
          <li>
            another all known ways is ternary opertor using ternary opertor
            conditions can be added any where.
          </li>
          <li>whenever you want to add JavaScript use curly braces</li>
          <li>you can add mutliple fucntions with signle component</li>
          <h4>React lists</h4>
          <li>use map function to render array elements </li>
          <li>key and value pair is important </li>
          {arr.map((val) => (
            <Car brand={val} />
          ))}
          <h4>Forms in React</h4>
          <li>
            write a fucntion for form and add that fucntion in the App.js{" "}
          </li>
          <MyForm />
          <li>
            as we can see page reload after submitting the form, which we never
            want in the react application
          </li>
          <h4>Handling forms</h4>
          <li>Manage using useState function and attribut onChange </li>
          <h5>useState</h5>
          <li>apply useState at the beginning of return statement</li>

          <h4>React router</h4>
          <li>We wrap all the content in the browerRoute</li>
          <li>
            A app can have mutliple route that's why all the route are wrap in
            the routes
          </li>
          <li>Route can be nested</li>
          <li>Index attribut specifies that it has parent root which is /</li>
          <li>path = * catch all the undefined values</li>
          <h4>Page Components</h4>
          <li>use link to insted of a href</li>
          <li>it is very important to wrap all the content in the BrowserRouter</li>
          <h4>React memo</h4>
          <li>it prevent the effect of re-endering the page again and again</li>
          <h4>React CSS Styling</h4>
          <li><h5>Inline CSS</h5></li>
          <li style={{color:"red"}}>add attribute style as usual and assign a JavaScript with two curly braces</li>
          <li style={{backgroundColor:"yellow"}}>Css property like backGround-Color must be written in the capital letter</li>
          <li style={myStyle}>actually, here style attribute is taking a object .Hence you can assign object to the style attribute</li>
          <li id="css1">as we know , we can use App.css file for the style</li>
          <h4>React CSS Modules</h4>
          <li className={styles.cssModule}>CSS module is more convinient for the add css for that you have create a file with extention .module.css and write css in that file and then import css and use any semantic tag with attribute classname with value imported_file_name.required css</li>
        </ol>
        <ol>
           <h3>React Hooks</h3>
           <li>Hooks can only define inside the funtion component</li>
           <li>it is generally define at the top of the function and can't be conditional</li>
           <h3>UseState</h3>
           <li>first we import useState from the react</li>
           <li>then we initialize the useState</li>
           <li>let Name and SetName in the state</li>
           <li>we destructure the return value of setState</li>
           <li>and second , setName is the function which update or set state</li>
           <li>setName takes a value it is generally defined in the function</li>
           <li>fundtion useState can take object ,array, boolean.......</li>
           <li>my car is {car.brand} and color is {car.color}</li>
           <button onClick={updateColor}>Change Color</button>
           <li>setCar will return that data type which are in the useState</li>
           <li>if we want to change only color it can chage whole JavaScript object, that's why we are using here spread opertor.</li>
           <h4>useEffect</h4>
           <li>UseState takes two argument first is function and second is optional</li>
           <li>it is used to fetching data, directly updating the DOM, and timers.</li>
           <li>I am rendering {count} times by useeffect hooks</li>
           <li>we add dependencies as an array if value of element inside array changed the useeffect will execute again</li>
           <h4>useContext</h4>
           <li>it solve the problem of again and again transfer of props</li>
           <h5>Create Context</h5>
           <li>createContext function is used to intialized context element</li>
           <li>userContext = createContext()"</li>
           <h5>Context Provider</h5>
           <li>then we will wrap all the child componet and supply the state value</li>
           <li>wrap data in userContext.provider</li>
           <h5>useContext</h5>
           <li>user =userContext inside useContext </li>
        </ol>
      </div>
    </BrowserRouter>
  );
}

export default App;
