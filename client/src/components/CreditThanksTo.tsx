'use client'

interface Tutor {
  name: string
  englishName: string
}

interface TutorSection {
  title: string
  tutors: Tutor[]
}

interface CreditTutorProps {
  title?: string
  sections: TutorSection[]
}

export function CreditThanksTo({ title = 'Thanks to', sections }: CreditTutorProps) {
  // PC 모드에서만 VD tutor 섹션을 3명씩 나누는 함수
  const splitVDTutorForDesktop = (sections: TutorSection[]): TutorSection[] => {
    const result: TutorSection[] = []

    sections.forEach((section) => {
      if (section.title === 'VD tutor' && section.tutors.length > 3) {
        // 3명씩 나누어서 새로운 섹션 생성
        for (let i = 0; i < section.tutors.length; i += 3) {
          result.push({
            title: 'VD tutor',
            tutors: section.tutors.slice(i, i + 3),
          })
        }
      } else {
        result.push(section)
      }
    })

    return result
  }

  return (
    <div className='w-full px-[35px] py-[56px] md:px-[40px] md:py-[56px] lg:px-[235px] lg:py-[84px] bg-white'>
      <div className='flex flex-col md:flex-row md:gap-[87px] lg:gap-[108px]'>
        {/* 제목 */}
        <div className='mb-9 lg:mb-0'>
          <h2 className='text-neutral-800 text-base lg:text-lg font-bold leading-[1.6] lg:leading-[1.5] tracking-[-0.02em]'>
            {title}
          </h2>
        </div>

        {/* 튜터 섹션들 */}
        <div className='flex-1'>
          {/* 모바일: 세로 배치 */}
          <div className='flex flex-col gap-[36px] md:hidden'>
            {sections.flatMap((section) =>
              section.tutors.map((tutor, tutorIndex) => (
                <div key={`${section.title}-${tutorIndex}`} className='flex justify-between'>
                  <div className='w-24 text-neutral-800 text-sm font-medium leading-[1.6] tracking-[-0.02em]'>
                    {section.title}
                  </div>
                  <div className='w-32'>
                    <div className='text-neutral-800 text-base font-bold leading-[1.6] tracking-[-0.02em]'>
                      {tutor.name}
                    </div>
                    <div className='text-zinc-600 text-sm font-medium leading-[1.6] tracking-[-0.02em]'>
                      {tutor.englishName}
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>

          {/* 태블릿: 세로 배치 */}
          <div className='hidden md:block lg:hidden'>
            <div className='grid grid-cols-2 gap-x-[121px] gap-y-5'>
              {sections.flatMap((section) =>
                section.tutors.map((tutor, tutorIndex) => (
                  <div key={`${section.title}-${tutorIndex}`} className='flex gap-5 min-h-[48px]'>
                    <div className='w-20 text-neutral-800 text-sm font-medium leading-[1.5] tracking-[-0.02em]'>
                      {section.title}
                    </div>
                    <div className='flex-1'>
                      <div className='text-neutral-800 text-base font-bold leading-[1.5] tracking-[-0.02em]'>
                        {tutor.name}
                      </div>
                      <div className='text-zinc-600 text-sm font-medium leading-[1.5] tracking-[-0.02em]'>
                        {tutor.englishName}
                      </div>
                    </div>
                  </div>
                )),
              )}
            </div>
          </div>

          {/* 데스크톱: 2열 배치 (더 넓은 간격) - VD tutor 3명씩 분할 적용 */}
          <div className='hidden lg:block'>
            <div className='space-y-9'>
              {(() => {
                const desktopSections = splitVDTutorForDesktop(sections)
                return Array.from({ length: Math.ceil(desktopSections.length / 2) }, (_, rowIndex) => (
                  <div key={rowIndex} className='flex gap-24'>
                    {desktopSections.slice(rowIndex * 2, rowIndex * 2 + 2).map((section, sectionIndex) => (
                      <div key={sectionIndex} className='flex-1 flex gap-20'>
                        <div className='w-24 text-neutral-800 text-sm font-medium leading-[1.5] tracking-[-0.02em]'>
                          {section.title}
                        </div>
                        <div className='flex-1 space-y-3.5'>
                          {section.tutors.map((tutor, tutorIndex) => (
                            <div key={tutorIndex}>
                              <div className='text-neutral-800 text-lg font-bold leading-[1.5] tracking-[-0.02em]'>
                                {tutor.name}
                              </div>
                              <div className='text-zinc-600 text-sm font-medium leading-[1.5] tracking-[-0.02em]'>
                                {tutor.englishName}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}