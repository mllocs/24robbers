import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div className='videos'>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6IWnDEApv8A" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>Blue Skies</div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I4HNiRVwOGE" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>Dancers jam at Titanic sur Mer</div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3dSQIN5WKh0" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>Mannequin Challenge!</div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JUCn7tO1KTs" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>I've Found A New Baby – Live at BUS</div>
      </div>
    </div>

    <style jsx>{`
      .videos {
        padding: 0 0 40px;
        text-align: center;
      }

      .video_item {
        margin: 30px auto 0;
      }
    `}</style>
  </Layout>
)

export default Index
