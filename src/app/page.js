import Content from './Components/Content'
import bgImg from './shubham-the-coder-bg.png'

export default function Home() {
  return (
    <>
    <div className="bgImg" style={{
      backgroundImage: `url(${bgImg.src})`,
      width: '100%',
      height: '100%',
    }}>
    <div className="container">
      <Content />
    </div>
    </div>
    </>
  )
}
