import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='../logomain.png' className="App-logo" alt="logo" />

        <ul>
          <li>
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </li>
          <li><a href='#'>Sign In</a></li>
        </ul>

        <div className='clrdiv'></div>
      </header>

      <div className='banner'>
        <div className='content1'>
          <h1>Unlimited movies, TV shows and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>

          <form>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <input type='text' placeholder='Email Address' />
            <button type='submit'>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
