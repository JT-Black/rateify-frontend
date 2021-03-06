import React from 'react';
import ArtistCard from './ArtistCard';
import { getAllArtists } from '../../api/artist';

const ArtistIndex = () => {
  const [artists, setArtists] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllArtists();
        setArtists(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section has-background-dark">
      <div className="container">
        <div className="columns is-multiline">
          {!artists ? (
            <p>Loading Artists...</p>
          ) : (
            artists.map((artist) => <ArtistCard key={artist._id} {...artist} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtistIndex;
