import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//<App />JS普通对象

// let app = <App />;
// let h1 = <h1>helloworld<span>这是副标题</span></h1>;
// let root = document.getElementById('root');
// ReactDOM.render(h1,root);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//实现页面时刻的显示
function clock(){
    let time = new Date().toLocaleTimeString();
    let element = (
        <div>
            <h1>现在的时间是{time}</h1>
            <span>This is from China</span>
        </div>

    );
    let root = document.getElementById("root");
    ReactDOM.render(element,root);
}

clock();
//间隔函数
setInterval(clock,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
