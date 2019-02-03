import { Component } from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const BRACO_PRATA_IMAGES = [
  { id: '1', caption: '' },
  { id: '2', caption: '' },
  { id: '3', caption: '' },
  { id: '4', caption: '' },
  { id: '5', caption: '' },
  { id: '6', caption: '' },
];

const HARD_ROCK_IMAGES = [
  { id: '1', caption: '' },
  { id: '2', caption: '' },
  { id: '3', caption: '' },
  { id: '4', caption: '' },
  { id: '5', caption: '' },
  { id: '6', caption: '' },
];

const XMAS_SWING_STATION_IMAGES = [
  { id: '1', caption: '' },
  { id: '2', caption: '' },
  { id: '3', caption: '' },
  { id: '4', caption: '' },
  { id: '5', caption: '' },
  { id: '6', caption: '' },
];

const PORTO_IMAGES = [
  { id: '1', caption: '' },
  { id: '2', caption: '' },
  { id: '3', caption: '' },
  { id: '4', caption: '' },
  { id: '5', caption: '' },
  { id: '6', caption: '' },
];

const TITANIC_IMAGES = [
  { id: '1', caption: '' },
  { id: '2', caption: '' },
  { id: '3', caption: '' },
  { id: '4', caption: '' },
  { id: '5', caption: '' },
  { id: '6', caption: '' },
];

const SALVATERRA_IMAGES = [
  { id: '1', caption: '' },
  { id: '2', caption: '' },
  { id: '3', caption: '' },
  { id: '4', caption: '' },
  { id: '5', caption: '' },
  { id: '6', caption: '' },
];

class Photos extends Component {
  mapImages(images, prefix) {
    return images.map(({ id, caption }) => {
      return {
        src: `/static/${prefix}/${id}.jpg`,
        thumbnail: `/static/${prefix}/${id}_320.jpg`,
        srcset: [`/static/${prefix}/${id}_320.jpg 320w`, `/static/${prefix}/${id}.jpg 1600w`],
        caption,
      }
    });
  }

  render() {
    return (
      <Layout>
        <div className='gallery'>
          <h2>Photos</h2>
          <div className='title'>Concert at Fabrica Braço de Prata, Lisboa (Nov 2018)</div>
          <Gallery images={this.mapImages(BRACO_PRATA_IMAGES, 'braco_prata_november_2018')} />
          <div className='title'>Concert at Hard Rock Cafe, Lisboa (May 2018)</div>
          <Gallery images={this.mapImages(HARD_ROCK_IMAGES, 'hard_rock_may_2018')} />
          <div className='title'>Concert at Teatro Comuna, Lisboa (December 2017)</div>
          <Gallery images={this.mapImages(XMAS_SWING_STATION_IMAGES, 'xmas_swing_station_december_2017')} />
          <div className='title'>Concert at Mercado Bom Sucesso, Porto (November 2017)</div>
          <Gallery images={this.mapImages(TITANIC_IMAGES, 'porto_november_2017')} />
          <div className='title'>Concert at Salvaterra Festival (June 2017)</div>
          <Gallery images={this.mapImages(SALVATERRA_IMAGES, 'salvaterra_june_2017')} />
          <div className='title'>Concert at Titanic sur Mer, Lisbon (March 2017)</div>
          <Gallery images={this.mapImages(TITANIC_IMAGES, 'titanic_march_2017')} />
        </div>

        <style jsx>{`
          .gallery {
            width: 968px;
            margin: 40px auto;
            text-align: center;
          }

          h2 {
            font-size: 32px;
          }

          .title {
            text-transform: uppercase;
            font-size: 20px;
            padding: 8px 0;
            margin-top: 40px;
          }

        `}</style>
      </Layout>
    );
  }
}

export default Photos;
