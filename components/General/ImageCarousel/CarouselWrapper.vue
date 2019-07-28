<template>
    <div>
         <image-carousel  :images="images"/>
    </div>
  


</template>

<script>
import ImageCarousel from '@/components/General/ImageCarousel/CarouselFunctions/ImageCarousel';
import FocusImagePreview from '@/components/General/ImageCarousel/CarouselFunctions/FocusImagePreview';

export default {
    name: 'CarouselWrapper',
    props: {
        images: {
        type: Array
         }
    },
    components: {
        ImageCarousel,
        FocusImagePreview
  }
}
</script>

<style>

</style>
