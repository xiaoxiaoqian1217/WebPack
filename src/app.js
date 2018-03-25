import React from 'react';
import ReactDOM from 'react-dom';

//相同的类名并不会受影响
import acc from './common/style/acc.css';
import style from './common/style/main.css';
import style1 from './main.css';
import 'font-awesome/css/font-awesome.css';
// <span className={acc.ot}></span>

ReactDOM.render(
   <div className={style1.ot}>
       <span className="fa fa-rocket"></span>
        <span className="ot">React</span>
    </div>,
    document.getElementById('root')
);

