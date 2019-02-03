import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div className="section">
      <h2>Contact</h2>
      <ul>
        <li>
          <span>Email:</span>
          24robbers.swing@gmail.com
        </li>
        <li>
          <span>Facebook:</span>
          <a href="https://www.facebook.com/24RobbersSwingBand/">facebook.com/24RobbersSwingBand</a>
        </li>
        <li>
          <span>Instagram:</span>
          <a href="https://www.instagram.com/24robbers.swing/">instagram.com/24Robbers.Swing</a>
        </li>
        <li>
          <span>YouTube:</span>
          <a href="https://www.youtube.com/channel/UCulICgQsJpZ3hbwx1kSkeTg/featured">youtube.com/24robbersswingband</a>
        </li>
        <li>
          <span>Telephone:</span>
          +351 964669477
        </li>
      </ul>
    </div>

    <style jsx>{`
      .section {
        text-align: center;
      }

      span {
        color: #ccc;
        margin-right: 8px;
      }

      h2 {
        font-size: 32px;
      }

      ul {
        list-style: none;
        margin: 30px 0 0;
        padding: 0;
      }

      li {
        margin: 10px 0;
        font-size: 24px;
      }
    `}</style>
  </Layout>
)

export default Index
