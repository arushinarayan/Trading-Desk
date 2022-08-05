import styles from './index.css'; 
import btc from './images/bitcoin.png'
import DropDown from "@material-ui/icons/KeyboardArrowDown";
import Arrow from "@material-ui/icons/ArrowUpward";
import Donut from "@material-ui/icons/DonutLarge";
import Lens from "@material-ui/icons/CenterFocusStrong";
import Square from "@material-ui/icons/CropSquare";

const Navbar = () => {
  return (
    <div class="NavBar" style={styles.NavBar}>
      <div style={{display: 'flex'}}>
       <div>
        <div style={{display: 'flex'}}>
        <img src={btc} style={{height: 50, width: 50, padding:15}}></img>
          <div style={{display: 'block'}}>
        <h5 style={{color: 'white', lineHeight: 0, paddingTop:10, fontSize:15}}>BitCoin</h5>
        <h5 style={{color: 'gray', lineHeight: 0, fontSize:12}}>BTC/USDC</h5>
        </div>
        <DropDown style={{color: 'white', paddingTop:20, fontSize: 30}}></DropDown>
        <div style= {{borderLeft: '1px solid gray', height: '100px', marginLeft:10}}></div>
        </div>
       </div>
       <div>
        <div style={{display: 'flex', paddingLeft: 20, paddingRight: 20}}>
        <div style={{display: 'block'}}>
        <h5 style={{color: 'gray', lineHeight: 0, fontSize:12, paddingTop:10}}>Last Price</h5>
        <h5 style={{color: '#00d956', lineHeight: 0, fontSize:20, }}>23,935.32 USDC</h5>
        </div>
        <div style= {{borderLeft: '1px solid gray', height: '100px', marginLeft:10}}></div>
        </div>
       </div>
       <div>
        <div style={{display: 'flex', paddingLeft: 10, paddingRight: 20}}>
        <div style={{display: 'block'}}>
        <h5 style={{color: 'gray', lineHeight: 0, fontSize:12, paddingTop:10}}>24h Change</h5>
        <div style={{display:'flex'}}>
        <Arrow style={{color: '#00d956',paddingTop:12, fontSize:25, }}></Arrow>
        <h5 style={{color: '#00d956', lineHeight: 0, fontSize:15, paddingTop:0 }}>+0.00%</h5>
        </div>
        </div>
        <div style= {{borderLeft: '1px solid gray', height: '100px', marginLeft:50,}}></div>
        </div>
       </div>
       </div>
       <div>
        <div style={{display: 'flex', paddingLeft: 10, paddingRight: 20}}>
        <div style={{display: 'block'}}>
        <h5 style={{color: 'gray', lineHeight: 0, fontSize:12, paddingTop:10}}>24h Low</h5>
        <h5 style={{color: 'white', lineHeight: 0, fontSize:15, }}>23,935.32 USDC</h5>
        </div>
        <div style= {{borderLeft: '1px solid gray', height: '100px', marginLeft:20}}></div>
        </div>
       </div>
       <div style={{display: 'flex', paddingLeft: 10, paddingRight: 20}}>
        <div style={{display: 'block'}}>
        <h5 style={{color: 'gray', lineHeight: 0, fontSize:12, paddingTop:10}}>24h High</h5>
        <h5 style={{color: 'white', lineHeight: 0, fontSize:15, }}>23,935.32 USDC</h5>
        </div>
        <div style= {{borderLeft: '1px solid gray', height: '100px', marginLeft:20}}></div>
        </div>

        <div>
          <div style={{display:'flex'}}>
          <div style={{borderRadius:10, backgroundColor: '#E0B0FF', color: 'white', width: 50, height: 20, textAlign: 'center', marginTop:40, marginLeft:40,}}>Pro</div>
          <div style={{marginTop:20}}>
          <Donut style={{color: 'gray', paddingLeft: 30, paddingTop: 20, fontSize: 30}}></Donut>
          <Lens style={{color: 'gray', paddingLeft: 8, fontSize: 30}}></Lens>
          <Square style={{color: 'gray', paddingLeft: 8, paddingTop:10, fontSize: 33}}></Square>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
