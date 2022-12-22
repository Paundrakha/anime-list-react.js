import {Button} from "react-bootstrap"
import animeBg from "../asset/IMG/BgV/Anime - 84574.mp4"

const Awalan = () => {
    return (
        <div className="main">
        <video className='videoTag' autoPlay loop muted>
          <source src={animeBg} type='video/mp4' />
        </video>
        <div className="content">
            <h1>Selamat Datang Di Issekai</h1>
            <p>Tempatnya para vvibu berkumpul</p>
            <Button>Lihat List</Button>
        </div>
        </div>
    )
}

export default Awalan

