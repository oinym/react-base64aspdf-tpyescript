import React from 'react';
import logo from './logo.svg';
import './App.css';
import PdfViewer from './pdf/component/PdfView';
import { base64STR } from './pdf/resources/basepdf';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <main>
                <PdfViewer {...{ byteArray: base64STR, fileType: 'pdf' }} />
            </main>
        </div>
    );
}

export default App;
