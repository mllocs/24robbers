import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div className="section">
      <h2>Upcoming concerts</h2>

      <div>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F24RobbersSwingBand%2F&tabs=events&width=500&height=244&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=643772419306962" width="500" height="244" style={{ border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    <style jsx>{`
      .section {
        text-align: center;
      }

      h2 {
        font-size: 32px;
      }
    `}</style>
  </Layout>
)

export default Index
