<template>
    <section class="section" id="features">
        <div class="wrap">
            <h2><slot/></h2>
                <feature-item :features="features"/>
        </div>
    </section>
</template>

<script>
import FeatureItem from '@/components/General/FeatureList/FeatureItem';

export default {
    name: 'FeatureWrapper',
    props: {
        features: {
            type: Array
        }
    },
    components: {
        FeatureItem
    }
}

</script>


<style scoped>
h2 {
  margin-bottom: 2rem;
  margin-top: 0;
  font-size: 2rem;
}




</style>