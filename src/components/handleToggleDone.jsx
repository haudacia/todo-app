import { url } from "./utils";

const handleCheckboxChange = ({ id, refreshTasks, done }) => {
    fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: !done })
    })
        .then((res) => res.json())
        .then(() => refreshTasks())
        .catch((error) =>
            console.error("Error updating task status:", error))
}

export default handleCheckboxChange;