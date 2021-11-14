<script>
	let styles = {
		'font-fairy-tale': 'Fira Code',
		'font-majalah': 'Marck Script',
		'font-script': 'Balsamiq Sans'
	};

	$: cssVar = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div class="h-screen flex flex-col md:flex-row" style={cssVar}>
	<div class="bg-yellow-200 h-1/2 p-3 md:h-screen md:w-1/2">
		<div class="text-center flex flex-col justify-around h-full">
			<div class="film-fairy-tale text-xl">
				<h1>Film Fairy Tale</h1>
			</div>
			<div class="majalah-anak text-xl">
				<h1>Majalah Anak-Anak</h1>
			</div>
			<div class="tulis-script text-xl">
				<h1>Tulis Script</h1>
			</div>
		</div>
	</div>
	<div
		class="bg-red-200 h-1/2 p-3 border-t-2 border-red-400 overflow-y-auto md:h-screen md:w-1/2 md:border-none"
	>
		<p>
			Jika kita diberi kesempatan untuk memilih font yang sesuai dengan judul, apa yang akan kamu
			lakukan? <br />
			Kalian bisa mengacak atau mengatur kembali ketiga font tersebut sesuai dengan teks yang ada.
		</p>
		<ul class="mb-3">
			<li>Untuk font 1 bernama <b>'Marck Script'</b></li>
			<li>Untuk font 2 bernama <b>'Balsamiq Sans'</b></li>
			<li>Untuk font 3 bernama <b>'Fira Code'</b></li>
		</ul>
		<ul class="font-medium">
			<li class="border border-red-400 mb-2 p-3 rounded-sm">
				<p>
					.film-fairy-tale{'{'} <br />
					<span class="ml-3">font-family:</span>
					<input type="text" bind:value={styles['font-fairy-tale']} />; <br />
					{'}'}
				</p>
			</li>
			<li class="border border-red-400 mb-2 p-3 rounded-sm">
				<p>
					.majalah-anak{'{'} <br />
					<span class="ml-3">font-family:</span>
					<input type="text" bind:value={styles['font-majalah']} />; <br />
					{'}'}
				</p>
			</li>
			<li class="border border-red-400 mb-2 p-3 rounded-sm">
				<p>
					.tulis-script{'{'} <br />
					<span class="ml-3">font-family:</span>
					<input type="text" bind:value={styles['font-script']} />; <br />
					{'}'}
				</p>
			</li>
		</ul>
		<a href="/play/2">next</a>
	</div>
</div>

<style>
	.film-fairy-tale {
		font-family: var(--font-fairy-tale);
	}
	.majalah-anak {
		font-family: var(--font-majalah);
	}
	.tulis-script {
		font-family: var(--font-script);
	}
</style>
