//'./App.css'; styles anything that is displayed on the page at that time (other js components)
import Navbar from './Navbar';
import Home from './Home';

function App() {
    //you can output strings, numbers (int), arrays but not booleans and objects
    const title = "Whitney's blog";
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                {/*you can also output directly in the tags, see the exp below*/}
                {/*this is how you add comments in react jsx*/}
                {/*<p>{"Welcome to my blog"}</p>*/}
                <Home/>
            </div>
        </div>
    );
}

export default App;
