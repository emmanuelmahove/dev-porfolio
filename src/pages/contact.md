# Contact Me

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = "https://tally.so/widgets/embed.js"
  script.onload = () => {
    if (window.Tally) {
      window.Tally.loadEmbeds()
    }
  }
  document.body.appendChild(script)
})
</script>

<div style="width: 100%; height: 50px;"></div>

<ClientOnly>
  <iframe
    data-tally-src="https://tally.so/embed/wdpNXd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
    loading="lazy" width="100%" height="228" frameborder="0" marginheight="0" marginwidth="0" title="Contact Me">  
  </iframe>
</ClientOnly>