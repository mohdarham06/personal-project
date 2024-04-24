import React from 'react'

const Todos = () => {

    const todoData = [
        { id: 1, task: "Finish report", completed: false },
        { id: 2, task: "Attend meeting", completed: true },
        { id: 3, task: "Call client", completed: false },
    ];


    return (
        <section className="">
            <h2 className=" text-2xl">Todos</h2>

            <div className="">

                {todoData.map((todo) => (
                    <div key={todo.id} className={`flex flex-row ${todo.completed ? "completed" : ""}`}>
                        <input type="checkbox" checked={todo.completed} readOnly />
                        <p>{todo.task}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Todos