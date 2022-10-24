import React,{useEffect,useState,useRef} from 'react'
import sun from './images/sun.svg';
import Listitem from './Listitem'
import './App.css'

function App() {


const [todos, settodos] = useState([]);
	const [current, setcurrent] = useState('');

	const inputTask = useRef(null);

	const domElements = useRef([]);

	useEffect(() => {
		domElements.current = domElements.current.slice(0, todos.length);
	}, [todos]);


    const addtask = () => {
		const newtodo = {
			id: new Date().getTime(),
			text: current,
			completed: false,
		};
		settodos(prevtodos => [...prevtodos, newtodo]);
		inputTask.current.value = '';
	};

const handlesubmit = event => {
		event.preventDefault();
	};




	return (
        <div className="background-image">
            <div className="container">
                <div className="header">
                    <div className="Title">TODO</div>
                    <div className="theme">
                        <img src={sun} alt="" />
                    </div>
                </div>
                <div className="new-todo">
                    <div className="check">
                        <div className="check-mark"></div>
                    </div>
                    <div className="new-todo-input">
                        <form onSubmit={handlesubmit}>
                            <input type="text" placeholder="Create-New-Todo..."
                            
                         onChange={event => {
								setcurrent(event.target.value);
							}}
					
							ref={inputTask}
						
							onKeyDown={event => {
								if (event.keyCode === 13) addtask();
							}}   
                            
                            
                             />
                        </form>
                    </div>
                            <button onClick={addtask}>Add Task</button>
                </div>
<ul>
				{todos.map(val => {
					return (
						<Listitem
							val={val}
							key={val.id}
							domElements={domElements}
							todos={todos}
							settodos={settodos}
							addtask={addtask}
						/>
					);
				})}
			</ul>


	</div>
</div>
	)
}

export default App;
