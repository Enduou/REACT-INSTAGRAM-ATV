import React from 'react';
import Instagram from './instagram/page';

function App() {
  const postData = {
    profilePicture: 'https://i.imgur.com/1bX5QH6.jpg',
    username: 'Agatha',
    location: 'Inglaterra',
    likes: 42,
    coments: 7,
    centralPicture: 'https://i.imgur.com/yXOvdOSs.jpg',
  };

  return (
    <div>
      <Instagram {...postData} />
    </div>
  );
}

export default App;