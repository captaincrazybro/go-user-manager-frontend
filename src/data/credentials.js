export async function signIn() {
    let res = await fetch("/api/login", {
        method: "POST", 
        body: JSON.stringify({username: username, password: password})
    })
    let json = await res.json()

    if (json.type === "error") {error = json.message; return}

    let session = json.json.sessionId

    localStorage.setItem("session", session)
    localStorage.setItem("user", username)
    window.location.reload(false);
}

export function logOut() {
    fetch("/api/logout", {
        method: "POST",
        body: JSON.stringify({sessionId: parseInt(sessionId)})
    })
        .then(res => res.json())
        .then(json => {
            if (json.type === "error") {
                console.log(json.message)
            }
            window.location.reload(false);
        })
        .catch(err => {
            console.log(err)
        })
    localStorage.removeItem("session")
    localStorage.removeItem("user")
}