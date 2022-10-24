import { useRef, useState } from 'react';


const Listitems = ({ val, settodos, todos }) => {
	const [editing, setediting] = useState(false);
	const valueListRef = useRef();
	const taskTodelete = newtasktodelet => {
		settodos(
			todos.filter(newtask => {
				return newtask.id !== newtasktodelet;
			})
		);
	};

	const Edit = e => {
		if (!editing) {
			valueListRef.current.contentEditable = true;
			valueListRef.current.focus();
			setediting(true);
		} else {
			val.text = valueListRef.current.textContent;
			valueListRef.current.contentEditable = false;
			setediting(false);
		}
	};
	return (
		<div className="Todo-container">
			<div className="">
        
				<div>
        
					<li 
          
           ref={valueListRef} > {val.text}</li> <div className='chekbox'>          <input type="checkbox"/> </div>
 
         <div className="taskTodeletebtn" >

<button onClick={() => taskTodelete(val.id)}>Delete</button>



           </div>
				</div>
			
				<div className="">
        
					

          <div className="taskToeditbtn">
        <button onClick={e => Edit(e)}>{!editing ? 'Edit' : 'Update'}</button>
         </div>

        
               </div>

               
            
			</div>
      
		</div>

    
	);
};
export default Listitems;


