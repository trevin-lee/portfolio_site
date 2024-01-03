import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
    <section>
        <div className='text-white font-bold font-poppins py-5'>
        © 2023 Trevin Lee. All Rights Reserved.
        </div>
    </section>
  )
}

export default SectionWrapper(Footer,"bg-black", "")