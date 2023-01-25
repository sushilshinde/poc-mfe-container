export async function verifyToken() {
    try {
        const response = await fetch(`${process.env.API_URL}/verify`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("user-token")}`,
            },
            method: "POST",
            body: JSON.stringify({}),
        })
        if(response.status !== 200) {
            throw Error('Failed Fetch')
        }else {
            const json = response.json()
            return Promise.resolve(json)
        }
    } catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}