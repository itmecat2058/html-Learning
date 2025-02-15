async function req(method, endpoint, data=null) {
    let userId = btoa("morley:602838")
    const headers = {
            "Authorization": `basic ${userId}`,
            "Content-Type": "application/json",
    };
    let options = {
        method: method,
        headers: headers,
    };

    let request = await fetch(`https://10.20.240.46/${endpoint}`, options);

    if(request.ok) {
        return await request.json
    }
};

window.addEventListener("DOMContentLoaded", async function() {
    let data = await req("get", "todo", null)
    console.log(data)
})
