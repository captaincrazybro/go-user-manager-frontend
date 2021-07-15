<script>
    import '../styles/login.css'
    import { signIn } from '../data/credentials';

    $: session = localStorage.getItem("session");
    $: user = localStorage.getItem("user")

    $: loggedIn = session && user
    $: error = ""

    $: username = ""
    $: password = ""

</script>

<div id="login-element" style="margin: 0 auto" class="page-element">
    {#if loggedIn}
        <h3>You are already logged in</h3>
    {:else}
        <div id="login-form">
            {error}
            <form on:submit|preventDefault={signIn}>
                <div id={"login-form-fields"}>
                    <label class="login-form-label" for="login-username">Username</label><br />
                    <input id="login-username" class="login-form-field" type="text" bind:value={username} placeholder="Enter username" required/><br />
                    <label class="login-form-label" for="login-password">Password</label><br />
                    <input id="login-password" class="login-form-field" type="password" bind:value={password} placeholder="Enter password" required/><br /><br />
                </div>
                <div id="login-form-button"><input id="login-button" type="submit" value="Sign In" /></div>
            </form>
        </div>
    {/if}
</div>