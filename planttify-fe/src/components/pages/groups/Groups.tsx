import React, { useState } from "react";
import GroupCard from "../../shared/GroupCard";

interface Group {
  id: number;
  name: string;
  description: string;
  location: string;
  established: string;
  imageUrl: string;
}

const groups: Group[] = [
  {
    id: 1,
    name: "Restorers",
    description: "Helping our Earth",
    location: "Kolkata",
    established: "2020",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Ecosystems",
    description: "Promoting biodiversity",
    location: "Kolkata",
    established: "2024",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Bird Watchers",
    description: "Birds are beautiful",
    location: "Howrah",
    established: "2018",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Green Earth",
    description: "Planting trees and more",
    location: "Kalyani",
    established: "2017",
    imageUrl: "https://via.placeholder.com/100",
  },
];

const Groups: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 md:p-8 mt-20">
      <input
        type="text"
        placeholder="Search groups..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-10 p-2 border rounded-lg w-full "
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <GroupCard
            key={group.id}
            name={group.name}
            description={group.description}
            location={group.location}
            established={group.established}
            imageUrl={group.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Groups;
