const s_title = {
  width: '500px',
  margin: '140px auto 0',
  fontSize: '76px',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  textShadow: '2px 2px 1px #333'
}

const s_subtitle = {
  width: '800px',
  margin: '30px auto 0',
  fontSize: '40px',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  verticalAlign: 'middle',
  textShadow: '2px 2px 1px #333'
}

const Cover = (props) => (
  <div>
    <div className='cover_bg'></div>
    <div className='cover_image'></div>
    <div className='cover_text'>
      <div style={s_title}>{props.title}</div>
      <div style={s_subtitle}>{props.subtitle}</div>
    </div>

    <style jsx>{`
      .cover_bg {
        background-color: black;
        width: 100%;
        height: 600px;
        position: absolute;
        top: 0;
        z-index: -15;
      }

      .cover_image {
        background: url(static/braco_bw.jpg) no-repeat center center fixed;
        background-color: black;
        background-size: cover;
        width: 100%;
        height: 600px;
        position: absolute;
        top: 0;
        z-index: -10;
        opacity: 0.4;
      }

      .cover_text {
        width: 100%;
        height: 400px;
        z-index: 0;
      }
    `}</style>
  </div>
)

export default Cover;
