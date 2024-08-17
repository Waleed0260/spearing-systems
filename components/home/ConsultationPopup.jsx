import React from 'react'
import { PopupButton } from 'react-calendly'

const ConsultationPopup = () => {
  return (
    <div>
                    <div id="root" style={{height:"40px", width: "200px"}}></div>
            
            <PopupButton
        url="https://calendly.com/zamanzahoor/free-consultation-to-boost-your-business?month=2023-06"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Start a Conversation"
        className='bg-[#0D2137] hover:bg-[#FF832B] p-2 rounded-md text-white '
      />

    </div>
  )
}

export default ConsultationPopup