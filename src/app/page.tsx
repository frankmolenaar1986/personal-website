import Image from 'next/image'

export default function Home() {
  return (
    <div className="video-background">
      <div className="video-foreground">
        <iframe src="https://www.youtube.com/embed/II01bcPwOkw?controls=00&autoplay=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}
