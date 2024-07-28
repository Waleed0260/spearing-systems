
  const transcriptsData: any = {
    service_1: {
      video_id: 'service_1',
      sections1: {
        heading1:"Web Design & Competitor Analysis",
        desc1:"This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.",
        text1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word"
      },
      sections2: {
        heading2:"Website Design & Build",
        text2:"Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.",
        service1:"FULL CUSTOM WEBSITE DEVELOPMENT",
        service2:"Makreting microsuite build",
        service3:"Competition website build",
        service4:"On-going maintenance & support"
      },
      sections3: {
        heading2:"Your website should be a bold reflection of the quality you provide.",
        text2:"Here’s how we make that happen:",
        service1:"Full Website Development",
        service2:"UI/UX design",
        service3:"Mobile Optimization"
      },
    },
    service_2: {
        video_id: 'service_2',
        sections1: {
          heading1:"Web Design & Competitor Analysis",
          desc1:"This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.",
          text1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word"
        },
        sections2: {
          heading2:"Website Design & Build",
          text2:"Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.",
          service1:"FULL CUSTOM WEBSITE DEVELOPMENT",
          service2:"Makreting microsuite build",
          service3:"Competition website build",
          service4:"On-going maintenance & support"
        },
        sections3: {
          heading2:"Your website should be a bold reflection of the quality you provide.",
          text2:"Here’s how we make that happen:",
          service1:"Full Website Development",
          service2:"UI/UX design",
          service3:"Mobile Optimization"
        },
    },
    service_3: {
      video_id: 'service_3',
      sections1: {
        heading1:"Web Design & Competitor Analysis",
        desc1:"This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service.",
        text1:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word"
      },
      sections2: {
        heading2:"Website Design & Build",
        text2:"Websites can no longer just make sales, as in this day and age they also need to be able to engage and entertain. This is where we can help.",
        service1:"FULL CUSTOM WEBSITE DEVELOPMENT",
        service2:"Makreting microsuite build",
        service3:"Competition website build",
        service4:"On-going maintenance & support"
      },
      sections3: {
        heading2:"Your website should be a bold reflection of the quality you provide.",
        text2:"Here’s how we make that happen:",
        service1:"Full Website Development",
        service2:"UI/UX design",
        service3:"Mobile Optimization"
      },
  },
  };
  
  export async function GET(request: Request,  { params }: { params: { serviceID: string } }) {
      const videoId = params.serviceID; // Extract videoId from params
      if (transcriptsData[videoId] && transcriptsData[videoId].video_id === videoId) {
          console.log("Found matching video_id:", transcriptsData[videoId].video_id);
          // Do something with the matching transcript
          return Response.json(transcriptsData[videoId])
        } else {
          console.log("No matching video_id found.");
        }
    }