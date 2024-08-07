
const portfolioData:any = {
    google_ads: [

    ]
}

export async function GET(request: Request,  { params }: { params: { serviceID: string } }) {
    const videoId = params.serviceID; // Extract videoId from params
    if (portfolioData[videoId] && portfolioData[videoId].video_id === videoId) {
        console.log("Found matching video_id:", portfolioData[videoId].video_id);
        // Do something with the matching transcript
        return Response.json(portfolioData[videoId])
      } else {
        console.log("No matching video_id found.");
      }
  }