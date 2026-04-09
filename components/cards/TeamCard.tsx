import { TeamMember } from "@/lib/types";
import { Avatar } from "@/components/ui/Avatar";

export interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className = "" }: TeamCardProps) {
  // Generate Initials from name (e.g., "Mustafa S." -> "MS")
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl bg-white hover:shadow-lg transition-all ${className}`}>
      
      <div className="mb-5 ring-4 ring-gray-50 rounded-full">
        <Avatar 
          src={member.image?.startsWith("/") ? member.image : undefined} // Only valid / paths
          initials={initials} 
          size="xl" 
          alt={member.name} 
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">
        {member.name}
      </h3>
      
      <p className="text-sm text-blue-600 font-medium mb-4">
        {member.role}
      </p>
      
      <p className="text-sm text-gray-500 line-clamp-3">
        {member.shortBio || member.bio}
      </p>

      {member.skills && member.skills.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {member.skills.slice(0, 3).map(skill => (
            <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      )}

    </div>
  );
}
