import React from "react";

const Interior = () => {

    const handleSubmit = async (event:any) => {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the email value from the input field
      const email = event.target.elements[0].value.trim(); // Trim whitespace for accurate checking
  
      // Check if the email field is empty
      if (!email) {
        alert('Please enter your email.'); // Show an alert if email is empty
      } else {
        // Call an API if email is not empty
        try {
          const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }), // Send email as JSON
          });
  
          if (response.status === 200) {
            // toast.success("Message sent successfully");
            alert("message send")
          } else {
            // toast.error("Failed to send message");
            alert("failed to send")
          }
        } catch (error) {
          // toast.error("An error occurred while sending the message");
          alert("error")
        }

        //   if (response) {
        //     // Handle successful API response
        //     console.log('Email submitted successfully!');
        //     alert('Email submitted successfully!');
        //     event.target.reset(); // Optionally reset the form after successful submission
        //   } else {
        //     // Handle errors from the API
        //     console.error('Error submitting email:', response.statusText);
        //     alert('There was an error submitting your email. Please try again.');
        //   }
        // } catch (error) {
        //   // Handle any other errors (e.g., network issues)
        //   console.error('Error:', error);
        //   alert('An error occurred. Please check your network connection and try again.');
        // }
      }
    };  

  return (
    <div className="bg-[#0D2137] w-full flex items-center justify-center">
      <div className="w-[80%] flex md:flex-row flex-col  justify-between items-center m-[30px]">
        <div className="md:w-[40%]">
          <h1 className="heading sm:text-3xl text-2xl font-bold">
            Download The ultimate guide of digital marketing for interior design{" "}
          </h1>
        </div>
        <div>
          <form action="" className="flex items-center mt-3 md:mt-0" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full max-w-lg px-4 py-2 bg-white bg-opacity-75 text-gray-800 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF8E2B] text-white font-semibold rounded-r-md hover:bg-orange-600"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Interior;
