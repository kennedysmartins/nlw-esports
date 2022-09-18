//1100 -> 18:20

export function convertMinutesStringToHour(minutesAmmount: number) {
    const hours = Math.floor(minutesAmmount / 60);
    const minutes = minutesAmmount % 60;


    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}