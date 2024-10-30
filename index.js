function generateRandomString() {
    const characters = 'AB-C+DEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 25 // Fixed length
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

setInterval(()=>{
    let date = new Date().toUTCString()
    console.log(`${date}: ${generateRandomString()}`)
},5000)