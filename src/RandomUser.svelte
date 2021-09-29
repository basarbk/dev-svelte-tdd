<script>
  import axios from 'axios';

  let user;

  //axios
  const loadRandomUser = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api')
      user = response.data.results[0];
    } catch (error) {
    }
  }

  // fetch
  // const loadRandomUser = async () => {
  //   try {
  //     const response = await fetch('https://randomuser.me/api');
  //     const body = await response.json();
  //     user = body.results[0];
  //   } catch (error) {
  //   }
  // }

</script>

<button on:click={loadRandomUser}>Load Random User</button>


{#if user}
  <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
{/if}
