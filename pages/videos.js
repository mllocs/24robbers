import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <div className='videos'>
      <div className='video_item'>
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLittleBigApple%2Fvideos%2F1678412722265906%2F&show_text=0&width=560" width="560" height="315" styles="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <div className='video_title'>Shiny Stockings at Little Big Apple workshop, April 2018</div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6IWnDEApv8A" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>Blue Skies at Private Event, November 2017</div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/I4HNiRVwOGE" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>Dancers Jam at Titanic sur Mer, March 2017</div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JUCn7tO1KTs" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>I've Found A New Baby at BUS Paragem Cultural, June 2017 </div>
      </div>
      <div className='video_item'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3dSQIN5WKh0" frameborder="0" allowfullscreen></iframe>
        <div className='video_title'>Mannequin Challenge at O Bom O Mau e O Vilão, November 2016</div>
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
