import Layout from '../components/Layout';
import Cover from '../components/Cover';

const Index = () => (
  <Layout>
    <Cover
      title='24 Robbers Swing Band'
      subtitle='A one of a kind vintage jazz band'
    />
    <div className='main_block'>
      <div className='text_block'>
        <p>Let’s swing it!</p>
        <p>24 Robbers is a multicultural group of vintage jazz & blues musicians and dancers based in Lisbon, well known among the swing dancers in Portugal.</p>
        <p>One of the very few vintage jazz bands in Portugal, 24 Robbers are making themselves a name on the dance-floors, clubs and festivals.</p>
      </div>

      <img src='/static/hotel.jpg' />

      <div className='text_block'>
        <p>This international group, that truly appreciate the art of swing, is heavily influenced by Fats Waller, Louis Armstrong, Ella Fitzgerald, Slim & Slam, Duke Ellington, Django Reinhardt and many other greats stars from the 1920s to the 1940s.</p>
        <p>They don’t play only for your listening pleasure. No sir, they don’t. They also play for your feet and body, which will probably find it pretty hard to stay still during a 24 Robbers concert!</p>
        <p>We can bring happiness and energy to any kind of event!</p>
      </div>

      <img src='/static/titanic_dancing1.jpg' />
    </div>

    <style jsx>{`
      .text_block {
        background-color: #FDE8DE;
        padding: 40px 100px;
        text-align: center;
        color: #6D625E;
      }

      .main_block {
        background-color: black;
        text-align: center;
      }

      p {
        margin: 40px 0;
        font-size: 24px;
        line-height: 32px;
      }

      img {
        width: 70%;
        margin: 0 auto;
      }
    `}</style>
  </Layout>
)

export default Index
