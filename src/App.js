import './App.css';
import {useState} from "react";
import Result from "./result";
import {Hamburger} from "./hamburger";
import {SideMenu} from "./side";

function App() {

  const [kcal,setKcal] = useState(0);
  const [show,setShow] = useState(false);
  const [ans, setAns] = useState([]);
  const [s, setS] = useState([]);

  const ham = Hamburger.sort(function(a, b) {
    return b[1] - a[1];
  });

  const side = SideMenu.sort(function(a, b) {
    return b[1] - a[1];
  });

  let ans_list = []

  const Calculation = ()=>{

    const filtered_ham = ham.filter((item) => { return item[1] < kcal;} );


    let min = 0 ;
    let max = filtered_ham.length;

    let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    const ans_ham = filtered_ham[a]

    setAns(ans_ham)

    let left = kcal-ans_ham[1]

    //サイド
    const filtered_side = side.filter((item) => { return item[1] < left;} );
    let min_s = 0 ;
    let max_s = filtered_ham.length;

    let b = Math.floor( Math.random() * (max_s + 1 - min_s) ) + min_s ;

    setS(filtered_side[b])

  }

  return (
    <div className="App">
      <h1 className="Title">マクドナルド1000kcalガチャ</h1>
        <p>健康志向の現代人のために作りました。希望のカロリー上限内でハンバーガーとサイドの組み合わせを提案いたします。</p>
        <input type="number" value={kcal} placeholder={"                           kcal"}
               onChange={(event) => setKcal(event.target.value)}/>
        <button onClick={()=>{setShow(true); Calculation()}}>決定</button>
      {/*<Result show={show} setShow={setShow} ans={ans_list}/>*/}
      <p>{ans}kcal</p>
      <p>{s}kcal</p>
    </div>
  );
}

export default App;
