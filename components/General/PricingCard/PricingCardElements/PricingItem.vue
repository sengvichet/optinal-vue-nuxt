<template>

  <li class="item"><font-awesome-icon icon="check" /> {{ item }} </li>

  </template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

 
library.add(faCheck)

export default {
 name: 'PricingItem',
 props: {  
        item: { 
            type: String,
        }
  },
  components: {
      FontAwesomeIcon
  }
}

  </script>   


  <style>
 .fa-check {
    color: #1DB58E;
    padding-right: 10px;
 }



 #card ul {
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
}

#card ul li {
  color: rgba(46,46,46,0.70);
  padding-bottom: 1rem;
  text-align: left;
  position: relative;
  list-style: none;
  flex-basis: 100%;
  padding-right: 0;
  }

#card ul li:last-child {
  padding-bottom: 0;
}

 @media (min-width: 768px) {

#card ul li {
  flex-basis: 27%;
  padding-right: 5%;
}

#card ul li:last-child {
  padding-bottom: 1rem;
}
}

  </style>