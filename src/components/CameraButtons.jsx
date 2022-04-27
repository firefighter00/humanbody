import { useState, useEffect  } from "react"
import {  ref, onValue} from "firebase/database";
import db from '../db'

const divStyle = {
    zIndex: 1,
    position: 'absolute', 
    width: '200px' ,
    // height: '100px', 
    background: '#FFFFFF', 
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25),inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
}

const CameraButtons = ({}) =>{
 
    const [falling, setFalling] = useState();
    const [accX, setAccX] = useState();
    const [accY, setAccY] = useState();
    const [accZ, setAccZ] = useState();
    const [heartrate, setHeartRate] = useState();
    const [mqsensor, setMQSensor] = useState();
    const [rotateX, setRotateX] = useState();
    const [rotateY, setRotateY] = useState();
    const [rotateZ, setRotateZ] = useState();
    const [handC, setHandC] = useState();
    const [handF, setHandF] = useState();
    const [headC, setHeadC] = useState();
    const [headF, setHeadF] = useState();


    useEffect(() => {
        // Update the document title using the browser API
        const accsensorRef = ref(db, 'Sensors/Acceleration/Falling');
        const accXRef = ref(db, 'Sensors/Acceleration/X');
        const accYRef = ref(db, 'Sensors/Acceleration/Y');
        const accZRef = ref(db, 'Sensors/Acceleration/Z');
        const heartrateRef = ref(db, 'Sensors/HeartRate');
        const mqsensorRef = ref(db, 'Sensors/MQSensor/PPM');
        const rotateXRef = ref(db, 'Sensors/Rotation/X');
        const rotateYRef = ref(db, 'Sensors/Rotation/Y');
        const rotateZRef = ref(db, 'Sensors/Rotation/Z');
        const handTempCRef = ref(db, 'Sensors/Temperature/Hands/C');
        const handTempFRef = ref(db, 'Sensors/Temperature/Hands/F');
        const headTempCRef = ref(db, 'Sensors/Temperature/Head/C');
        const headTempFRef = ref(db, 'Sensors/Temperature/Head/F');


        onValue(accsensorRef, (snapshot) => {
            setFalling(snapshot.val());
        });
        onValue(accXRef, (snapshot) => {
            setAccX(snapshot.val());
        });
        onValue(accYRef, (snapshot) => {
            setAccY(snapshot.val());
        });
        onValue(accZRef, (snapshot) => {
            setAccZ(snapshot.val());
        });
        onValue(heartrateRef, (snapshot) => {
            setHeartRate(snapshot.val());
        });
        onValue(mqsensorRef, (snapshot) => {
            setMQSensor(snapshot.val());
        });
        onValue(rotateXRef, (snapshot) => {
            setRotateX(snapshot.val());
        });
        onValue(rotateYRef, (snapshot) => {
            setRotateY(snapshot.val());
        });
        onValue(rotateZRef, (snapshot) => {
            setRotateZ(snapshot.val());
        });
        onValue(handTempCRef, (snapshot) => {
            setHandC(snapshot.val());
        });
        onValue(handTempFRef, (snapshot) => {
            setHandF(snapshot.val());
        });
        onValue(headTempCRef, (snapshot) => {
            setHeadC(snapshot.val());
        });
        onValue(headTempFRef, (snapshot) => {
            setHeadF(snapshot.val());
        });
      },[]);
    
    return(
        <>
        {/* <Card name ={name} imageUrl={imageUrl} des={des} /> */}
        <div style={{ left:'30%',top:'10%',
            ...divStyle
           
        }}>
             <p  style={{textAlign:'center',paddingTop:'20px'}}>Head Temperature {headC} C/ {headF} F</p>
             <p  style={{textAlign:'center',paddingTop:'20px'}}>Hands Temperature {handC} C/ {handF} F</p>
        </div>
        <div style={{  right:'30%',top:'10%',
            ...divStyle
        }}>
        <p  style={{textAlign:'center',paddingTop:'20px'}}>Heart Rate :{heartrate == 0 ? " Still Not Detect" : heartrate}</p>
        </div>
            <div style={{ left:'30%',top:'30%',
            ...divStyle
        }}> 
        <p  style={{textAlign:'center'}}>Position : {falling == 0 ? <p style={{color: 'green'}}> Standing</p> : <p style={{color: 'red'}}> Falling </p>}</p>
        <p  style={{textAlign:'center'}}>Acceleration X: {accX}, Y: {accY}, Z: {accZ} rad/s</p>
        <p  style={{textAlign:'center'}}>Rotataion X: {rotateX}, Y: {rotateY}, Z: {rotateZ} rad/s</p>

        </div>
        <div style={{  right:'30%',top:'30%',
            ...divStyle
        }}>
        <p  style={{textAlign:'center',paddingTop:'20px'}}>Gas Detector {mqsensor} PPM</p>
        </div>
        </>
    )
}

export default CameraButtons