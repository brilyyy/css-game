<script>
	let styles = {
		'bg-suasana-hati': 'white'
	};

	$: cssVar = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div class="h-screen flex flex-col md:flex-row" style={cssVar}>
	<div class="suasana-hati h-1/2 p-3 md:h-screen md:w-1/2">
		<div class="text-center flex flex-col justify-around h-full">
			<div class="text-3xl">
				<h1>
					{#if styles['bg-suasana-hati'] == 'blue'}
						😐
					{:else if styles['bg-suasana-hati'] == 'grey'}
						😭
					{:else if styles['bg-suasana-hati'] == 'yellow'}
						😄
					{:else if styles['bg-suasana-hati'] == 'red'}
						😡
					{:else}
						👋
					{/if}
				</h1>
			</div>
		</div>
	</div>
	<div
		class="bg-red-200 h-1/2 p-3 border-t-2 border-red-400 overflow-y-auto md:h-screen md:w-1/2 md:border-none"
	>
		<p>Beri background sesuai suasana hatimu!</p>
		<ul class="mb-3">
			<li>Kalau lagi galau <b>grey</b></li>
			<li>Kalau lagi seneng <b>yellow</b></li>
			<li>Kalau marah <b>red</b></li>
			<li>Kalau biasa aja <b>blue</b></li>
		</ul>
		<ul class="font-medium">
			<li class="border border-red-400 mb-2 p-3 rounded-sm">
				<p>
					.suasana-hati{'{'} <br />
					<span class="ml-3">background:</span>
					<input type="text" bind:value={styles['bg-suasana-hati']} />
					; <br />
					{'}'}
				</p>
			</li>
		</ul>
		<div class="flex justify-between">
			<a href="/play/1">prev</a>
			<a href="/play/3">next</a>
		</div>
	</div>
</div>

<style>
	.suasana-hati {
		background: var(--bg-suasana-hati);
	}
</style>
