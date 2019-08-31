import React from 'react';
import './App.css';

function App() {
  return (
  <div>
    <iframe title='MPR sheet' style={styles.excelSheet} frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=C8F3AAF5577C0464%212209&authkey=%21AM8eamHq4G4O_ms&em=2&AllowTyping=True&ActiveCell='1%20LCY%20LODGMENT'!A1&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True"></iframe>
  </div>
  );
}

const styles = {
  excelSheet: {
    width: '100%',
    height: '100%',
    position:'absolute'

  }
}
export default App;
