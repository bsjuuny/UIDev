<template>
	<!-- demo root element -->
	<section>
		<h2>test2</h2>
		<input type="number" v-model.trim="number1" v-on:change.keydown="textSum" /> * <input type="number" v-model.trim="number2" v-on:change.keydown="textSum" />
		<p>{{ total }}</p>

		<textarea v-model="textareaMessage" placeholder="add multiple lines"></textarea>
		<p>{{ textareaMessage }}</p>
		
		<div>
			<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
			<label for="jack">Jack</label>
			<input type="checkbox" id="john" value="John" v-model="checkedNames">
			<label for="john">John</label>
			<input type="checkbox" id="mike" value="Mike" v-model.lazy="checkedNames">
			<label for="mike">Mike</label>
			<br>
			<span>Checked names: {{ checkedNames }}</span>
		</div>

		<div>
			<input type="radio" id="one" value="One" v-model="picked">
			<label for="one">One</label>
			<br>
			<input type="radio" id="two" value="Two" v-model="picked">
			<label for="two">Two</label>
			<br>
			<span>Picked: {{ picked }}</span>
		</div>

		<div>
			<select v-model="selected">
				<option disabled value="">Please select one</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div>

		<div>
			<select v-model="selectedB">
				<option v-for="option in options" v-bind:value="option.value">
					{{ option.text }}
				</option>
			</select>
			<span>Selected: {{ selectedB }}</span>
		</div>
		<div style="height:500px;">&nbsp;</div>
	</section>
</template>

<script>
	export default {
		name: 'twoWay',
		// props: 
		// [
		// 	'number1'
		// ] ,
		// {
		// 	number1 : {type: Number},
		// 	number2 : {type: Number}
		// 	// typeC :  { type: Number, default: 0}
		// },
		data() { 
			return {
				number1: 0,
				number2: 0,
				total: 0,
				textareaMessage: '',
				checkedNames: [],
				picked: '',
				selected: '',
				selectedB: 'A',
				options: [
					{ text: 'One', value: 'A' },
					{ text: 'Two', value: 'B' },
					{ text: 'Three', value: 'C' }
				]
			}
		},
		methods: {
			textSum: function() {
				this.$data.total = parseInt(this.$data.number1) * parseInt(this.$data.number2);
			}
		}
  	}
</script>

<style lang="scss">
	@import '../assets/scss/main.scss';
	/*li {text-align:left;font-size:14px;}*/
</style>