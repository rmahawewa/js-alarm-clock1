import { differenceInMilliseconds } from "date-fns";

export function getDifferenceInMilliseconds(date1,date2){
    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    if (isNaN(parsedDate1) || isNaN(parsedDate2)){
        return "Invalid date format";
    }

    return differenceInMilliseconds(parsedDate2, parsedDate1);
}