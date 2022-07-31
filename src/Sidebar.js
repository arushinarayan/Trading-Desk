import styles from './index.css'; 
import Arrow from "@material-ui/icons/ArrowForward";
import Square from "@material-ui/icons/Menu";
import BarChart from "@material-ui/icons/BarChart";
import Wallet from "@material-ui/icons/AccountBalanceWallet";
import Trend from "@material-ui/icons/TrendingUp";
import { FaMedal } from "react-icons/fa";
import { FaGift} from "react-icons/fa";

const SideBar = () => {
  return (
    <div class="SideBar" style={styles.SideBar}>
       <div style={{display: 'grid', justifyContent: 'space-evenly'}}>
        <Arrow style={{color: 'gray', paddingTop: 40, fontSize: 40}}></Arrow>
        <Square style={{color: 'gray', paddingTop: 80, fontSize: 40}}></Square>
        <BarChart style={{color: 'gray', marginTop: 40, fontSize: 40, padding:4, backgroundColor: '#191B21', borderRadius:10}}></BarChart>
        <Wallet style={{color: 'gray', paddingTop: 40, fontSize: 40}}></Wallet>
        <Trend style={{color: 'gray', paddingTop: 40, fontSize: 40}}></Trend>
        <FaMedal style={{color: 'gray', paddingTop: 40, paddingLeft: 8, fontSize: 30}}></FaMedal>
        <FaGift style={{color: 'gray', paddingTop: 40, paddingLeft: 8, fontSize: 30}}></FaGift>
       </div>
    </div>
  );
};

export default SideBar;