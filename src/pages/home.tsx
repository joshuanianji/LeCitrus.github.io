import NavBar from '../components/NavBar';
import {Button, useColorMode, ColorModeScript, useTheme, Link, Text, VStack} from "@chakra-ui/react";
import Header from '../components/Header';
import Resume from '../images/resume.jpg';
import ImageComponent from '../components/ImageComponent';
import {useState, useEffect} from 'react';

const Home = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    const theme = useTheme();
    const [count, setCount] = useState(0);

    useEffect(() => {
      const initialValue = localStorage.getItem("count");
      if (initialValue) setCount(Number(initialValue));
    }, []);

    function increment() {
      setCount(prev_count => {
        const newCount = prev_count + 1;
        localStorage.setItem("count", String(newCount));
        return newCount;
      });

    }
    
    return (
    <div>
    <div className="App">
      <Header title="Curtis Kan"/>
    </div>
    <div className="Navbar">
      <NavBar/>
    </div>
    <VStack>
        <Text fontSize='5xl'>Welcome!</Text>
        <Link href="https://github.com/LeCitrus">Github</Link>
        <Link href="https://www.linkedin.com/in/curtis-kan-33446a1b3/">Linkedin</Link>
        <Link href="mailto:curtis.tl.kan@gmail.com">Gmail</Link>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Button size='md' onClick={toggleColorMode} _hover={{size: '5xl'}}>
          {colorMode === "light" ? "Whimsical" : "Silliness"}
        </Button>
        <Button onClick={() => increment()}>Cookie clicker</Button>
        <Text>{count}</Text>
        <ImageComponent src={Resume} title="Resume" description = ""></ImageComponent>
    </VStack>
    </div>
    );
  };
    
  export default Home;