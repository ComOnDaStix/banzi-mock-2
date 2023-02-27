import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import ContentTwo from "./components/ContentTwo";
import ContentThree from "./components/ContentThree";
import ContentFour from "./components/ContentFour";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      <Content/>
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <Footer />
    </div>
  );
}

export default App;
