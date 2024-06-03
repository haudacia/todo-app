import { url } from './utils'

const handleUpdateTask = ({ id, textValue, dateValue, refreshTasks, date }) => {
    //console.log('--------------dateValue received is:', dateValue);
    fetch(`${url}/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            text: textValue,
            date: dateValue ? dateValue : ''
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            refreshTasks(data);
            //console.log('date is:', date)
        });
};

export default handleUpdateTask;