import React from 'react';
import Anime from 'react-anime';
//import './grid.css';


const App = (props) => (           

        <div className='row'> 
            <Anime 
            delay={(e, i) => i * 20}
            duration={(e, i) => 500 + i * 50}
            opacity={[0,1]}
            easing={'easeOutExpo'}
            translateY={[400,0]} >    
                <div className='column'>
                    <img src="https://www.w3schools.com/w3images/wedding.jpg"/>
                    <img src="https://www.w3schools.com/w3images/rocks.jpg"/>
                    <img src="https://www.w3schools.com/w3images/falls2.jpg"/>
                    <img src="https://www.w3schools.com/w3images/paris.jpg"/>
                    <img src="https://www.w3schools.com/w3images/nature.jpg"/>
                    <img src="https://www.w3schools.com/w3images/mist.jpg"/>
                    <img src="https://www.w3schools.com/w3images/paris.jpg"/>
                </div>
            </Anime>


            <Anime 
            delay={(e, i) => i * 20}
            duration={(e, i) => 250 + i * 50}
            opacity={[0,1]}
            easing={'easeOutExpo'}
            translateY={[400,0]}  >    
                <div className='column'>
                    <img src="https://www.w3schools.com/w3images/underwater.jpg"/>
                    <img src="https://www.w3schools.com/w3images/ocean.jpg"/>
                    <img src="https://www.w3schools.com/w3images/wedding.jpg"/>
                    <img src="https://www.w3schools.com/w3images/mountainskies.jpg"/>
                    <img src="https://www.w3schools.com/w3images/rocks.jpg"/>
                    <img src="https://www.w3schools.com/w3images/underwater.jpg"/> 
                </div>
            </Anime>



            <Anime 
            delay={(e, i) => i * 20}
            duration={(e, i) => 500 + i * 50}
            opacity={[0,1]}
            easing={'easeOutExpo'}
            translateY={[400,0]}  >   
                <div className='column'>
                    <img src="https://www.w3schools.com/w3images/wedding.jpg"/>
                    <img src="https://www.w3schools.com/w3images/rocks.jpg"/>
                    <img src="https://www.w3schools.com/w3images/falls2.jpg"/>
                    <img src="https://www.w3schools.com/w3images/paris.jpg"/>
                    <img src="https://www.w3schools.com/w3images/nature.jpg"/>
                    <img src="https://www.w3schools.com/w3images/mist.jpg"/>
                    <img src="https://www.w3schools.com/w3images/paris.jpg"/>
                </div>
            </Anime>


            <Anime 
            delay={(e, i) => i * 20}
            duration={(e, i) => 500 + i * 50}
            opacity={[0,1]}
            easing={'easeOutExpo'}
            translateY={[400,0]}  >   
                <div className='column'>
                    <img src="https://www.w3schools.com/w3images/underwater.jpg"/>
                    <img src="https://www.w3schools.com/w3images/ocean.jpg"/>
                    <img src="https://www.w3schools.com/w3images/wedding.jpg"/>
                    <img src="https://www.w3schools.com/w3images/mountainskies.jpg"/>
                    <img src="https://www.w3schools.com/w3images/rocks.jpg"/>
                    <img src="https://www.w3schools.com/w3images/underwater.jpg"/> 
                </div>
            </Anime>
        </div>
  );

class Grid extends React.Component{
    render(){
        return(
            <div id="grid">
                 <App/>
            </div>

        );
    }

}
export default Grid;