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
        <p>24 Robbers Swing Band is one of the very few vintage jazz bands in Portugal.</p>
        <p>The band was born in 2015 when an international group of musicians and dancers united with one goal - to create an authentic swing band.</p>
        <p><iframe width="560" height="315" src="https://www.youtube.com/embed/3JEbZLF8Vnc" frameborder="0" allowfullscreen></iframe></p>
        <p>Getting their inspiration from 20's and 30's Harlem and such big names as Louis Armstrong, Duke Ellington or Bessie Smith, 24 Robbers don't leave anyone indifferent. Since their music is meant for dancing, it is a perfect tool to spread joy and make everyone swing to the rhythm.</p>
      </div>

      <img src='/static/hotel.jpg' />

      <div className='text_block'>
        <p>Though initially the band was meant for dancers only, 24 Robbers are now reaching to way broader audiences - from festivals to TV awards, from big stages around the country to more intimate events and are currently recording their first EP.</p>
        <p>With a cultural variety of musicians, 24 Robbers add new unexpected influences to their setlist. From Northern Europe to South America and of course, the Iberic peninsula, there are certainly original and unheard mixtures of musical spices in their performances, always ready to bring delight to one's listening ears and happiness to one's tapping feet.</p>
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
