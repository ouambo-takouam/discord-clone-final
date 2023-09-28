"use client";

import { MemberRole } from "@prisma/client";
import { ServerWithMembersWithProfiles } from "@types";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export default function ServerHeader({ server, role }: ServerHeaderProps) {
  return <div>Server Header</div>;
}
