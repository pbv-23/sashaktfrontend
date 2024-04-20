import { Link } from 'react-router-dom';
import React from 'react';
import candy_crush from '../Pics/candy_crush.jpg';



const CandyHome = () => {

  return (

    <div className="Gamehomepage">

      <div className='main-body9'>

        <div className='home-about'>
          <Link to='/Game'><img className='candy1' src={'https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-home-page-signature-icon-home-page-button-navigation-image_1061910.jpg'} alt="Candy 1" /></Link>
          <Link to='/candyabout'><img className='candy2' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVpXgUZQnJNF8ThmRA0XCctf3fq3TSwMF6BRf1XoP2Hnfhi0-tBxdZs8h6-OHJ51dmY4&usqp=CAU'} alt="Candy 2" /></Link>
        </div>

        <div class="content9">
          <h1 className='banner9'>Candy Crush</h1>

          <div className='motto9'>"Get ready to crush it! Join the sweetest puzzle adventure with Candy Crush today!"</div>

        </div>

        <Link to={"/candygame"}> <button className='start-game9'>Start Game</button> </Link>

        <div className='main-second'>

          <img className='candy-crush-image9' src={candy_crush} alt="candy crush logo" />

        </div>

      </div>
    </div>
  );
}

export default CandyHome;
