'use client'

interface TitleBody {
  title: string
  text: string
}

export function TitleBody({
  title = "나의 순간'에 몰입하는 방법",
  text = "Slac은 언제나 소리와 함께하는 Z세대가 소리로 '나의 순간'에 몰입하는 방법을 제안합니다. 모든 순간 나를 가장 가까이서 이해하는 웨어러블 오디오를 통해 나와 닮아가는 소리는 마치 나에게 딱 맞는 옷을 입는 것처럼 변화합니다. Slac과 함께 디렉터가 되어, 소리로 완성되는 나만의 #Scene을 만나보세요!",
}: TitleBody) {

  return (
    <div className='w-full px-4 py-14 xs:px-4 xs:py-14 md:px-10 md:py-14 lg:px-40 lg:py-[84px] xl:px-[240px] bg-white flex flex-col justify-start items-start gap-[20px] md:gap-[10px] lg:gap-[24px] overflow-hidden xs:overflow-visible md:overflow-hidden lg:overflow-hidden'>
      <div className='self-stretch flex flex-col xs:flex-col md:flex-row lg:flex-row justify-start items-start gap-4 xs:gap-4 md:gap-20 lg:gap-52'>
        <div className='xs:w-full md:w-[176px] lg:w-[264px] text-neutral-800 text-[36px] md:text-[24px] lg:text-[40px] font-semibold leading-[0.95] md:leading-[0.9] lg:leading-10'>
          {title}
        </div>
        <div className='w-full flex-1 text-neutral-800 text-[17px] lg:text-[18px] font-normal xs:font-normal md:font-medium lg:font-medium leading-7 xs:leading-7 md:leading-relaxed lg:leading-relaxed'>
          {text}
        </div>
      </div>
    </div>
  )
}
