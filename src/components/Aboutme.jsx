import { SectionWrapper } from "../hoc" 

const Aboutme = () => {
  return (
    <section className="flex-col">
        <h2 className="font-bold font-poppins text-xl text-blue-500 py-3">About Me</h2>
        <h3 className="font-bold font-poppins text-3xl ">Riverside, CA</h3>
        <div className="py-5">
          <p className="font-poppins text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut etiam sit amet nisl purus in mollis. Faucibus scelerisque eleifend 
            donec pretium vulputate sapien nec sagittis. Mauris augue neque gravida in 
            fermentum et sollicitudin ac. Consectetur adipiscing elit ut aliquam purus sit amet. 
            In ornare quam viverra orci sagittis eu volutpat.
           </p>
          <div>
            <img/>
          </div>
        </div>
    </section>
    )
}

export default SectionWrapper(Aboutme, "py-5","")