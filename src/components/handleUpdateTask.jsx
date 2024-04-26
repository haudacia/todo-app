import { useState } from 'react';
import { url } from './utils'

const handleUpdateTask = ({ id, textValue, dateValue, refreshTasks }) => {

    // const handleUpdate = () => {
    //     if (onSave) {
    //       onSave(inputValue);
    //       setInputValue(text);
    //     }
    //   };
    fetch(`${url}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ text: textValue, date: dateValue }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            refreshTasks();
        });
};


export default handleUpdateTask;

// const [taskText, setTaskText] = useState(text);
// const url = "http://localhost:3000/tasks";

// const onSubmit = async (formData) => {
//     const url = "http://localhost:3000/tasks";
//     try {
//         const response = await fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         });
//         if (!response.ok) {
//             throw new Error("Failed to add task");
//         }
//         console.log("Task added successfully!", formData);
//         window.location.reload()
//     } catch (error) {
//         console.error("Error adding task:", error.message);
//     }
// };
// const updateText = async (updatedStatus) => {
//     const onSubmit = async (formData) => {
//         const url = "http://localhost:3000/tasks";
//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });
//             if (!response.ok) {
//                 throw new Error("Failed to add task");
//             }
//             console.log("Task added successfully!", formData);
//             window.location.reload()
//         } catch (error) {
//             console.error("Error adding task:", error.message);
//         }
//     };
//     await fetch(`${url}/${id}`, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         //if()
//         body: JSON.stringify({ text: updatedText })
//     });
// };
// // if (isEditing) {

// return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" {...register("text")} />

//         <button type="submit">ok</button>
//     </form>
// )
// };


// previous attempts:
// import React, { useEffect, useState } from 'react'

// const SwitchDoneUndone = ({ id, taskDone }) => {
//   const [taskPending, setTaskPending] = useState(true);
//   //const [text, settext] = useState(taskDone);

//   const url = "http://localhost:3000/tasks";
//   console.log(text, taskDone);

//   useEffect(() => {
//     if (taskPending) {
//       const markAsDone = async () => {
//         try {
//           await fetch(`${url}/${id}`, {
//             method: "PATCH",
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON(true)
//           });
//           setTaskPending(false);
//         } catch (error) {
//           console.log("Error marking task as done")
//         }
//       }
//       markAsDone();
//     }
//   })
//     return <button onClick={markAsDone}>.</button>;
// }

// export default SwitchDoneUndone;

//attempt 2:
// import React, { useEffect, useState } from 'react';

// const SwitchDoneUndone = ({ id, taskDone }) => {
//     console.log(taskDone);

//   const [isDone, setIsDone] = useState(false);

//   const url = "http://localhost:3000/tasks";

//   const markAsDone = async () => {
//     try {
//       await fetch(`${url}/${id}`, {
//         method: "PATCH",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ done: true })
//       });
//       setIsDone(true);
//     } catch (error) {
//       console.log("Error marking task as done")
//     }
//   }

//   useEffect(() => {
//     if (!taskDone) {
//       markAsDone();
//       return <button onClick={markAsDone}>....</button>; // Using markAsDone directly
//     }
//   }, [taskDone, id]); // Added id as a dependency to useEffect

//   return <button onClick={markAsDone}>.</button>; // Using markAsDone directly
// }

// export default SwitchDoneUndone;

