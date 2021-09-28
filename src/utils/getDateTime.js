
const getDateTime = () => {
    const timeStamp = Date.now();
    const date = new Date(timeStamp);
    const dateString = date.toLocaleDateString('en-US');
    const hours = date.getHours();

    return `${dateString}/${hours}`;
}

export default getDateTime;
