import moment from 'moment';
import Card from './components/Card';
import React from 'react'

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [

    <Card
    title= 'La La Land'
    image= 'https://i.imgur.com/po7UezG.jpg'
    genre= 'Drama/Romance'
    days = {days}
    times = {times}
    rating= {5}
    />
,
    <Card
    title= 'Paterson'
    image= 'https://i.imgur.com/pE0C9E0.jpg'
    genre= 'Drama/Comedy'
    days = {days}
    times = {times}
    rating= {2.5}
    />
  ,
    <Card
    title= 'Jackie'
    image= 'https://i.imgur.com/VqUi1sw.jpg'
    genre= 'Drama/Biography'
    days = {days}
    times = {times}rating= {4}/>
  ,
  <Card
    title= 'Lo and Behold Reveries of the Connected World'
    image= 'https://i.imgur.com/s106X7S.jpg'
    genre= 'Documentary'
    days = {days}
    times = {times}rating= {4.5}/>
  ,
  <Card
    title= '10 Cloverfield Lane'
    image= 'https://i.imgur.com/kV2BVdH.jpg'
    genre= 'Drama'
    days = {days}
    times = {times}rating= {1.5}/>
  ,
  <Card
    title= 'Birth of a Nation'
    image= 'https://i.imgur.com/a6HJj8S.jpg'
    genre= 'Fantasy/Myster'
    days = {days}
    times = {times}rating= {3.5}/>
  ,
  <Card
    title= 'De Palma'
    image= 'https://i.imgur.com/oOIa73M.jpg'
    genre= 'Documentary'
    days = {days}
    times = {times}rating= {4}/>
  ,
  <Card
    title= 'Doctor Strange'
    image= 'https://i.imgur.com/kyHDVOk.jpg'
    genre= 'Fantasy/Science Fiction'
    days = {days}
    times = {times}rating= {4}/>
  ,
  <Card
    title= 'Eddie the Eagle'
    image= 'https://i.imgur.com/GNrdAuF.jpg'
    genre= 'Drama/Sport'
    days = {days}
    times = {times}rating= {3}/>
  ,
  <Card
    title= 'Pride and prejudice and zombies'
    image= 'https://i.imgur.com/KhbG0Lw.jpg'
    genre= 'Thriller/Action'
    days = {days}
    times = {times}rating= {1.5}/>
  ,
  <Card
    title= 'Finding Dory'
    image= 'https://i.imgur.com/BTexHYJ.jpg'
    genre= 'Comedy/Adventure'
    days = {days}
    times = {times}rating= {4.5}/>
  ,
  <Card
    title= 'Green Room'
    image= 'https://i.imgur.com/Q0Ysh7L.jpg'
    genre= 'Crime/Thriller'
    days = {days}
    times = {times}rating= {2.5}/>
  ,
  <Card
    title= 'Kubo and the Two Strings'
    image= 'https://i.imgur.com/uTFCKZc.jpg'
    genre= 'Fantasy/Adventure'
    days = {days}
    times = {times}rating= {2}/>
  ,
  <Card
    title= 'In a Valley of Violence'
    image= 'https://i.imgur.com/DTtJ62G.jpg'
    genre= 'Drama/Western'
    days = {days}
    times = {times}rating= {4.5}/>
  ,
  <Card
    title= 'O.J.: Made in America'
    image= 'https://i.imgur.com/T8uc6x8.jpg'
    genre= 'Documentary'
    days = {days}
    times = {times}rating= {null}/>
  ,
  <Card
    title= 'Rogue One: A Star Wars Story'
    image= 'https://i.imgur.com/zOF2iYc.jpg'
    genre= 'Science Fiction/Action'
    days = {days}
    times = {times}rating= {4.5}/>
  ,
  <Card
    title= 'Sing Street'
    image= 'https://i.imgur.com/UteSOF3.jpg'
    genre= 'Drama/Romance'
    days = {days}
    times = {times}
    rating= {4.5}/>
  ,
  <Card
    title= 'Zoolander 2'
    image= 'https://i.imgur.com/ejlIijD.jpg'
    genre= 'Comedy'
    days = {days}
    times = {times}rating= {2.5}/>
  ,
];