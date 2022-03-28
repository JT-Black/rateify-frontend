import React from 'react';
import { createArtist } from '../../api/artist';
import { useNavigate } from 'react-router-dom';

const AddArtist = () => {
  const navigate = useNavigate();

  const [newArtist, setNewArtist] = React.useState({
    name: '',
    bio: '',
    img: ''
  });

  function handleChange(event) {
    setNewArtist({ ...newArtist, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const getData = async () => {
      try {
        await createArtist(newArtist);
        navigate('/artists');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Artist Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Artist Name"
                  name="name"
                  onChange={handleChange}
                  value={newArtist.name}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Artist Biography</label>
              <div className="control">
                <textarea
                  className="input"
                  placeholder="Artist Biography"
                  name="bio"
                  rows={5}
                  cols={5}
                  maxLength={500}
                  onChange={handleChange}
                  value={newArtist.bio}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Artist Image URL</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Artist Image URL"
                  name="img"
                  onChange={handleChange}
                  value={newArtist.img}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">
                Submit Artist
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddArtist;
