// campaignService.ts
import config from "./callchimpConfig";
import { CampaignsApi } from "@dynopii/callchimp";

const campaignsApi = new CampaignsApi(config);

export const listCampaigns = async () => {
  try {
    const campaigns = await campaignsApi.campaignsList();
    return campaigns;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
};
