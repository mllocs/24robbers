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
          <a href="https://www.facebook.com/24RobbersSwingBand/">@24RobbersSwingBand</a>
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
