<script>
    import Top from './Top.svelte'

    let sessionId = localStorage.getItem("session")
    let username = localStorage.getItem("user")

    let promise = validateCredentials()

    async function validateCredentials() {
        if ((!sessionId && username) || (sessionId && !username) || isNaN(sessionId)) {
            localStorage.removeItem("session")
            localStorage.removeItem("user")
            return
        }

        if (!sessionId && !username) return
        const res = await fetch("/api/validate-session", {
            method: "POST",
            body: JSON.stringify({
                user: username,
                sessionId: sessionId
            })
        })
        const json = await res.json()

        if (res.ok) {
            if (json.type === "error") console.log(json.message)
            else if (!json.validated) {
                localStorage.removeItem("session")
                localStorage.removeItem("user")
            }
        } else {
            throw new Error(json)
        }
    }

</script>

<div id="page">
    <!-- svelte-ignore empty-block -->
    {#await promise}
    {:then}
    <Top />
    <div id="page-body">
        <slot />
    </div>
    {/await}
</div>