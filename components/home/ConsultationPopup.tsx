import React from 'react'
import { PopupButton } from 'react-calendly'

const ConsultationPopup = () => {
  return (
    <div>
                    <div id="root" style={{height:"40px", width: "200px"}}></div>
            
            <PopupButton
        url="https://calendly.com/spearingsystems"
        rootElement={document.getElementById("root") as HTMLElement}
        text="Start a Conversation"
        className='bg-[#0D2137] hover:bg-[#FF832B] p-2 rounded-md text-white '
      />

    </div>
  )
}

export default ConsultationPopup