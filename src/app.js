
let count=0;
const addOne = () => {
    count++;
   renderCountApp();
};
const minusOne = () => {
    count--;
    renderCountApp();};
const resetCount = () =>{
    count = 0;
    renderCountApp();
};



const appRoot = document.getElementById('app');


const renderCountApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button id="counterAdd" className="btn" onClick={addOne}>+1</button>
            <button id="counterSub" className="btn" onClick={minusOne}>-1</button>
            <button id="counterRest" className="btn" onClick={resetCount}>Reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);

};
renderCountApp();