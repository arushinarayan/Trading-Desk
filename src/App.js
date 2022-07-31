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
  const [data, setData] = useState("");

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
      setData(response.btcusdt.asks);
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
        symbol="NASDAQ:AAPL"
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
              <td style={{color:'green'}}>{val.side}</td>
              <td style={{color:'red'}}>{val.status}</td>
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
          <th>Amount (BTC)</th>
          <th>Price (USDC)</th>
        </tr>
        <tr style={{borderBottom:'none'}}>
          <td style={{borderBottom:'none'}}>{data}</td>
        </tr>
      </table>
        </div>
    </div>
    <div style={{width: '25%', height:800, backgroundColor:'#333333',border: '1px solid gray'}}>
  <div >
      <div style={{display:'flex', height:50, border: '1px solid gray'}}>
          <div style={{borderRadius: 10, color:'green', backgroundColor:'#191B21', marginLeft:20, height:25, width:100, marginTop:15, textAlign:'center'}}>Buy</div>
          <div style={{borderRadius: 10, color:'red', marginLeft:50, height:25, width:100, marginTop:18, textAlign:'center'}}>Sell</div>
        </div>
        </div>
        </div>

        </div>
   </div>
  );
}

export default App;
