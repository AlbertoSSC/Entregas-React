import { MemberEntity } from "@/pods";

export const getMembers = async (organization: string): Promise<MemberEntity[]> => {
  const response = await fetch(`https://api.github.com/orgs/${organization}/members`);
  const data = await response.json();
  if (response.status === 404) {
    return [];
  }
  return data;
};
