import { useState } from 'react';
import { url } from './utils'

const handleUpdateTask = ({ id, textValue, dateValue, refreshTasks }) => {

    fetch(`${url}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ text: textValue, date: dateValue }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            refreshTasks(data);
        });
};

export default handleUpdateTask;
