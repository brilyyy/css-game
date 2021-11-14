<script>
  let styles = {
    'tabel-background': 'white' ,
    'tabel-font-size': '12px' ,
    'tabel-font-color': 'black' ,
  }

  $: cssVar = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');

</script>

<div class="h-screen flex flex-col md:flex-row" style={cssVar}>
  <div class="suasana-hati h-1/2 p-3 md:h-screen md:w-1/2">
    <div class="text-center flex flex-col justify-around h-full">
      <div>
        <table class="w-full border tabel-font-size tabel-font-color">
          <thead>
            <th class="border tabel-background">No</th>
            <th class="border tabel-background">Nama</th>
            <th class="border tabel-background">Absen</th>
          </thead>
          <tr>
            <td class="border tabel-background">1</td>
            <td class="border tabel-background">Theo</td>
            <td class="border tabel-background">22</td>
          </tr>
          <tr>
            <td class="border tabel-background">2</td>
            <td class="border tabel-background">Budi</td>
            <td class="border tabel-background">3</td>
          </tr>
          <tr>
            <td class="border tabel-background">3</td>
            <td class="border tabel-background">Rani</td>
            <td class="border tabel-background">20</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="bg-red-200 h-1/2 p-3 border-t-2 border-red-400 overflow-y-auto md:h-screen md:w-1/2 md:border-none">
    <p>
      Ubah background sesuai kreativitasmu!
    </p>
    
    <ul class="font-medium">
      <li class='border border-red-400 mb-2 p-3 rounded-sm'>
        <p>
          .tabel-background{'{'} <br>
          <span class="ml-3">background:</span> <input type="text" bind:value={styles['tabel-background']}> ; <br>
          {'}'}
        </p>
      </li >
      <li class='border border-red-400 mb-2 p-3 rounded-sm'>
        <p>
          .tabel-font-color{'{'} <br>
          <span class="ml-3">color:</span> <input type="text" bind:value={styles['tabel-font-color']}> ; <br>
          {'}'}
        </p>
      </li >
      <li class='border border-red-400 mb-2 p-3 rounded-sm'>
        <p>
          .tabel-font-size{'{'} <br>
          <span class="ml-3">font-size:</span> <input type="text" bind:value={styles['tabel-font-size']}> ; <br>
          {'}'}
        </p>
      </li >
      
    </ul>
    <div class="flex justify-between">
      <a href="/play/2">prev</a>
      <a href="/play/4">next</a>
    </div>
  </div>
</div>

<style>
.tabel-background{
  background: var(--tabel-background);
}
.tabel-font-size{
  font-size: var(--tabel-font-size);
  color: var(--tabel-font-color);
}
</style>