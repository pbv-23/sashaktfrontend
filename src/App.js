import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageOne from './components/Pageone';
import Emoji from './components/Emoji';
import Signin from './components/Signin';
import Activities from './components/Activities';
import Youtubepage from './components/Youtubepage';
import YouTubeVideo from './components/Youtubevideo';
import Videoquiz from './components/Videoquiz';
import Playpage from './components/Playpage';
import KnowYourRights from './components/KnowYourRights';
import MazeHome from './components/MazeHome';
import OneLevel from './components/OneLevel';
import TwoLevel from './components/TwoLevel';
import ThreeLevel from './components/ThreeLevel';
import FourLevel from './components/FourLevel';
import FiveLevel from './components/FiveLevel';
import SixLevel from './components/SixLevel';
import SevenLevel from './components/SevenLevel';
import EightLevel from './components/EightLevel';
import NineLevel from './components/NineLevel';
import TenLevel from './components/TenLevel';
import Levels from './components/Levels';
import DIY from './components/DIY';
import Pikachu from './components/Pikachu';
import Jumpingfrog from './components/Jumpingfrog';
import Rose from './components/Rose';
import GameCompletePopup from './components/GameCompletePopup';
import GameBoard from './components/GameBoard';
import Labour from './components/Labour';
import Participation from './components/Participation';
import GameHome from './components/GameHome';
import Read from './components/Read';
import ReadQuiz from './components/ReadQuiz';
import DandDmainpage from './components/DandDmainpage';
import DandD from './components/DandD';
import Emergency from './components/Emergency';
import CandyHome from './components/CandyHome';
import CandyGame from './components/CandyGame';
import CandyAbout from './components/CandyAbout';
import FeedbackForm from './components/FeedbackForm';
import Pagetwo from './components/pagetwo';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/Signins" element={<Signin/>}/>
      <Route path="/emoji" element={<Emoji/>}/>
      <Route path="/mainpage" element={<Activities/>}/>
      <Route path="/see" element={<Youtubepage/>}/>
      <Route path="/yt/:vid" element={<YouTubeVideo/>}/>
      <Route path="/vidquiz" element={<Videoquiz/>}/>
      <Route path="/play" element={<Playpage/>}/>
      <Route path="/Know" element={<KnowYourRights/>}/>
      <Route path="/mazehome" element={<MazeHome/>}/>
      <Route path="/level" element={<Levels/>}/>
      <Route path="/one" element={<OneLevel/>}/>
      <Route path="/two" element={<TwoLevel/>}/>
      <Route path="/three" element={<ThreeLevel/>}/>
      <Route path="/four" element={<FourLevel/>}/>
      <Route path="/five" element={<FiveLevel/>}/>
      <Route path="/six" element={<SixLevel/>}/>
      <Route path="/seven" element={<SevenLevel/>}/>
      <Route path="/eight" element={<EightLevel/>}/>
      <Route path="/nine" element={<NineLevel/>}/>
      <Route path="/ten" element={<TenLevel/>}/>
      <Route path='/diy' element={<DIY/>}/>
      <Route path='/pikachu' element={<Pikachu/>}/>
      <Route path='/frog' element={<Jumpingfrog/>}/>
      <Route path='/rose' element={<Rose/>}/>
      <Route path='/memory' element={<GameBoard/>}/>
      <Route path='/GameCompletePopup' element={<GameCompletePopup/>}/>
      <Route path="/gamehome" element={<GameHome/>}/>
      <Route path="/part" element={<Participation/>}/>
      <Route path="/lab" element={<Labour/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/readquiz' element={<ReadQuiz/>}/>
      <Route path="/DandD" element={<DandD/>}/>
      <Route path="/D" element={<DandDmainpage/>}/>
      <Route path="/em" element={<Emergency/>}/>
      <Route path="/candyhome" element={<CandyHome/>} />
      <Route path="/candygame" element={<CandyGame/>} />
      <Route path="/candyabout" element={<CandyAbout/>}/>
      <Route path="/ff" element={<FeedbackForm/>}/>
      <Route path="/pt" element={<Pagetwo/>}/>
      <Route path="/top" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
