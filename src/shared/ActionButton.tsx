import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode,
    setSelectedPage: (value: SelectedPage) => void;

}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink 
        className="rounded-3xl  bg-secondary-500 px-10 py-2	text-center hover:bg-primary-500 hover:text-white  duration-700	"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton