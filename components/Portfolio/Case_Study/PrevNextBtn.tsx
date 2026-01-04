import Link from "next/link"
import { typographyScale } from "@/styles/typography"

type NextProject = {
  id: string
}

type Props = {
  next: NextProject | null | undefined
}

export default function PrevNextBtn({ next }: Props) {
  return (
    <div className='flex justify-between w-full'>
      <Link href="/Portfolio">
        <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 bg-transparent border-2 border-[#151419] text-[#151419] rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}>
          ← Go Back
        </button>
      </Link>

      <Link href={`/Portfolio/${next?.id ?? ""}`}>
        <button className={`whitespace-nowrap text-[${typographyScale.xs}] px-4 py-2 border-2 border-[#151419] bg-[#151419] text-white rounded-full font-[DM_Mono] hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out active:scale-95`}>
          {next?.id ?? ""} →
        </button>
      </Link>
    </div>
  )
} 