import { MemberEntity, Member } from "@/pods";

export const mapMembersToVM = (member: MemberEntity[]): Member[] => {
  return member.map(mapMemberToVM);
};

const mapMemberToVM = (member: MemberEntity): Member => {
  return { id: member.id, login: member.login, avatarUrl: member.avatar_url,};
};
