import { useState } from 'react';

const FavoritesFolder = () => {
  const [favoriteDrugs, setFavoriteDrugs] = useState([]);

  return (
    <div>
      <div>{favoriteDrugs}</div>
    </div>
  );
};

export default FavoritesFolder;
