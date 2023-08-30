import Content from './Components/Content'
import bgImg from './shubham-the-coder-bg.png'

export default function Home() {
  return (
    <>
    <div className="bgImg" style={{
      backgroundImage: `url(${bgImg.src})`,
      width: '100%',
      minHeight: '100vh',
      backgroundSize:'cover',
      backgroundAttachment:'fixed',
    }}>
    <div className="container">
      <Content />
    </div>
    </div>
    </>
  )
}
