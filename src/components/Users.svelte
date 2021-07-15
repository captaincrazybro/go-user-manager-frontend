<script>
    import { fetchUsers, parsePerm } from '../data/users'
    
    let promise = fetchUsers()

</script>

<div class="page-element page-body-column">
    <h3>Users</h3>
    <!-- svelte-ignore empty-block -->
    {#await promise}
    {:then users}
        {#each users as { username, permission }}
        <div class="sub-element" style="padding: 0 !important;">
            <li class="user-list-item">
                <div class="listed-user">
                    <strong>{username}</strong>
                    <strong>{parsePerm(permission)}</strong>
                </div>
            </li>
        </div>
        {/each}
    {/await}
</div>