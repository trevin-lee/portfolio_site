import { iconBarLinks } from "../constants/icon-bar-links"
import { RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";

const IconBar = ({buttonText, url}) => {
  return (
    <>
        <div className="flex text-4xl">
            <a href={iconBarLinks.linkedIn}
                className="hover:scale-105">
                <RiLinkedinBoxLine />
            </a>
            <a href={iconBarLinks.github}
                className="hover:scale-105">
                <RiGithubLine />
            </a>
            <a href={iconBarLinks.resumeDownload}
                className="hover:scale-105">
                <HiOutlineDocumentText />
            </a>
            <a className="flex items-center border-[3px] border-black font-light text-xl text-bold rounded-xl px-1 hover:scale-105"
                href={url}>
                {buttonText}
            </a>
        </div>
    </>
  )
}

export default IconBar