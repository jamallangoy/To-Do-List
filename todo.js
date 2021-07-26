function Todo({todo,index,remove}){

    function handle(){
        remove(index);
    }
    
    return(
    <>

<div className="todo">
      <img src="https://lh4.googleusercontent.com/proxy/qn3QldoJudteYddbqCEq-Am46QOSyuX7AXBMn_9b6VxWH-bDCuhh2zFWojHRXJbIWtOH5SlT-D0CiDL0HE4GPT3c1hATL1MIPQ4hwDi-Wig3TWq5=w1200-h630-p-k-no-nu" className="card-img" alt="..." />
    </div>
    <div className="card mb-3"  onClick={handle} style={{width:"200px", height:"auto"}}>
    
  <div className="row no-gutters">
    <div>
      <div className="card-body">
        <h5 className="card-title">{todo.text} (-)</h5>
        <p className="card-text">Here is a short message area for your todo item..</p>
      </div>
    </div>
  </div>
</div>

    </>
    )
}

