
import './App.css';

function App() {
    //you can output strings, numbers (int), arrays but not booleans and objects
    const title = "Whitney's blog";
  return (
    <div className="App">
      <div className="content">
          <h1>{ title }</h1>
          {/*you can also output directly in the tags, see the exp below*/}
          {/*this is how you add comments in react jsx*/}
          <p>{"Welcome to my blog"}</p>

      </div>
    </div>
  );
}

export default App;
