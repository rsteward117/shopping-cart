import powerBeats3 from "../images/pb3.jpg"
import beatsPro from "../images/beatsPro.jpg"
import bangAndOlufsen from "../images/BangAndOlufsenBeoplayPortal.jpg"
import airPods from "../images/airpods.jpg"

const products = [
        {
            productID: 0,
            name: 'PowerBeats 3', 
            src: powerBeats3,
            description: 'get your hands on the wireless headphones from Dr. Dre',
            cost: '$117.99'
        },
        {
            productID: 1, 
            name: 'beatsPro', 
            src: beatsPro,
            description: 'go completely wireless with Beats Pro by Dre',
            cost: '$115.99'
        },
        {
            productID: 2,
            name: 'bang and olufsen',
            src: bangAndOlufsen,
            description: 'get the bang and olufsen with the best in noise canceling to block out any distraction',
            cost: '$666.99'
        },
        {
            productID: 3,
            name: 'air pods', 
            src: airPods,
            description: 'get the new air pods from apple.',
            cost: '$169.99'
        }  
]

export default products;