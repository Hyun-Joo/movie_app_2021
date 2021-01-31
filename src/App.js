import React from 'react';

function Food({ name, picture }){
  //console.log(props.fav);
  return (
    <div>
      <h2>I like {name}.</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    name: 'vongole',
    image: 'https://www.the-pasta-project.com/wp-content/uploads/linguine-pasta-alle-vongole-linguine-with-clams-15-500x480.jpg'
  },
  {
    name: 'aglio e olio',
    image: 'https://www.simplydelisheats.com/uploads/2/4/2/3/24231242/img-7674.jpg'
  },
  {
    name: 'pasta alla norma',
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/198417.jpg'
  },
  {
    name: 'pomodoro',
    image: 'https://www.onelovelylife.com/wp-content/uploads/2019/01/pomodoro-sauce14SM.jpg'
  },
  {
    name: 'carbonara',
    image: 'https://www.insidetherustickitchen.com/wp-content/uploads/2020/03/Spaghetti-alla-Carbonara-square-Inside-the-Rustic-Kitchen.jpg'
  },
  {
    name: 'puttanesca',
    image: 'https://data.thefeedfeed.com/static/other/15379753825baba456b674f.png'
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food name={dish.name} picture={dish.image} />
      )}
    </div>
  );
}

export default App;
