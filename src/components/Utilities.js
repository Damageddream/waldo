export const timeFormater = (timePass) => {
    const minutes = () => {return ("0" + Math.floor((timePass / 60000) % 60)).slice(-2)}
    const seconds = () => {return ("0" + Math.floor((timePass / 1000) % 60)).slice(-2)}
    const time = minutes() + ':' +seconds()

    return{seconds, minutes, time}
}

