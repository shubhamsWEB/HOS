import HandleRequest from "./requestsHandler";
import { cookies } from "next/headers";
function parseJwt(token) {
  return JSON.parse(Buffer.from(token?.split(".")?.[1], "base64").toString());
}
const authenticationInfo = () => {
  const authKey = cookies().get("shaadi_cpanel_jwt_cookie")?.value;
  const parseJwttoken = parseJwt(authKey);
  const memberlogin = parseJwttoken?.name?.split(" ")[0] ?? null;
  const email = parseJwttoken?.email;
  return { Authorization: `Bearer ${authKey}`, memberlogin,email };
};

export const fetchProfile = async () => {
  HandleRequest.setHeader(authenticationInfo());
  const response = await fetchCommerceCampaignList();
  return response;
};
export const fetchSelfProfile = async () => {
  const headers =authenticationInfo() 
  HandleRequest.setHeader(headers);
  const response = await fetchSelfProfileDetails({ email: headers.email });
  return response;
};
