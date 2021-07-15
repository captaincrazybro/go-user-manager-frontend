<script>
    import { logOut } from "../data/credentials";

    $: sessionId = localStorage.getItem("session")
    $: username = localStorage.getItem("user")

    $: loggedIn = sessionId && username

</script>

<div id="top" class="page-element">
    <div id="welcome" style="margin: 5px">
        <strong>
            <a id="welcome-link" href="/" style="text-decoration: none;">Welcome to the GTIS Mock User Manager!</a>
        </strong>
    </div>
    <div id="login">
        {#if loggedIn}
            <div style="margin: 5px">
                <strong>Hello {username}!</strong>
                <button id="login-button" onClick={logOut}>Logout</button>
            </div>
        {:else}
            <div style="margin: 5px">
                <strong>You are not logged in!</strong>
                <a href="/login">
                    <button id="login-button">Login</button>
                </a>
            </div>
        {/if}
    </div>
</div>