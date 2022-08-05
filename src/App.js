import './App.css';
import SideBar from './Sidebar';
import NavBar from './Navbar';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { useState, useEffect } from "react";

const tableData = [
  {market: "BTCUSDC", time: 'Sun, 31 Jul', price: "43,935.23", amount:'0.00351', side:'BUY', status:'CANCEL'},
  {market: "BTCUSDC", time: 'Sun, 31 Jul', price: "43,935.23", amount:'0.00351', side:'BUY', status:'CANCEL'},
  {market: "BTCUSDC", time: 'Sun, 31 Jul', price: "43,935.23", amount:'0.00351', side:'BUY', status:'CANCEL'},
  {market: "BTCUSDC", time: 'Sun, 31 Jul', price: "43,935.23", amount:'0.00351', side:'BUY', status:'CANCEL'}, ,
 
]


function App() {    
  const [dataAsks, setDataAsks] = useState([]);
  const [dataBids, setDataBids] = useState([]);

  const subscription = { topic: "subscribe", to: "btcusdt" };
  useEffect(() => {
    const ws = new WebSocket(
      "wss://api-betatestnet.brine.finance/liveorderbookwire"
    );
    ws.onopen = () => {
      console.log("Connection Established!");
      ws.send(JSON.stringify(subscription));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response.btcusdt.asks);
      setDataAsks(response.btcusdt.asks);
      setDataBids(response.btcusdt.bids);
      //ws.close();
    };
    ws.onclose = () => {
      console.log("Connection Closed!");
      //initWebsocket();
    };

    ws.onerror = () => {
      console.log("WS Error");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
   <div>
  <SideBar />
  <NavBar />
  <div style={{ paddingLeft:100, display: "flex"}}>
    <div style={{width: 700, height:'100%'}}>
      <TradingViewWidget
        symbol="BTCUSDT"
        theme={Themes.DARK}
        width="700"
        height="400"
        />
      <div>
        <div style={{display:'flex', height:70, border: '1px solid gray'}}>
          <div style={{borderRadius: 10, color:'#E0B0FF', backgroundColor:'#191B21', marginLeft:50, height:25, width:100, marginTop:20, textAlign:'center'}}>All Orders</div>
          <div style={{borderRadius: 10, color:'gray', marginLeft:50, height:25, width:250, marginTop:20, textAlign:'center'}}>Pending Orders</div>
          <div style={{borderRadius: 10, color:'gray', marginLeft:50, height:25, width:100, marginTop:20, textAlign:'center'}}>Trades</div>
        </div>
        
      <table style={{border: '1px solid gray', width: '100%', height: 300}}>
        <tr>
          <th>MARKET</th>
          <th>TIME</th>
          <th>PRICE</th>
          <th>AMOUNT</th>
          <th>SIDE</th>
          <th>STATUS</th>
        </tr>
        {tableData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.market}</td>
              <td>{val.time}</td>
              <td>{val.price}</td>
              <td>{val.amount}</td>
              <td style={{color:'#00d956'}}>{val.side}</td>
              <td style={{color:'#ec6052'}}>{val.status}</td>
            </tr>
          )
        })}
      </table>
      </div>
    </div>
    <div style={{width: '25%', height:'100%'}}>
      <div >
      <div style={{display:'flex', height:50, border: '1px solid gray'}}>
          <div style={{borderRadius: 10, color:'#E0B0FF', backgroundColor:'#191B21', marginLeft:20, height:25, width:100, marginTop:20, textAlign:'center'}}>Order Book</div>
          <div style={{borderRadius: 10, color:'gray', marginLeft:50, height:25, width:100, marginTop:20, textAlign:'center'}}>Trades</div>
        </div>
        <table>
        <tr style={{borderBottom:'none'}}>
          <th style={{borderBottom:'none', paddingRight:40, paddingLeft:20}}>Amount (BTC)</th>
          <th style={{borderBottom:'none'}}>Price (USDC)</th>
        </tr>
        {dataAsks.slice(1, dataAsks.length).map((items, index) => {
          return (
            <tr>
             <td style={{borderBottom:'none', backgroundColor:'#663535', color:'#ec6052'}}>{items[0]}</td>
             <td style={{borderBottom:'none'}}>{items[1]}</td>
            </tr>
          )
        })}
         <div style={{border: '1px solid gray', color:'#00d956', textAlign:'center', justifyContent:'center', padding:10, width:'180%'}}><txt style={{ color:'#00d956', fontSize:20}}>23,935.32 USDC</txt></div>
         {dataBids.slice(1, dataBids.length).map((items, index) => {
          return (
            <tr>
             <td style={{borderBottom:'none', backgroundColor:'#1d514d', color:'#00ab94'}}>{items[0]}</td>
             <td style={{borderBottom:'none'}}>{items[1]}</td>
            </tr>
          )
        })}
      </table>
        </div>
    </div>
    <div style={{width: '25%', backgroundColor:'#242530',border: '1px solid gray'}}>
  <div>
      <div style={{display:'flex', height:50, border: '1px solid gray', height:'100%', paddingBottom:8}}>
          <div style={{borderRadius: 10, color:'#00d956', backgroundColor:'#191B21', marginLeft:20, height:25, width:100, marginTop:15, textAlign:'center', marginLeft:50}}>Buy</div>
          <div style={{borderRadius: 10, color:'#ec6052', marginLeft:50, height:25, width:100, marginTop:18, textAlign:'center'}}>Sell</div>
        </div>
        </div>
        <div style={{display: 'flex', paddingLeft: 20, paddingRight: 20, marginTop:30}}>
        <div style={{display: 'block', backgroundColor:'#25473b', borderRadius:20, padding:'10px 60px 10px 60px', marginLeft:10}}>
        <h5 style={{color: 'gray', lineHeight: 0, fontSize:12, paddingTop:10}}>AVAILABLE BALANCE</h5>
        <h5 style={{color: 'white', lineHeight: 0, fontSize:15, }}>0.1407 BTC</h5>
        <h5 style={{color: 'white', lineHeight: 0, fontSize:15, }}>1234.54 BTC</h5>
        </div>
        </div>
        </div>

        </div>
   </div>
  );
}

export default App;
