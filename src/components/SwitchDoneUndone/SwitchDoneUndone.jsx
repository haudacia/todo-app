import React, { useState } from 'react';
import styles from './SwitchDoneUndone.module.css';

const SwitchDoneUndone = ({ id, done }) => {
  const [taskStatus, setTaskStatus] = useState(done);
  const url = "http://localhost:3000/tasks";

  const toggleTaskStatus = () => {
    const updatedStatus = !taskStatus;
    setTaskStatus(updatedStatus);
    return updatedStatus
  };

  const handleToggleClick = async () => {
    await updateTaskStatus(toggleTaskStatus());
    // calls the function below, that performs the fetch,
    // based on the value returned by calling toggleTaskStatus
    // (which is going to be always the inverse (Boolean)
    // of the status at the moment of the click)
  }

  const updateTaskStatus = async (updatedStatus) => {
    await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: updatedStatus })
    });
  };

  return (
    <button
      className={taskStatus ? styles.isDone : undefined}
      onClick={handleToggleClick}
      title={"mark as complete"}>
      <p>{taskStatus && ''}</p>
    </button>
  );
};

export default SwitchDoneUndone;

// previous attempts:
// import React, { useEffect, useState } from 'react'

// const SwitchDoneUndone = ({ id, done }) => {
//   const [taskPending, setTaskPending] = useState(true);
//   //const [taskStatus, setTaskStatus] = useState(done);

//   const url = "http://localhost:3000/tasks";
//   console.log(taskStatus, done);

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

// const SwitchDoneUndone = ({ id, done }) => {
//     console.log(done);

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
//     if (!done) {
//       markAsDone();
//       return <button onClick={markAsDone}>....</button>; // Using markAsDone directly
//     }
//   }, [done, id]); // Added id as a dependency to useEffect

//   return <button onClick={markAsDone}>.</button>; // Using markAsDone directly
// }

// export default SwitchDoneUndone;

