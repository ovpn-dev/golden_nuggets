import hbrett from "../assets/howBrett.gif";

<div class="w-full h-auto relative bg-lyllw/40 !text-white">
  <div class="w-full h-screen absolute z-10 opacity-100"></div>
  <div class="max-w-screen-xl mx-auto p-4 flex flex-col gap-y-8 items-center justify-center relative z-20">
    <div class="flex flex-col items-center font-bold gap-y-4 translate-y-28 z-50">
      <div
        class="flex flex-col items-center"
        style="opacity: 1; transform: none;"
      >
        <p class="tracking-[0.5rem]">PEPE'S</p>
        <p class="tracking-[0.5rem]">BESTFRIEND</p>
      </div>
      <a
        href="#"
        class="hover:scale-110 transition-all ease-in-out duration-300"
      >
        <div
          class="bg-gradient-to-b from-gry to-blk p-6 rounded-full border-solid border-[1px] border-lyllw/70"
          style="opacity: 1; transform: none;"
        >
          <div
            class="bg-gradient-to-tr from-lyllw to-yllw rounded-full p-4"
            style="opacity: 1; transform: none;"
          >
            <div class="rounded-full w-40 h-40">
              <div style="width: 100%; height: 100%;">
                {" "}
                <Image
                  w="100%"
                  h="100%"
                  maxW={{ base: "50%", md: "auto" }}
                  objectFit="cover"
                  src={hbrett}
                  rounded="md"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div
      class="bg-gradient-to-t from-white/20 to-black/20 flex flex-col gap-y-8 items-center justify-center w-full pt-24 pb-12 rounded-2xl border-solid border-[1px] border-lyllw/70 relative overflow-hidden backdrop-blur-lg"
      style="opacity: 1;"
    >
      <div class="flex flex-col justify-center items-center text-6xl lg:text-9xl leading-[3rem] lg:leading-[5rem]">
        <p
          class="text-primary bg-gradient-to-r text-white w-max text-transparent pointer-events-none text-stroke"
          style="opacity: 1; transform: none;"
        >
          BRETT
        </p>
      </div>
      <div class="flex p-10 gap-x-3 flex-col md:flex-row gap-y-7 w-full">
        <div class="w-full">
          <div class="aspect-w-16 aspect-h-9">
            <div class="w-full h-full object-cover" style="position: relative;">
              <iframe
                src="https://iframe.cloudflarestream.com/023a54329fa9c24ef9fc6dab1dd8b428?preload=metadata"
                style="position: absolute; inset: 0px; height: 100%; width: 100%;"
                frameborder="0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
          <p class="text-center text-xl">How to buy on Base Mainnet</p>
        </div>
        <div class="w-full">
          <div class="aspect-w-16 aspect-h-9">
            <div class="w-full h-full object-cover" style="position: relative;">
              <iframe
                src="https://iframe.cloudflarestream.com/04c4c207b282817c614356d7815e673b?preload=metadata"
                style="position: absolute; inset: 0px; height: 100%; width: 100%;"
                frameborder="0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
          <p class="text-center text-xl">How to buy on CoinBase</p>
        </div>
      </div>
      <div class="flex gap-x-4" style="opacity: 1;">
        <a
          href="https://kyberswap.com/swap/base/eth-to-brett"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/100 to-lyllw/100 flex gap-x-3 items-center font-semibold hover:scale-[1.05] hover:from-yllw/20 hover:to-lyllw/100 transition-all ease-in-out duration-300">
            <p>Buy Now</p>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
          </button>
        </a>
        <a
          href="https://www.dextools.io/app/en/base/pair-explorer/0x404e927b203375779a6abd52a2049ce0adf6609b?t=1708765825026"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="px-4 py-3 border-solid border-[1px] border-lyllw/70 rounded-full bg-gradient-to-tr from-yllw/30 to-lyllw/30 font-semibold hover:scale-[1.05] hover:from-yllw/40 hover:to-lyllw/40 transition-all ease-in-out duration-300">
            See Charts
          </button>
        </a>
      </div>
    </div>
  </div>
</div>;
