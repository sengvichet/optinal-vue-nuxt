<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  color: rgba(33, 38, 44, 1);
  margin-bottom:4px;
  font-weight: 700;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  outline: none;
  box-shadow: none;
  border: 1px solid #BCC0C7;
  padding: 15px 15px 13px;
  color:rgba(33, 38, 44, 1); 
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #ECEDF2;
  border-color: rgba(0, 210, 128, 1);
  outline: none;
}
</style>


