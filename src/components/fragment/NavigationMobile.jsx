import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import Logout from "./Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/scss/Navigation.scss';
import SearchBar from "./SearchBar";
// import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import Star from '../assets/img/star.png';
// import GreenBook from '../assets/img/green book.png';
import Menu from '../assets/img/menu.png';
import { Link } from "react-router-dom";
import Brand from "./Brand";
import shoppingcarticon from '../assets/img/shopping-cart.png'




function NavigationMobile() {

  const db = firebase.firestore();
  // const [navusername, setnavUsername] = useState();//避免使用innerHTML, textContext 所以用useState();
  // const [updated, setUpdated] = useState();
  // const currentDate = new Date().toJSON().slice(0, 10);
  // const currentMonth = new Date().toJSON().slice(0, 7);
  // const [dailytimeplayed, setDailyTimeplayed] = useState();
  // const percentage = dailytimeplayed*100/20;
  // const custompathColor = `#89aae6`

  const getUserInfo = (user) =>{  //從firestore取得 student 集合中選取符合user.uid的資訊
    if(user){
        db.collection('student').doc(user.uid).get().then( doc => {
            // setnavUsername(doc.data().name)
            // if(doc.data().Resetallmusic === currentMonth+'alreadyupdated'){
              // setUpdated(`${currentMonth}'月次數已歸零'`)
            // }else{
              // setUpdated('尚未歸零')
            // }
        }, err =>{
            console.log(err.message);
        });
        // db.collection('student').doc(user.uid).collection('Logfile').doc(currentMonth).collection(currentMonth).doc(currentDate).get().then((doc)=>{
        //   setDailyTimeplayed(doc.data().todaytotaltimeplayed);
        // }).catch(()=>{
        //     setDailyTimeplayed("0")
        // })
    }else{

    }
  }    

    firebase.auth().onAuthStateChanged(user => {
        if(user){
            db.collection('student').onSnapshot(snapshot =>{
                getUserInfo(user);
            }, err =>{
                console.log(err.message);
            });
        }else{
            getUserInfo();
        }
    })

    
  return (
    <div>
      {['xl'].map((expand) => (
        <Navbar collapseOnSelect={true} key={expand} expand={expand} className="navbackground">
          <Container fluid className="containerfluid">

            <Navbar.Brand as={Link} to="/" href="/" className="brand">
             <Brand/>
            </Navbar.Brand>

            <Navbar.Toggle className="toggle" aria-controls={`offcanvasNavbar-expand-${expand}`}>
              {/* <img style={{width: 40, height: 40}} src={Menu} alt="menu"/> */}
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                  {/* <Brand/> */}
              </Offcanvas.Header>

              <Offcanvas.Body className="navbackground">
                <Nav className="d-flex align-items-center justify-content-end flex-grow-1">

                  {/* 耳環 */}
                  <Nav.Link to="/home/categories/Earring" href="/home/categories/Earring" className="navlink">耳環</Nav.Link>

                  {/* 戒指 */}
                  <Nav.Link to="/home/categories/Ring" href="/home/categories/Ring" className="navlink">戒指</Nav.Link>
                 

                  {/* 更多 */}
                  {/* <NavDropdown 
                    title=
                        {
                        <div className="d-flex align-items-center">
                          <img style={{ width: 18, marginRight: 4 }} 
                              src={ThumbUp} 
                              alt="bluebook"
                          />
                          更多
                        </div>
                        } 
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="navlink"
                  >
                      <NavDropdown.Item as={Link} to="/home/about" href="/home/about" className="subnavlink">
                      <img style={{ width: 18, marginRight: 4 }} 
                          src={Search} 
                          alt="bluebook"
                      /> 關於</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/home/userinfo" href="/home/userinfo" className="subnavlink">
                      <img style={{ width: 18, marginRight: 4 }} 
                          src={File} 
                          alt="bluebook"
                      /> 學生檔案</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/home/contact" href="/home/contact" className="subnavlink">
                      <img style={{ width: 18, marginRight: 4 }} 
                          src={Mail} 
                          alt="bluebook"
                      /> 聯絡我們</NavDropdown.Item>
                  </NavDropdown> */}

                </Nav>

                 {/*                                     搜尋欄位                         */}
                <div className="justify-content-center d-flex align-items-center">
                   <SearchBar/>
                </div> 
                {/*                                     登出                         */}
                <Logout/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}




        <Navbar collapseOnSelect={true} className="bottomnavbar">
          <Container fluid className="bottomcontainerfluid">
            <Navbar.Toggle className="toggle">
              <img style={{width: 40, height: 40}} src={Menu} alt="menu"/>
            </Navbar.Toggle>

            <Navbar.Offcanvas
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>

              <Offcanvas.Body className="bottomnavbar">
                <Nav className="d-flex align-items-center justify-content-end flex-grow-1">
                  <Nav.Link as={Link} to="/home/leaderboard" href="/home/leaderboard" className="navlink"><img src={shoppingcarticon} alt="shoppingcarticon" style={{width:20, height:20, marginRight:5}}/> Cart</Nav.Link>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}

export default NavigationMobile;