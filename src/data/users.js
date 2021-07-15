/**
 * 
 * @returns {Promise<Object>}
 */
export async function fetchUsers() {
    let res = await fetch("/api/users")
    let json = await res.json()

    //if (json.type === "error") throw new Error(json.message)

    return json
    // return [
    //     {
    //         username: "cqptain",
    //         permission: 2
    //     },
    //     {
    //         username: "cameron",
    //         permission: 1
    //     }
    // ]
}

/**
 * 
 * @param {Number} permNum 
 * @returns {String}
 */
export function parsePerm(permNum) {
    if (permNum == 1) return "Member"
    else if (permNum == 2) return "Admin"
    else return "Unkown"
}