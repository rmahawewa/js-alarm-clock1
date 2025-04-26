export async function secondAlarm(n, t){
    let name = n;
    return await new Promise((resolve, reject) => {
        setTimeout(() => {resolve(name + ", Wakeup time is here.")}, (t+4));
    });
}