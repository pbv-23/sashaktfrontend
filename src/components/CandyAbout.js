import React from 'react'
import { Link } from "react-router-dom";

const CandyAbout = () => {

  return (
    <div className='about9'>

      <div className='about9-title'>About</div>

      <div className='about9-body'>

        <Link to='/candyhome'><img className='candy1' src={'https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-home-page-signature-icon-home-page-button-navigation-image_1061910.jpg'} alt="Candy 1" /></Link>

        <p style={{ fontSize: '24px' }}> Dear Players,</p>

        <div className='about-instructions'>
          <h1>HOW TO PLAY</h1>

          <h2>Step 1:</h2> <p>To play the game, select a candy that need to be moved by double clicking on the candy.</p>

          <h2>Step 2:</h2><p>If the moved candy matches with other candies then score will be increased.</p>

          <h2>Step 3:</h2> <p>If the moved candy does not match woth other candies then the candy will not be moved.</p>

          <h2>Step 4:</h2> <p>After completion of 30 seconds the game ends and result of the game is displayed based on the score.</p>

          <p>Hope you enjoy our game. Have Fun!!!</p>

          <p> The Development Team </p>
        </div>

      </div>
    </div>

  )

}

export default CandyAbout
