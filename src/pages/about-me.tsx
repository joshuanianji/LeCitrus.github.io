import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SubHeader from "../components/subheader"
import Blog from "../components/Blog"
import {Card, Center, Text} from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/react";

const startrails = `My latest photography focus has been photographing star trails! I've always loved having night scenery desktop backgrounds.`
const housecleaning = `I was jobless and sad in the Summer of 2023, so I decided to take on a doomed task: 
cleaning my basement. Asian household basements are like Smaug's lair, except everything is mostly musty cardboard boxes,
expired hand sanitizer, and ancient relics. You would think cleaning is just tedious and that there is no skill involved, but
after 3 months of suffering, I beg to differ. There is an art to house cleaning. The urge to clean my basement started when
I was trying to handstand surrounded by old furniture. I ended up smashing my toe into the corner of a couch. 
My first thought when it came to cleaning was get rid of everything that we don't use. It's literally impossible to "clean" 
when there is no space to reorganize things. Unfortunately, this is not my basement, this is OUR basement (our being my family). `
const HandStand = createIcon({
  displayName: "HandstandIcon",
	viewBox: "0 0 441.342 441.342",
  path: (
  <>
	<path fill="white" d="M221.987,331.21c-24.448,0-44.338,19.89-44.338,44.338c0,24.447,19.89,44.337,44.338,44.337
		c24.447,0,44.337-19.89,44.337-44.337C266.324,351.1,246.434,331.21,221.987,331.21z"/>
	<path fill="white" d="M287.061,191.745c1.641-2.459,3.993-6.445,5.354-9.074l81.404-157.12c1.407-2.718,1.413-5.595,0.016-7.891
		c-1.039-1.71-2.728-2.877-4.793-3.379l1.212-2.79c1.206-2.758,1.049-5.638-0.432-7.902C368.331,1.309,365.726,0,362.676,0h-16
		c-4.815,0-9.688,3.146-11.59,7.494L332.26,14h-3.715c-4.648,0-9.616,2.818-11.814,6.701l-89.076,157.485
		c-0.47,0.831-2.155,1.813-3.109,1.813h-7.735c-0.911,0-2.626-1.052-3.11-1.909L124.623,20.75c-2.212-3.911-7.18-6.75-11.813-6.75
		h-1.716l-2.831-6.519C106.365,3.146,101.493,0,96.676,0h-16c-2.996,0-5.601,1.279-7.146,3.51c-1.532,2.213-1.816,5.067-0.783,7.822
		l1.012,2.717c-2.717,0.236-4.961,1.514-6.24,3.602c-1.402,2.292-1.408,5.167-0.017,7.89l80.445,157.189
		c1.294,2.528,3.641,6.51,5.346,9.063l18.538,27.763v74.434l-30.576,34.505c-4.224,4.768-8.496,13.397-9.726,19.647l-15.156,77.08
		c-0.789,4.017,0.148,8.063,2.572,11.101c2.425,3.037,6.161,4.849,10.25,4.971l1.337,0.04c0.153,0.004,0.306,0.007,0.459,0.007
		c7.614,0,15.147-5.724,17.15-13.031l18.598-67.854c1.249-4.556,5.056-11.685,8.146-15.255L195.832,321h52.309l20.946,24.201
		c3.093,3.574,6.915,10.705,8.178,15.261l18.541,66.871c2.058,7.422,9.702,13.339,17.403,13.472l1.59,0.025c0.001,0,0.001,0,0.001,0
		c4.072,0,7.796-1.689,10.219-4.633c2.43-2.954,3.37-6.953,2.58-10.975l-15.156-77.079c-1.229-6.25-5.502-14.88-9.726-19.647
		l-33.028-37.272c-0.567-0.64-1.198-1.209-1.857-1.738v-68.917L287.061,191.745z M156.851,178.176L77.949,24h34.86
		c1.094,0,2.704,0.957,3.109,1.674l89.076,157.341c2.252,3.982,7.331,6.985,11.814,6.985h7.735c4.589,0,9.558-2.898,11.814-6.891
		l89.075-157.483c0.394-0.695,2.003-1.626,3.11-1.626h34.813l-79.823,154.071c-1.178,2.275-3.373,5.997-4.792,8.124
		c0,0-18.033,32.805-22.911,32.805h-72c-4.649,0-22.221-32.758-22.221-32.758C160.138,184.035,157.959,180.342,156.851,178.176z"/>
  </>
  ),
})

const About = () => {
  return (
  <div>
    <div className="App">
      <Header title="About me"/>
    </div>
    <NavBar/>
    <Center>
      <Card borderRadius='lg' bg="black" p={10} borderColor="white" variant="outline">
        <Text>I am in my 4th year of a Specialization CS degree - Business Minor at the University of Alberta.</Text>
      </Card>
    </Center>
    <SubHeader title="What am I learning right now?"/>
    <Center>
      <Card borderRadius='lg' bg="black" p={10} borderColor="white" variant="outline">
          <ul>
            <li>Mobile app development using <strong>Flutter</strong></li>
            <li>UI/UX Designing using <strong>Figma</strong></li>
            <li>Learning how to handstand! <HandStand/></li>
            <li>Relearning the piano and violin, learning the drums</li>
          </ul>
      </Card>
    </Center>
    <SubHeader title="Blog"/>
    <Blog title="Startrails" content={startrails}></Blog>
    <Blog title="House cleaning" content={housecleaning}></Blog>
  </div>
  );
};
  
export default About;