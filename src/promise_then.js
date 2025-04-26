export function get_message(n, t){
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(n + ", Wakeup time is here.")}, t);
    });
}