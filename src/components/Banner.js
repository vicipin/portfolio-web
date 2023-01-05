import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Designer_Isometric from "../assets/img/Designer_Isometric.svg";
 
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [delta,setDelta] = useState(300 -Math.random() * 100)
    const [text, setText] = useState('');
    const period =2000;

    useEffect( ()=>{

        let ticker = setInterval( () => {
            tick();
        },delta)
        
        return () => {clearInterval(ticker)}
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedtext= isDeleting ? fulltext.substring(0, text.length - 1): fulltext.substring(0, text.length + 1);

        setText(updatedtext);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedtext === fulltext){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedtext ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);       
         }
    }

    return(
        <section className="banner" id="home">

            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Porfolio</span>
                        <h1>{`Hi i'm webdecoded `}<span className="wrap">{text}</span></h1>
                        <p>
                            lorem ipsum some reallly dumy text for papragraps. kkgfdklg lsknflkmgaksg klallrg laslgk;asl;gnm  lllghmh
                        </p>
                        <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                       <img src={Designer_Isometric} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}