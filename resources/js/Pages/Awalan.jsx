import { Canvas } from "@/Components/Canvas"
import { MainPost } from "@/Components/MainPost"
import { NewPost } from "@/Components/NewPost"
import { PopularPost } from "@/Components/PopularPost"
import { useState } from "react"

function Awalan(props) {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  
  function toggleCanvas() {
    setIsCanvasOpen((prev)=>!prev)
  }

  return (
    <div className="bg-white text-black  pt-[28px] px-[16px] pb-[64px] font-Inter Laptop:px-[160px] Laptop:pt-[90px]">
      <div className="Laptop:flex Laptop:gap-[30px] Laptop:relative Laptop:bottom-[6px]">
        <MainPost 
        srcImg={"\image-web-3-mobile.jpg"}
        Title={"The Bright Future of Web 3.0?"}
        Caption={"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"}>
        </MainPost>
      
        <NewPost NewT1={"Hydrogen VS Electric Cars"} NewC1={"Will hydrogen-fueled cars ever catch up to EVs?"}
        NewT2={"The Downsides of AI Artistry"} NewC2={"What are the possible adverse effects of on-demand AI image generation?"}
        NewT3={"Is VC Funding Drying Up?"} NewC3={"Private funding by VC firms is down 50% YOY. We take a look at what that means."}
        />
      </div>

      <div className="pt-[60px] flex flex-col gap-[34px] Laptop:flex-row Laptop:pt-[5px]">
        <PopularPost 
        srcImg={"/image-retro-pcs.jpg"} 
        number={"01"} 
        title={"Reviving Retro PCs"} 
        caption={"What happens when old PCs are given modern upgrades?"}>
        </PopularPost>

        <PopularPost 
        srcImg={"/image-top-laptops.jpg"} 
        number={"02"} 
        title={"Top 10 Laptops of 2022"} 
        caption={"Our best picks for various needs and budgets."}>
        </PopularPost>
        
        <PopularPost 
        srcImg={"/image-gaming-growth.jpg"} 
        number={"03"} 
        title={"The Growth of Gaming"} 
        caption={"How the pandemic has sparked fresh opportunities."}>
        </PopularPost>
      </div>
    </div>
  )
}

export default Awalan
