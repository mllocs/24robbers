import { Component } from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

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
          <div className='title'>Concert at Mercado Bom Sucesso, Porto (November 2017)</div>
          <Gallery images={this.mapImages(TITANIC_IMAGES, 'porto_november_2017')} />
          <div className='title'>Concert at Titanic sur Mer, Lisbon (March 2017)</div>
          <Gallery images={this.mapImages(TITANIC_IMAGES, 'titanic_march_2017')} />
          <div className='title'>Concert at Salvaterra Festival (June 2017)</div>
          <Gallery images={this.mapImages(SALVATERRA_IMAGES, 'salvaterra')} />
        </div>

        <style jsx>{`
          .title {
            text-transform: uppercase;
            font-size: 20px;
            padding: 8px 0;
            margin-top: 40px;
          }

          .gallery {
            width: 968px;
            margin: 40px auto;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Photos;
